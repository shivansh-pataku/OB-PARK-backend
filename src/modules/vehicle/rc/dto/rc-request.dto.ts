import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class RcRequestDto {
  @ApiProperty({
    example: 'PB10AB1234',
    description: 'Vehicle registration number',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4}$/i, {
    message: 'Invalid vehicle registration number',
  })
  vehicleNumber: string;
}
