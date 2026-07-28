import { ApiProperty } from '@nestjs/swagger';

export class FastagTransactionDto {
    @ApiProperty({ example: 'S' })
    laneDirection: string;

    @ApiProperty({ example: '2024-07-16T19:00:16' })
    transactionDateTime: string;

    @ApiProperty({ example: '0010012407161901268650' })
    seqNo: string;

    @ApiProperty({ example: '22.34462627,87.12665241' })
    tollPlazaGeocode: string;

    @ApiProperty({ example: 'Balibhasa Toll Plaza' })
    tollPlazaName: string;

    @ApiProperty({ example: 'VC13' })
    vehicleType: string;
}

export class FastagV2ResponseDto {
    @ApiProperty({ example: 'fastag_verification_v2_rztQxpTMfyoaKoybGskj' })
    clientId: string;

    @ApiProperty({ example: 'CG07BC1234' })
    rcNumber: string;

    @ApiProperty({ example: '' })
    bankName: string;

    @ApiProperty({ example: '34161FA812348EE1234BCFE0' })
    tagId: string;

    @ApiProperty({ type: [FastagTransactionDto] })
    transactions: FastagTransactionDto[];

    @ApiProperty({ example: 'Active' })
    status: string;
}
