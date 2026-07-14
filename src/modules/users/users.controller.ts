import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UpdateProfileDto } from '../auth/dto/update-profile.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('access-token')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

        @Get('me')
        @ApiBearerAuth('access-token')
        @UseGuards(JwtAuthGuard)
        getCurrentUser(
        @CurrentUser() user: any,
        ) {
        return user;
        }

  @Patch(':id')
  updateProfile(
    @Param('id') id: string,
    @Body() dto: UpdateProfileDto,
  ) {
    return this.usersService.updateProfile(id, dto);
  }
}