import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
// import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdateProfileDto } from '../auth/dto/update-profile.dto';


@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async findByPhoneNumber(phoneNumber: string) {
    return this.prisma.users.findUnique({
      where: {
        phoneNumber,
      },
    });
  }

  async createUser(phoneNumber: string) {
    return this.prisma.users.create({
      data: {
        phoneNumber,
      },
    });
  }

  async updateProfile(id: string, dto: UpdateProfileDto) {
    return this.prisma.users.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  async updateRefreshToken(
  id: string,
    refreshTokenHash: string,
  ) {
    return this.prisma.users.update({
      where: {
        id,
      },
      data: {
        refreshTokenHash,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }

    async removeRefreshToken(id: string) {
    return this.prisma.users.update({
      where: {
        id,
      },
      data: {
        refreshTokenHash: null,
      },
    });
  }

  
}