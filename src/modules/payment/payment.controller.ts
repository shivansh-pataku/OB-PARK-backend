import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreatePaymentDto } from './dto/create-payment.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import { PaymentService } from './payment.service';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Payment')
@ApiBearerAuth('access-token')
@Controller('payment')
export class PaymentController {
    constructor(
        private readonly paymentService: PaymentService,
    ) { }

    @Post('create')
    @ApiOperation({
        summary: 'Create Razorpay payment order',
    })
    async createPayment(
        @CurrentUser() user: any,
        @Body() dto: CreatePaymentDto,
    ) {
        return this.paymentService.createPayment(dto, user);
    }

    @Post('verify')
    @ApiOperation({
        summary: 'Verify Razorpay payment signature and confirm order',
    })
    async verifyPayment(
        @CurrentUser() user: any,
        @Body() dto: VerifyPaymentDto,
    ) {
        return this.paymentService.verifyPayment(dto, user);
    }
}