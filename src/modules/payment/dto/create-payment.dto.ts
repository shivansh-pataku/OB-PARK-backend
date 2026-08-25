import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { PaymentGateway } from '../../../generated/prisma/enums';

export class CreatePaymentDto {
  @ApiProperty({
    example: 'prod-1',
    required: false,
  })
  @IsOptional()
  @IsString()
  productId?: string;

  @ApiProperty({
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number;

  @ApiProperty({
    enum: PaymentGateway,
    example: PaymentGateway.RAZORPAY,
  })
  @IsEnum(PaymentGateway)
  gateway: PaymentGateway;

  @ApiProperty({
    example: 'SAVE100',
    required: false,
  })
  @IsOptional()
  @IsString()
  couponCode?: string;
}
