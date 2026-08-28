import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactMessageDto {
    @ApiProperty({
        description: 'Full name of the contact person',
        example: 'John Doe',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'Email address of the contact person',
        example: 'john.doe@example.com',
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'Message/Inquiry content',
        example: 'How can I get a demo of your product?',
    })
    @IsString()
    @IsNotEmpty()
    message: string;
}
