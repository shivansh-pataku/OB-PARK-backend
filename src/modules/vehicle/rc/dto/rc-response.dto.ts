import { ApiProperty } from '@nestjs/swagger';

export class RcResponseDto {
    @ApiProperty()
    registrationNumber: string;

    @ApiProperty()
    ownerName: string;

    @ApiProperty()
    maker: string;

    @ApiProperty()
    model: string;

    @ApiProperty()
    fuelType: string;

    @ApiProperty()
    registrationDate: string;

    @ApiProperty()
    insuranceValidTill: string;

    @ApiProperty()
    fitnessValidTill: string;

    @ApiProperty()
    vehicleCategory: string;
}