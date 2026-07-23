import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getProfile(userId: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateProfile(
    userId: string,
    dto: UpdateProfileDto,
  ) {
    // Check if email already exists
    if (dto.email) {
      const existingUser = await this.prisma.users.findFirst({
        where: {
          email: dto.email,
          NOT: {
            id: userId,
          },
        },
      });

      if (existingUser) {
        throw new ConflictException(
          'Email already exists',
        );
      }
    }

    const updatedUser = await this.prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        address: dto.address,
        dob: dto.dob ? new Date(dto.dob) : undefined,
        gender: dto.gender,
      },
    });

    return updatedUser;
  }
}