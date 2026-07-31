import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PrismaService } from '../../database/prisma/prisma.service';
import { ProductsService } from '../products/products.service';

import { RazorpayService } from './gateways/razorpay/razorpay.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';

@Injectable()
export class PaymentService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly productsService: ProductsService,
        private readonly razorpayService: RazorpayService,
        private readonly configService: ConfigService,
    ) { }

    async createPayment(dto: CreatePaymentDto, user: any) {
        const userId = user.sub;

        // 1. Fetch Product
        const product = this.productsService.getProductById(dto.productId);

        // 2. Pricing calculations
        const subtotal = Number(product.price) * dto.quantity;
        
        let discount = 0;
        if (dto.couponCode === 'SAVE100') {
            discount = Math.min(100, subtotal);
        }

        const tax = 0;
        const shippingCharge = 0;
        const totalAmount = subtotal - discount + tax + shippingCharge;
        const orderNumber = `OP-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

        // 3. Create Order and OrderItem in the database
        const order = await this.prisma.order.create({
            data: {
                orderNumber,
                userId,
                subtotal,
                discount,
                tax,
                shippingCharge,
                totalAmount,
                currency: 'INR',
                status: 'PENDING',
                items: {
                    create: {
                        productId: product.id,
                        productName: product.title,
                        productImage: product.imagePath,
                        quantity: dto.quantity,
                        unitPrice: product.price,
                        totalPrice: subtotal,
                    },
                },
            },
        });

        // 4. Create payment order on gateway (Razorpay expects amount in paise)
        const amountInPaise = Math.round(totalAmount * 100);
        let gatewayOrderId: string | null = null;

        if (dto.gateway === 'RAZORPAY') {
            const razorpayOrder = await this.razorpayService.createOrder({
                amount: amountInPaise,
                currency: 'INR',
                receipt: order.id,
            }) as any;
            gatewayOrderId = razorpayOrder.id;
        }

        // 5. Create Payment record in the database
        await this.prisma.payment.create({
            data: {
                orderId: order.id,
                userId,
                gateway: dto.gateway as any,
                amount: totalAmount,
                currency: 'INR',
                status: 'PENDING',
                gatewayOrderId,
            },
        });

        // 6. Return response to initialize Razorpay checkout
        return {
            orderId: order.id,
            orderNumber: order.orderNumber,
            amount: amountInPaise,
            currency: 'INR',
            razorpayOrderId: gatewayOrderId,
            keyId: this.configService.get<string>('razorpay.keyId') ?? process.env.RAZORPAY_KEY_ID,
        };
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
                    status: 'FAILED',
                    gatewayPaymentId: dto.razorpay_payment_id,
                    gatewaySignature: dto.razorpay_signature,
                },
            });
            throw new BadRequestException('Payment verification failed. Invalid signature.');
        }

        // 2. Update Payment status to SUCCESS
        await this.prisma.payment.update({
            where: { id: payment.id },
            data: {
                status: 'SUCCESS',
                gatewayPaymentId: dto.razorpay_payment_id,
                gatewaySignature: dto.razorpay_signature,
                paidAt: new Date(),
            },
        });

        // 3. Update associated Order status to CONFIRMED
        await this.prisma.order.update({
            where: { id: payment.orderId },
            data: {
                status: 'CONFIRMED',
            },
        });

        return {
            success: true,
            message: 'Payment verified and order confirmed successfully.',
            orderId: payment.orderId,
        };
    }
}