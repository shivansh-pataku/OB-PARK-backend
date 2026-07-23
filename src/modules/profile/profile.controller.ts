import {
  Controller,
  Get,
  Patch,
  Delete,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';

@ApiTags('Profile')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get current user profile', })
  getProfile(
    @CurrentUser() user: any,
  ) {
    return this.profileService.getProfile(user.sub);
  }

  @Patch()
  @ApiOperation({ summary: 'Update current user profile', })
  updateProfile(
    @CurrentUser() user: any,
    @Body() dto: UpdateProfileDto,
  ) {
    return this.profileService.updateProfile(
      user.sub,
      dto,
    );
  }


  @Patch('photo')
  @ApiOperation({ summary: 'Upload profile photo', })
  @ApiConsumes('multipart/form-data')

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        photo: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })

  @UseInterceptors(
  FileInterceptor('photo', {
    limits: {
      fileSize: 2 * 1024 * 1024, // 2 MB
    },
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/webp'
      ) {
        cb(null, true);
      } else {
        cb(
          new BadRequestException(
            'Only JPG, PNG and WEBP images are allowed.',
          ),
          false,
        );
      }
      },
    }),
  )

  uploadProfilePhoto(
  @CurrentUser() user: any,
  @UploadedFile() file: Express.Multer.File,
  ) {
      return this.profileService.uploadProfilePhoto(
        user.sub,
        file,
      );
  }

  @Delete('photo')
  @ApiOperation({
    summary: 'Delete profile photo',
  })
  deleteProfilePhoto(
    @CurrentUser() user: any,
  ) {
    return this.profileService.deleteProfilePhoto(
      user.sub,
    );
  }
  }