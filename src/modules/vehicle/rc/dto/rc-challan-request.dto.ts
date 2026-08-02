import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class RcChallanRequestDto {
  @ApiProperty({
    example: 'HR55AP0244',
    description: 'Vehicle registration number (RC number)',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4}$/i, {
    message: 'Invalid vehicle registration number',
  })
  rcNumber: string;

  @ApiProperty({
    example: 'MA3JMTB1SPB851591',
    description: 'Chassis number of the vehicle',
  })
  @IsString()
  @IsNotEmpty()
  chassisNumber: string;

  @ApiProperty({
    example: 'K10CNC265773',
    description: 'Engine number of the vehicle',
  })
  @IsString()
  @IsNotEmpty()
  engineNumber: string;

  @ApiProperty({
    example: false,
    description: 'Restrict search to specified states only',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  stateOnly?: boolean;

  @ApiProperty({
    example: ['DL', 'TS', 'KA', 'GJ'],
    description: 'List of state portals to search',
    required: false,
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  statePortal?: string[];
}
