import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

export class PricingItemDto {
  @ApiProperty({ example: 'dr-ortho-orthopaedic-car-cushion' })
  @IsString()
  productId: string;

  @ApiProperty({ example: 1, default: 1 })
  @IsInt()
  @Min(1)
  quantity: number;
}

export class CalculatePricingDto {
  @ApiProperty({
    example: 'dr-ortho-orthopaedic-car-cushion',
    required: false,
    description: 'Product ID for single-item buy now flow',
  })
  @IsOptional()
  @IsString()
  productId?: string;

  @ApiProperty({
    example: 1,
    required: false,
    default: 1,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number;

  @ApiProperty({
    example: 'SAVE100',
    required: false,
  })
  @IsOptional()
  @IsString()
  couponCode?: string;

  @ApiProperty({
    type: [PricingItemDto],
    required: false,
    description: 'Explicit list of items to calculate pricing for',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PricingItemDto)
  items?: PricingItemDto[];
}
