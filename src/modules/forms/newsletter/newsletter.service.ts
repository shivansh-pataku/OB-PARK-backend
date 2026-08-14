import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { SubscribeNewsletterDto } from './dto/subscribe-newsletter.dto';

@Injectable()
export class NewsletterService {
    constructor(private readonly prisma: PrismaService) { }

    async subscribe(dto: SubscribeNewsletterDto) {
        // 1. Check if email is already subscribed
        const existing = await this.prisma.newsletterSubscription.findUnique({
            where: { email: dto.email },
        });

        if (existing) {
            throw new BadRequestException('Email is already subscribed to the newsletter.');
        }

        // 2. Save new subscriber to the database
        return this.prisma.newsletterSubscription.create({
            data: {
                firstName: dto.firstName,
                lastName: dto.lastName,
                email: dto.email,
                isNewsletterSub: true,
            },
        });
    }
}
