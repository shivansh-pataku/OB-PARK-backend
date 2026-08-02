import { ApiProperty } from '@nestjs/swagger';

export class OffenseDetailAdvancedDto {
  @ApiProperty({ example: 'Over Speeding' })
  offenseName: string;
}

export class ChallanAdvancedDto {
  @ApiProperty({ example: 1 })
  serialNumber: number;

  @ApiProperty({ example: 'MH/TRF/2024/045678' })
  challanNumber: string;

  @ApiProperty({
    example: 'Over speeding - Exceeding speed limit by 25 kmph in 60 kmph zone',
  })
  offenseDetails: string;

  @ApiProperty({
    example: 'Western Express Highway, Andheri East, Mumbai',
    nullable: true,
  })
  place: string | null;

  @ApiProperty({ type: [OffenseDetailAdvancedDto] })
  offenseDetailsList: OffenseDetailAdvancedDto[];

  @ApiProperty({ example: '2024-03-15' })
  date: string;

  @ApiProperty({ example: '2024-03-15T14:30:45' })
  dateTime: string;

  @ApiProperty({ example: 'MH' })
  state: string;

  @ApiProperty({ example: 'Pune West (MH-12)', nullable: true })
  rto: string | null;

  @ApiProperty({ example: 'Rajesh Kumar Sharma' })
  accusedName: string;

  @ApiProperty({ example: '3000' })
  amount: string;

  @ApiProperty({ example: 'Pending' })
  status: string;

  @ApiProperty({ example: false })
  courtChallan: boolean;

  @ApiProperty({ example: null, nullable: true })
  courtName: string | null;

  @ApiProperty({ example: 'MHTRP_2024_3456789' })
  upstreamCode: string;
}

export class RcChallanAdvancedResponseDto {
  @ApiProperty({ example: 'CLIENT_IN_789456123' })
  clientId: string;

  @ApiProperty({ example: 'MH12DE3456' })
  rcNumber: string;

  @ApiProperty({ type: [ChallanAdvancedDto] })
  challans: ChallanAdvancedDto[];
}
