import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateBillingDetailsDto } from './dto/billling-details.dto';

@Injectable()
export class BillingService {
    constructor(private readonly prisma: PrismaService) { }

    // 1. Naya address/billing details save karna
    async create(userId: string, dto: CreateBillingDetailsDto) {
        // Agar user ise default address banana chahta hai, toh baaki saare addresses ke isDefault ko false karna hoga
        if (dto.isDefault) {
            await this.prisma.address.updateMany({
                where: { userId, isDefault: true },
                data: { isDefault: false },
            });
        }

        if (dto.updates !== undefined) {
            await this.prisma.users.update({
                where: { id: userId },
                data: { updates: dto.updates },
            });
        }

        return this.prisma.address.create({
            data: {
                userId,
                firstName: dto.firstName,
                lastName: dto.lastName,
                phoneNumber: dto.phoneNumber,
                email: dto.email,
                addressLine1: dto.addressLine1,
                addressLine2: dto.addressLine2,
                city: dto.city,
                state: dto.state,
                zipCode: dto.zipCode,
                country: dto.country,
                isDefault: dto.isDefault ?? false,
            },
        });
    }

    // 2. User ke saare saved addresses fetch karna
    async findAll(userId: string) {
        return this.prisma.address.findMany({
            where: { userId },
            orderBy: { isDefault: 'desc' }, // Default address sabse pehle show hoga
        });
    }

    // 3. Kisi ek specific address details ko check karna
    async findOne(userId: string, id: string) {
        const address = await this.prisma.address.findUnique({
            where: { id },
        });

        if (!address || address.userId !== userId) {
            throw new NotFoundException('Billing details not found');
        }

        return address;
    }

    // 4. Address ko update karna
    async update(userId: string, id: string, dto: Partial<CreateBillingDetailsDto>) {
        const address = await this.prisma.address.findUnique({
            where: { id },
        });

        if (!address || address.userId !== userId) {
            throw new NotFoundException('Billing details not found');
        }

        if (dto.isDefault) {
            await this.prisma.address.updateMany({
                where: { userId, isDefault: true },
                data: { isDefault: false },
            });
        }

        return this.prisma.address.update({
            where: { id },
            data: dto,
        });
    }

    // 5. Address ko delete karna
    async remove(userId: string, id: string) {
        const address = await this.prisma.address.findUnique({
            where: { id },
        });

        if (!address || address.userId !== userId) {
            throw new NotFoundException('Billing details not found');
        }

        return this.prisma.address.delete({
            where: { id },
        });
    }

}
