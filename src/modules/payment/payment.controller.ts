import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';

import { CreatePaymentDto } from './dto/create-payment.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import { CalculatePricingDto } from './dto/calculate-pricing.dto';
import { PaymentService } from './payment.service';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Public } from '../../common/decorators/public.decorator';

@ApiTags('Payment')
@ApiBearerAuth('access-token')
@Controller('payment')
export class PaymentController {
  private readonly jwtService = new JwtService();

  constructor(private readonly paymentService: PaymentService) {}

  @Public()
  @Post('calculate-pricing')
  @ApiOperation({
    summary: 'Calculate confirmed order pricing and invoice breakdown',
  })
  async calculatePricing(
    @CurrentUser() user: any,
    @Req() req: any,
    @Body() dto: CalculatePricingDto,
  ) {
    let resolvedUser = user;
    if (!resolvedUser && req.headers?.authorization) {
      try {
        const rawToken = req.headers.authorization.replace(/^Bearer\s+/i, '');
        const decoded = this.jwtService.decode(rawToken) as any;
        if (decoded && decoded.sub) {
          resolvedUser = decoded;
        }
      } catch (err) {
        // ignore invalid token
      }
    }
    return this.paymentService.calculatePricing(dto, resolvedUser);
  }

  @Post('create')
  @ApiOperation({
    summary: 'Create Razorpay payment order',
  })
  async createPayment(@CurrentUser() user: any, @Body() dto: CreatePaymentDto) {
    return this.paymentService.createPayment(dto, user);
  }

  @Post('verify')
  @ApiOperation({
    summary: 'Verify Razorpay payment signature and confirm order',
  })
  async verifyPayment(@CurrentUser() user: any, @Body() dto: VerifyPaymentDto) {
    return this.paymentService.verifyPayment(dto, user);
  }
}
