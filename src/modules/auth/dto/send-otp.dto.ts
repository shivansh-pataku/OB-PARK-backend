import { IsString, Matches } from 'class-validator';

export class SendOtpDto {
  @IsString()
  @Matches(/^[6-9]\d{9}$/, { // Regex pattern to validate Indian mobile numbers starting with 6-9 and having 10 digits
    message: 'Invalid Indian mobile number',
  })
  phoneNumber!: string;
}