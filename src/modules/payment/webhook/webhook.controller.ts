import {
    Body,
    Controller,
    Headers,
    HttpCode,
    Post,
    Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiExcludeController } from '@nestjs/swagger';

import { PaymentService } from '../payment.service';

@ApiExcludeController()
@Controller('payment/webhook')
export class WebhookController {
    constructor(
        private readonly paymentService: PaymentService,
    ) { }

    @Post('razorpay')
    @HttpCode(200)
    async razorpayWebhook(
        @Req() req: Request & { rawBody?: Buffer },

        @Headers('x-razorpay-signature')
        signature: string,

        @Body()
        payload: any,
    ) {
        await this.paymentService.handleRazorpayWebhook(
            payload,
            req.rawBody!,
            signature,
        );

        return {
            received: true,
        };
    }
}