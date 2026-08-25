import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
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
    private readonly UsersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  private async generateAccessToken(user: any) {
    return this.jwtService.signAsync({
      sub: user.id,
      phoneNumber: user.phoneNumber,
    });
  }

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

  async login(dto: LoginDto) {
    try {
      const firebaseUser = await this.firebaseService.verifyIdToken(dto.firebaseIdToken);

      const firebaseUid = firebaseUser.uid;
      const phoneNumber = firebaseUser.phone_number || firebaseUser.phoneNumber || null;
      const email = firebaseUser.email || null;
      const name = firebaseUser.name || '';
      const profileImage = firebaseUser.picture || null;

      let user: any = null;

      // 1. Search by unique Firebase UID first
      user = await this.UsersService.findByFirebaseUid(firebaseUid);

      // 2. Search by Phone Number if not found
      if (!user && phoneNumber) {
        user = await this.UsersService.findByPhoneNumber(phoneNumber);
        if (user && !user.firebaseUid) {
          user = await this.UsersService.linkFirebaseUid(user.id, firebaseUid);
        }
      }

      // 3. Search by Email if not found
      if (!user && email) {
        user = await this.UsersService.findByEmail(email);
        if (user && !user.firebaseUid) {
          user = await this.UsersService.linkFirebaseUid(user.id, firebaseUid);
        }
      }

      // 4. Create new user if not found in any search
      if (!user) {
        const nameParts = name.trim().split(' ');
        const firstName = nameParts[0] || 'User';
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : null;

        user = await this.UsersService.createUser({
          firebaseUid,
          phoneNumber,
          email,
          firstName,
          lastName,
          profileImage,
        });
      }

      const accessToken = await this.generateAccessToken(user);
      const refreshToken = await this.generateRefreshToken(user);
      const refreshTokenHash = await bcrypt.hash(refreshToken, 10);

      await this.UsersService.updateRefreshToken(user.id, refreshTokenHash);

      return {
        success: true,
        message: 'Login successful.',
        accessToken,
        refreshToken,
        user,
      };
    } catch (error: any) {
      console.error('[AuthService.login Error]:', error);
      if (error instanceof UnauthorizedException || error instanceof BadRequestException) {
        throw error;
      }
      throw new UnauthorizedException(error.message || 'Authentication failed');
    }
  }

  async mockLogin() {
    const phoneNumber = '+919876543210';
    let user = await this.UsersService.findByPhoneNumber(phoneNumber);

    if (!user) {
      user = await this.UsersService.createUser({
        firebaseUid: 'mock_uid_12345',
        phoneNumber,
      });
    }

    const accessToken = await this.generateAccessToken(user);
    const refreshToken = await this.generateRefreshToken(user);
    const refreshTokenHash = await bcrypt.hash(refreshToken, 10);
    await this.UsersService.updateRefreshToken(user.id, refreshTokenHash);

    return {
      success: true,
      message: 'Mock login successful.',
      accessToken,
      refreshToken,
      user,
    };
  }

  async refresh(dto: RefreshTokenDto) {
    const payload = await this.jwtService.verifyAsync(dto.refreshToken, {
      secret: process.env.JWT_REFRESH_SECRET!,
    });

    const user = await this.UsersService.findById(payload.sub);

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
    await this.UsersService.removeRefreshToken(userId);

    return {
      success: true,
      message: 'Logged out successfully.',
    };
  }
}
