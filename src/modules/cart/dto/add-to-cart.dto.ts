import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class AddToCartDto {
    @ApiProperty({
        description: 'Product Uniqe ID',
        example: 'prod-1'
    })

    @IsString()
    productId: string;

    @ApiProperty({
        description: 'Quantity',
        example: 1,
        default: 1,
    })
    @IsInt()
    @Min(1)
    quantity: number;

    @ApiProperty({
        description: 'Product color',
        example: 'Black',
        required: false,
    })
    @IsOptional()
    @IsString()
    color: string;

    @ApiProperty({
        description: 'Product size',
        example: "Standard",
        required: false,
    })
    @IsOptional()
    @IsString()
    size?: string;
}