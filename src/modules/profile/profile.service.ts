import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

import { UpdateProfileDto } from './dto/update-profile.dto';

import { StorageService } from '../storage/storage/storage.service';


@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
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

async uploadProfilePhoto(
  userId: string,
  file: Express.Multer.File,
) {
  // Get current user
  const existingUser = await this.prisma.users.findUnique({
    where: {
      id: userId,
    },
    select: {
      profileImage: true,
    },
  });

  // Delete previous image if it exists
  if (existingUser?.profileImage) {
    await this.storageService.deleteProfileImage(
      existingUser.profileImage,
    );
  }

  // Save new image
  const imagePath =
    await this.storageService.saveProfileImage(
      file.buffer,
    );

  // Update database
  const user = await this.prisma.users.update({
    where: {
      id: userId,
    },
    data: {
      profileImage: imagePath,
    },
  });

return {
  message: 'Profile photo updated successfully',
  profileImage: user.profileImage,
  profileImageUrl: this.storageService.getPublicUrl(
    user.profileImage!,
  ),
};
}




async deleteProfilePhoto(
  userId: string,
) {
  // Find current user
  const user = await this.prisma.users.findUnique({
    where: {
      id: userId,
    },
    select: {
      profileImage: true,
    },
  });

  // Nothing to delete
  if (!user?.profileImage) {
    return {
      message: 'No profile photo found.',
    };
  }

  // Delete image from storage
  await this.storageService.deleteProfileImage(
    user.profileImage,
  );

  // Remove image reference from database
  await this.prisma.users.update({
    where: {
      id: userId,
    },
    data: {
      profileImage: null,
    },
  });

  return {
    message: 'Profile photo deleted successfully.',
  };
}
 
}