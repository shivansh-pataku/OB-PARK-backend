import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class FastagV2RequestDto {
    @ApiProperty({
        example: 'GJ05CN4635',
        description: 'Vehicle registration certificate number (RC number) associated with the FasTag',
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4}$/i, {
        message: 'Invalid vehicle registration number',
    })
    rcNumber: string;
}
