import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, IsNotEmpty, Matches } from 'class-validator';

export class RcV2RequestDto {
    @ApiProperty({
        example: 'GJ05CN4635',
        description: 'Vehicle registration certificate number (RC number)',
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4}$/i, {
        message: 'Invalid vehicle registration number',
    })
    vehicleNumber: string;

    @ApiProperty({
        example: false,
        description: 'Set to true for Enriched response (owner name and chassis unmasked, engine masked). Defaults to false.',
        required: false,
        default: false,
    })
    @IsBoolean()
    @IsOptional()
    enrich?: boolean;
}
