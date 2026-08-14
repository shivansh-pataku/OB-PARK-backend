import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateInvestRequestDto {
    @ApiProperty({
        description: 'Full name of the investor',
        example: 'John Doe',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'Email address of the investor',
        example: 'john.doe@example.com',
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'Phone number of the investor',
        example: '+15550000000',
    })
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;
}
