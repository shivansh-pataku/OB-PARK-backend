import { ApiProperty } from '@nestjs/swagger';

export class PaymentResponseDto {
    @ApiProperty()
    orderId: string;

    @ApiProperty()
    gatewayOrderId: string;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    currency: string;

    @ApiProperty()
    keyId: string;
}