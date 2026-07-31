import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from '../../database/prisma/prisma.module';
import { ProductsModule } from '../products/products.module';

import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

import { RazorpayService } from './gateways/razorpay/razorpay.service';

@Module({
    imports: [
        ConfigModule,
        PrismaModule,
        ProductsModule,
    ],

    controllers: [
        PaymentController,
    ],

    providers: [
        PaymentService,
        RazorpayService,
    ],

    exports: [
        PaymentService,
    ],
})
export class PaymentModule { }