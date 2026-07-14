import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

import { CurrentUser } from './decorators/current-user.decorator';

import { Public } from '../../common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  // =====================================================
  // Login
  // =====================================================

  @Public()
  @Post('login')
  login(
    @Body() dto: LoginDto,
  ) {
    return this.authService.login(dto);
  }

  // =====================================================
  // Refresh Access Token
  // =====================================================

  @Public()
  @Post('refresh')
  refresh(
    @Body() dto: RefreshTokenDto,
  ) {
    return this.authService.refresh(dto);
  }

  // =====================================================
  // Logout
  // =====================================================

  @Post('logout')
  logout(
    @CurrentUser() user: any,
  ) {
    return this.authService.logout(user.sub);
  }
}