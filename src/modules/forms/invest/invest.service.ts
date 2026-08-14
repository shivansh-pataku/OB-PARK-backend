import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { CreateInvestRequestDto } from './dto/create-invest-request.dto';

@Injectable()
export class InvestService {
    // Injecting PrismaService to talk to database
    constructor(private readonly prisma: PrismaService) { }

    async createRequest(dto: CreateInvestRequestDto) {
        // Save investor request into the database table
        return this.prisma.investorRequest.create({
            data: {
                name: dto.name,
                email: dto.email,
                phoneNumber: dto.phoneNumber,
            },
        });
    }
}
