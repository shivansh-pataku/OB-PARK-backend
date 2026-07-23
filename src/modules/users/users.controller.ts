import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('access-token')
@Controller('users') 
// All routes in this class start with /users
// @Get('me') means GET /users/me
// @Patch(':id') means PATCH /users/:id

export class UsersController { // class UsersController is a controller that handles requests related to users
  constructor(
    private readonly usersService: UsersService, // alias for the UsersService class, which is injected into this controller
  ) {}
  //This is Dependency Injection. Nest creates UsersService once and gives it to this controller.
                                          // @ means that the following method is a route handler for the specified HTTP method and path
        @Get('me')                        // GET /users/me
        @ApiBearerAuth('access-token')    // Authorization: Bearer eyJhbGc... ; This route requires an access token in the Authorization header
        @UseGuards(JwtAuthGuard)          // This route is protected by the JwtAuthGuard, which checks for a valid JWT in the request
        getCurrentUser(                   // This method handles the GET /users/me request
        @CurrentUser() user: any,         // The @CurrentUser() decorator extracts the current user from the request, which is set by the JwtAuthGuard after validating the JWT
        ) {
        return user;
        }

        // @Patch(':id')
        // updateProfile(
        //   @Param('id') id: string,
        //   @Body() dto: UpdateProfileDto,
        // ) {
        //   return this.usersService.updateProfile(id, dto);
        // }
}