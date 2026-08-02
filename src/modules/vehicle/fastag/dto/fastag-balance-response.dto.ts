import { ApiProperty } from '@nestjs/swagger';

export class FastagBalanceResponseDto {
  @ApiProperty({ example: 'rc_to_fastag_balance_fChZGKuhyAUEMoTVKrFB' })
  clientId: string;

  @ApiProperty({ example: 'MH12VV1234' })
  rcNumber: string;

  @ApiProperty({ example: 'idfc_first_bank' })
  providerName: string;

  @ApiProperty({ example: 'IDFC88000PATXM' })
  providerCode: string;

  @ApiProperty({ example: 'SURAJ SHRIRAM KALE' })
  customerName: string;

  @ApiProperty({ example: '9491' })
  availableRechargeLimit: string;

  @ApiProperty({ example: '509' })
  availableBalance: string;

  @ApiProperty({ example: 'Activated' })
  tagStatus: string;

  @ApiProperty({ example: '4' })
  vehicleClass: string;

  @ApiProperty({ example: 'Car / Jeep / Van' })
  vehicleClassDesc: string;

  @ApiProperty({ example: null, nullable: true })
  modelName: string | null;
}
