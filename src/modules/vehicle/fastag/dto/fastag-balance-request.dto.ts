import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class FastagBalanceRequestDto {
    @ApiProperty({
        example: 'MH12VV1999',
        description: 'Vehicle registration certificate number (RC number) associated with the FasTag',
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4}$/i, {
        message: 'Invalid vehicle registration number',
    })
    rcNumber: string;

    @ApiProperty({
        example: 'idfc_first_bank',
        description: 'Name of the FASTag service provider',
    })
    @IsString()
    @IsNotEmpty()
    providerName: string;
}
