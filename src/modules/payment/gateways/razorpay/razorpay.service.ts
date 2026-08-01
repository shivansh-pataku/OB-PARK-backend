import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Razorpay from 'razorpay';
import * as crypto from 'crypto';
import { PaymentGateway, CreatePaymentOrderDto, VerifyPaymentDto } from '../../interfaces/payment-gateway.interface';


@Injectable()
export class RazorpayService implements PaymentGateway {
    private readonly razorpay: Razorpay;

    constructor(private readonly configService: ConfigService) {
        this.razorpay = new Razorpay({
            key_id: this.configService.getOrThrow<string>('razorpay.keyId'),
            key_secret: this.configService.getOrThrow<string>(
                'razorpay.keySecret',
            ),
        });
    }

    /**
     * Creates a Razorpay Order
     */
    async createOrder(data: CreatePaymentOrderDto) {
        return this.razorpay.orders.create({
            amount: data.amount,
            currency: data.currency,
            receipt: data.receipt,
        });
    }

    verifyPayment(data: VerifyPaymentDto): boolean {
        const secret = this.configService.getOrThrow<string>('razorpay.keySecret');
        const body = data.orderId + '|' + data.paymentId;
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(body)
            .digest('hex');

        const expectedBuffer = Buffer.from(expectedSignature);
        const signatureBuffer = Buffer.from(data.signature || '');

        if (expectedBuffer.length !== signatureBuffer.length) {
            return false;
        }

        return crypto.timingSafeEqual(expectedBuffer, signatureBuffer);
    }

    /**
     * Fetch Payment Details
     */
    async getPayment(paymentId: string) {
        return this.razorpay.payments.fetch(paymentId);
    }

    /**
     * Fetch Order Details
     */
    async getOrder(orderId: string) {
        return this.razorpay.orders.fetch(orderId);
    }

    /**
     * Refund Payment
     */
    async refundPayment(paymentId: string, amount?: number) {
        return this.razorpay.payments.refund(paymentId, {
            amount,
        });
    }

    verifyWebhookSignature(
        rawBody: Buffer,
        signature: string,
    ): boolean {
        const webhookSecret = this.configService.get<string>(
            'razorpay.webhookSecret',
        );

        if (!webhookSecret) {
            throw new Error('RAZORPAY_WEBHOOK_SECRET is not configured.');
        }

        const generatedSignature = crypto
            .createHmac('sha256', webhookSecret)
            .update(rawBody)
            .digest('hex');

        const generatedBuffer = Buffer.from(generatedSignature);
        const signatureBuffer = Buffer.from(signature || '');

        if (generatedBuffer.length !== signatureBuffer.length) {
            return false;
        }

        return crypto.timingSafeEqual(generatedBuffer, signatureBuffer);
    }
}