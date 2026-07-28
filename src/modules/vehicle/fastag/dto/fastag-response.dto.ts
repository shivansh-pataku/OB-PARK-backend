import { ApiProperty } from '@nestjs/swagger';

export class FastagResponseDto {
    @ApiProperty({ example: 'fastag_verification_dRKBysWbCksWhLlUpdrx' })
    clientId: string;

    @ApiProperty({ example: 'GJ05CN0000' })
    rcNumber: string;

    @ApiProperty({ example: 'ICICI Bank' })
    bankName: string;

    @ApiProperty({ example: '0000FA00008EE81FCA123' })
    tagId: string;

    @ApiProperty({ example: 'Active' })
    status: string;
}
