import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { FirebaseService } from '../../integrations/firebase/firebase.service';
import { UsersService } from '../users/users.service';

import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // =====================================================
  // Generate Access Token
  // =====================================================

  private async generateAccessToken(user: any) {
    return this.jwtService.signAsync({
      sub: user.id,
      phoneNumber: user.phoneNumber,
    });
  }

  // =====================================================
  // Generate Refresh Token
  // =====================================================

  private async generateRefreshToken(user: any) {
    return this.jwtService.signAsync(
      {
        sub: user.id,
      },
      {
        secret: process.env.JWT_REFRESH_SECRET!,
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN as any,
      },
    );
  }

  // =====================================================
  // Login
  // =====================================================

  async login(dto: LoginDto) {
    // Temporary mock until Firebase is connected
    const firebaseUser = {
      uid: 'test_uid',
      phoneNumber: '9816045869',
    };

    // const firebaseUser =
    // await this.firebaseService.verifyIdToken(
    //   dto.firebaseIdToken,
    // );

    let user = await this.usersService.findByPhoneNumber(
      firebaseUser.phoneNumber,
    );

    if (!user) {
      user = await this.usersService.createUser(
        firebaseUser.phoneNumber,
      );
    }

    const accessToken = await this.generateAccessToken(user);

    const refreshToken = await this.generateRefreshToken(user);

    const refreshTokenHash = await bcrypt.hash(refreshToken, 10);

    await this.usersService.updateRefreshToken(
      user.id,
      refreshTokenHash,
    );

    return {
      success: true,
      message: 'Login successful.',
      accessToken,
      refreshToken,
      user,
    };
  }

  // =====================================================
  // Refresh Access Token
  // =====================================================

  async refresh(dto: RefreshTokenDto) {
    const payload = await this.jwtService.verifyAsync(
      dto.refreshToken,
      {
        secret: process.env.JWT_REFRESH_SECRET!,
      },
    );

    const user = await this.usersService.findById(payload.sub);

    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    if (!user.refreshTokenHash) {
      throw new UnauthorizedException('Refresh token not found.');
    }

    const isValid = await bcrypt.compare(
      dto.refreshToken,
      user.refreshTokenHash,
    );

    if (!isValid) {
      throw new UnauthorizedException('Invalid refresh token.');
    }

    const accessToken = await this.generateAccessToken(user);

    return {
      success: true,
      accessToken,
    };
  }

  async logout(userId: string) {
    await this.usersService.removeRefreshToken(userId);

    return {
      success: true,
      message: 'Logged out successfully.',
    };
  }
}