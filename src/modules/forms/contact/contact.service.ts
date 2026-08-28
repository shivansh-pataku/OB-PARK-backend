import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';

@Injectable()
export class ContactService {
    constructor(private readonly prisma: PrismaService) { }

    async createMessage(dto: CreateContactMessageDto) {
        return this.prisma.messages.create({
            data: {
                name: dto.name,
                email: dto.email,
                message: dto.message,
            },
        });
    }
}
