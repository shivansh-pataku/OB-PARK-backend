import { ApiProperty } from '@nestjs/swagger';

export class ChallanDto {
  @ApiProperty({ example: 1 })
  serialNumber: number;

  @ApiProperty({ example: 'DL112345678978' })
  challanNumber: string;

  @ApiProperty({ example: 'Disobeying Lawful Directions' })
  offenseDetails: string;

  @ApiProperty({ example: null, nullable: true })
  place: string | null;

  @ApiProperty({ example: '2024-01-25' })
  date: string;

  @ApiProperty({ example: 'DL' })
  state: string;

  @ApiProperty({ example: null, nullable: true })
  rto: string | null;

  @ApiProperty({ example: 'CENTRAL' })
  upstreamCode: string;

  @ApiProperty({ example: 'MUNNA BHAIYA' })
  accusedName: string;

  @ApiProperty({ example: 19500 })
  amount: number;

  @ApiProperty({ example: 'Pending', nullable: true })
  status: string | null;

  @ApiProperty({ example: true, nullable: true })
  courtChallan: boolean | null;
}

export class RcChallanResponseDto {
  @ApiProperty({ example: 'rc_related_UgaxohwEraUGgovAugEF' })
  clientId: string;

  @ApiProperty({ type: [ChallanDto] })
  challans: ChallanDto[];

  @ApiProperty({ type: [Object], description: 'List of blacklist records' })
  blacklist: any[];
}
