import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class RcChallanAdvancedRequestDto {
    @ApiProperty({
        example: 'MP30P8880',
        description: "Vehicle's Registration Certificate Number",
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4}$/i, {
        message: 'Invalid vehicle registration number',
    })
    rcNumber: string;
}
