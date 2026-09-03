import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PrismaService } from '../../database/prisma/prisma.service';
import { ProductsService } from '../products/products.service';

import { RazorpayService } from './gateways/razorpay/razorpay.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import {
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
  PaymentGateway,
} from '../../generated/prisma/enums';

import { pricingEngine, PricingItemInput } from './pricing-engine';
import { CalculatePricingDto } from './dto/calculate-pricing.dto';

@Injectable()
export class PaymentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productsService: ProductsService,
    private readonly razorpayService: RazorpayService,
    private readonly configService: ConfigService,
  ) {}

  async calculatePricing(dto: CalculatePricingDto, user?: any) {
    const itemsToPrice: PricingItemInput[] = [];

    if (dto.productId) {
      // 1. Single Product Buy Now Flow
      try {
        const product = this.productsService.getProductById(dto.productId);
        if (product) {
          itemsToPrice.push({ product, quantity: dto.quantity || 1 });
        }
      } catch (err) {
        throw new BadRequestException(`Product with ID "${dto.productId}" not found`);
      }
    } else if (dto.items && dto.items.length > 0) {
      // 2. Explicit items list passed
      for (const it of dto.items) {
        try {
          const product = this.productsService.getProductById(it.productId);
          if (product) {
            itemsToPrice.push({ product, quantity: it.quantity || 1 });
          }
        } catch (err) {
          // ignore or continue
        }
      }
    } else if (user && user.sub) {
      // 3. User Cart from database
      const cart = await this.prisma.cart.findUnique({
        where: { userId: user.sub },
        include: { items: true },
      });

      if (cart && cart.items && cart.items.length > 0) {
        for (const item of cart.items) {
          try {
            const product = this.productsService.getProductById(item.productId);
            if (product) {
              itemsToPrice.push({ product, quantity: item.quantity });
            }
          } catch (err) {
            // skip missing product
          }
        }
      }
    }

    const pricing = pricingEngine(itemsToPrice, {
      couponCode: dto.couponCode,
    });

    const isCouponApplied = Boolean(
      dto.couponCode && pricing.discount > 0,
    );

    return {
      ...pricing,
      appliedCoupon: isCouponApplied && dto.couponCode ? dto.couponCode.trim().toUpperCase() : null,
      couponDiscount: pricing.discount,
      itemCount: itemsToPrice.reduce((acc, it) => acc + (it.quantity || 1), 0),
    };
  }

  async createPayment(dto: CreatePaymentDto, user: any) {
    const userId = user.sub;

    const itemsToPrice: PricingItemInput[] = [];

    if (dto.productId) {
      // 1. Fetch Product for single checkout
      const product = this.productsService.getProductById(dto.productId);
      if (!product) {
        throw new BadRequestException('Product not found');
      }
      itemsToPrice.push({ product, quantity: dto.quantity || 1 });
    } else {
      // 2. Fetch User's Cart from database
      const cart = await this.prisma.cart.findUnique({
        where: { userId },
        include: { items: true },
      });
      if (!cart || !cart.items || cart.items.length === 0) {
        throw new BadRequestException('Your cart is empty');
      }

      for (const item of cart.items) {
        const product = this.productsService.getProductById(item.productId);
        if (!product) {
          throw new BadRequestException(`Product ${item.productId} not found`);
        }
        itemsToPrice.push({ product, quantity: item.quantity });
      }
    }

    // 3. Centralized Pricing Calculation via pricingEngine
    const pricing = pricingEngine(itemsToPrice, {
      couponCode: dto.couponCode,
    });

    const orderNumber = `OP-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const dbOrderItems = pricing.orderItems.map((item) => ({
      productId: item.productId,
      productName: item.productName,
      productImage: item.productImage,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      totalPrice: item.totalPrice,
    }));

    // 4. Create Order and OrderItems in the database
    const order = await this.prisma.order.create({
      data: {
        orderNumber,
        userId,
        subtotal: pricing.subtotal,
        discount: pricing.discount,
        tax: pricing.tax,
        shippingCharge: pricing.shippingCharge,
        totalAmount: pricing.totalAmount,
        currency: 'INR',
        status: OrderStatus.PENDING,
        items: {
          create: dbOrderItems,
        },
      },
    });

    // 5. Create payment order on gateway (Razorpay expects amount in paise)
    const amountInPaise = Math.round(pricing.totalAmount * 100);
    let gatewayOrderId: string | null = null;

    if (dto.gateway === PaymentGateway.RAZORPAY) {
      const razorpayOrder = (await this.razorpayService.createOrder({
        amount: amountInPaise,
        currency: 'INR',
        receipt: order.id,
      })) as { id: string };
      gatewayOrderId = razorpayOrder.id;
    }

    // 6. Create Payment record in the database
    await this.prisma.payment.create({
      data: {
        orderId: order.id,
        userId,
        gateway: dto.gateway,
        amount: pricing.totalAmount,
        currency: 'INR',
        status: PaymentStatus.PENDING,
        gatewayOrderId,
      },
    });

    // 7. Return response to initialize Razorpay checkout
    return {
      orderId: order.id,
      orderNumber: order.orderNumber,
      amount: amountInPaise,
      currency: 'INR',
      razorpayOrderId: gatewayOrderId,
      keyId:
        this.configService.get<string>('razorpay.keyId') ??
        process.env.RAZORPAY_KEY_ID,
    };
  }

  async handleRazorpayWebhook(
    payload: any,
    rawBody: Buffer,
    signature: string,
  ) {
    const isValid = this.razorpayService.verifyWebhookSignature(
      rawBody,
      signature,
    );

    if (!isValid) {
      throw new UnauthorizedException('Invalid Razorpay webhook signature.');
    }

    switch (payload.event) {
      case 'payment.captured':
        return this.handlePaymentCaptured(payload);

      case 'payment.failed':
        return this.handlePaymentFailed(payload);

      default:
        console.log(`Unhandled Razorpay event: ${payload.event}`);
        return;
    }
  }

  async verifyPayment(dto: VerifyPaymentDto, user: any) {
    const userId = user.sub;

    // 1. Verify cryptographic signature
    const isValid = this.razorpayService.verifyPayment({
      orderId: dto.razorpay_order_id,
      paymentId: dto.razorpay_payment_id,
      signature: dto.razorpay_signature,
    });

    // Find the Payment record associated with the gatewayOrderId
    const payment = await this.prisma.payment.findFirst({
      where: {
        gatewayOrderId: dto.razorpay_order_id,
        userId,
      },
    });

    if (!payment) {
      throw new BadRequestException('Payment transaction not found.');
    }

    if (!isValid) {
      // Update payment status to FAILED in the database
      await this.prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: PaymentStatus.FAILED,
          gatewayPaymentId: dto.razorpay_payment_id,
          gatewaySignature: dto.razorpay_signature,
        },
      });
      throw new BadRequestException(
        'Payment verification failed. Invalid signature.',
      );
    }

    // 2. Update Payment status to SUCCESS and Order status to CONFIRMED atomically
    let paymentMethod: PaymentMethod = PaymentMethod.UNKNOWN;
    try {
      const paymentDetails = (await this.razorpayService.getPayment(
        dto.razorpay_payment_id,
      )) as { method?: string };
      if (paymentDetails && paymentDetails.method) {
        paymentMethod = this.mapPaymentMethod(paymentDetails.method);
      }
    } catch (error) {
      console.error('Failed to fetch payment details from Razorpay:', error);
    }

    await this.prisma.$transaction([
      this.prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: PaymentStatus.SUCCESS,
          gatewayPaymentId: dto.razorpay_payment_id,
          gatewaySignature: dto.razorpay_signature,
          paymentMethod,
          paidAt: new Date(),
        },
      }),
      this.prisma.order.update({
        where: { id: payment.orderId },
        data: {
          status: OrderStatus.CONFIRMED,
        },
      }),
    ]);

    // Clear purchased matching cart items
    try {
      const orderItems = await this.prisma.orderItem.findMany({
        where: { orderId: payment.orderId },
      });
      const cart = await this.prisma.cart.findUnique({
        where: { userId },
        include: { items: true },
      });
      if (cart && cart.items.length > 0) {
        const productIdsInOrder = orderItems.map((item) => item.productId);
        await this.prisma.cartItem.deleteMany({
          where: {
            cartId: cart.id,
            productId: { in: productIdsInOrder },
          },
        });
      }
    } catch (err) {
      console.error('Failed to clear cart items after checkout:', err);
    }

    return {
      success: true,
      message: 'Payment verified and order confirmed successfully.',
      orderId: payment.orderId,
    };
  }

  private async handlePaymentCaptured(payload: any) {
    console.log('Payment Captured');
    console.log(payload);

    const paymentEntity = payload.payload.payment.entity;
    const gatewayOrderId = paymentEntity.order_id;
    const gatewayPaymentId = paymentEntity.id;
    const paymentMethod = paymentEntity.method;
    const amount = paymentEntity.amount;

    const payment = await this.prisma.payment.findFirst({
      where: { gatewayOrderId },
    });

    if (!payment) {
      console.error('Payment not found for gatewayOrderId:', gatewayOrderId);
      return;
    }

    if (payment.status === PaymentStatus.SUCCESS) {
      console.log(`Payment ${gatewayPaymentId} already processed.`);

      return;
    }

    await this.prisma.$transaction([
      this.prisma.payment.update({
        where: {
          id: payment.id,
        },
        data: {
          status: PaymentStatus.SUCCESS,
          gatewayPaymentId,
          paymentMethod: this.mapPaymentMethod(paymentMethod),
          paidAt: new Date(),
        },
      }),
      this.prisma.order.update({
        where: {
          id: payment.orderId,
        },
        data: {
          status: OrderStatus.CONFIRMED,
        },
      }),
    ]);
  }

  private async handlePaymentFailed(payload: any) {
    console.log('Payment Failed');
    console.log(payload);

    const paymentEntity = payload.payload.payment.entity;
    const gatewayOrderId = paymentEntity.order_id;
    const gatewayPaymentId = paymentEntity.id;
    const paymentMethod = paymentEntity.method;
    const failureReason = paymentEntity.error_description ?? 'Payment failed';

    const payment = await this.prisma.payment.findFirst({
      where: { gatewayOrderId },
    });

    if (!payment) {
      console.log(`Payment not found for ${gatewayOrderId}`);
      console.error('Payment not found for gatewayOrderId:', gatewayOrderId);
      return;
    }

    // Update payment status to FAILED
    await this.prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: PaymentStatus.FAILED,
        gatewayPaymentId,
        paymentMethod: this.mapPaymentMethod(paymentMethod),
        failureReason,
      },
    });

    await this.prisma.paymentAttempt.create({
      data: {
        paymentId: payment.id,
        status: PaymentStatus.FAILED,
        paymentMethod: this.mapPaymentMethod(paymentMethod),
        gatewayTransactionId: gatewayPaymentId,
        failureReason,
      },
    });
  }

  private mapPaymentMethod(method?: string): PaymentMethod {
    switch (method?.toLowerCase()) {
      case 'upi':
        return PaymentMethod.UPI;

      case 'card':
        return PaymentMethod.CARD;

      case 'netbanking':
        return PaymentMethod.NET_BANKING;

      case 'wallet':
        return PaymentMethod.WALLET;

      case 'emi':
        return PaymentMethod.EMI;

      case 'paylater':
        return PaymentMethod.PAY_LATER;

      default:
        return PaymentMethod.UNKNOWN;
    }
  }
}
