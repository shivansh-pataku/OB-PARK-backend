import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async findByPhoneNumber(phoneNumber: string) {
    return this.prisma.users.findUnique({
      where: {
        phoneNumber,
      },
    });
  }

  async findByFirebaseUid(firebaseUid: string) {
    return this.prisma.users.findUnique({
      where: {
        firebaseUid,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.users.findUnique({
      where: {
        email,
      },
    });
  }

  async linkFirebaseUid(id: string, firebaseUid: string) {
    return this.prisma.users.update({
      where: { id },
      data: { firebaseUid },
    });
  }

  async createUser(data: {
    firebaseUid: string;
    phoneNumber?: string | null;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    profileImage?: string | null;
  }) {
    return this.prisma.users.create({
      data: {
        firebaseUid: data.firebaseUid,
        phoneNumber: data.phoneNumber || null,
        email: data.email || null,
        firstName: data.firstName || null,
        lastName: data.lastName || null,
        profileImage: data.profileImage || null,
      },
    });
  }

  async updateRefreshToken(id: string, refreshTokenHash: string) {
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
