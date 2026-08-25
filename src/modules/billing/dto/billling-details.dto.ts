import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateBillingDetailsDto {
    @ApiProperty({ example: 'Rahul', description: 'First Name' })
    @IsString()
    firstName: string;

    @ApiProperty({ example: 'Sharma', description: 'Last Name' })
    @IsString()
    lastName: string;

    @ApiProperty({ example: '+919876543210', description: 'Phone Number' })
    @IsString()
    phoneNumber: string;

    @ApiProperty({ example: 'rahul.sharma@example.com', required: false, description: 'Email address' })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({ example: 'Flat 402, Royal Residency', description: 'House number and street name' })
    @IsString()
    addressLine1: string;

    @ApiProperty({ example: 'Sector 5, Near Market', required: false, description: 'Apartment, suite, unit (optional)' })
    @IsOptional()
    @IsString()
    addressLine2?: string;

    @ApiProperty({ example: 'Noida', description: 'City name' })
    @IsString()
    city: string;

    @ApiProperty({ example: 'Uttar Pradesh', required: false, description: 'State (optional)' })
    @IsOptional()
    @IsString()
    state?: string;

    @ApiProperty({ example: '201301', description: 'Pin/Postal code' })
    @IsString()
    zipCode: string;

    @ApiProperty({ example: 'India', default: 'India', description: 'Country name' })
    @IsString()
    country: string;

    @ApiProperty({ example: false, default: false, description: 'Set as default address' })
    @IsOptional()
    @IsBoolean()
    isDefault?: boolean;

    @ApiProperty({ example: false, default: false, description: 'Subscribe to newsletter/updates' })
    @IsOptional()
    @IsBoolean()
    updates?: boolean;

}
