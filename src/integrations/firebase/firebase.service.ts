import { Injectable, OnModuleInit, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class FirebaseService implements OnModuleInit {
  constructor(private readonly configService: ConfigService) { }

  onModuleInit() {
    if (!getApps().length) {
      const projectId = this.configService.get<string>('FIREBASE_PROJECT_ID');
      const clientEmail = this.configService.get<string>('FIREBASE_CLIENT_EMAIL');
      const privateKey = this.configService.get<string>('FIREBASE_PRIVATE_KEY')
        ?.replace(/^"|"$/g, '') // strip surrounding double quotes if present
        ?.replace(/\\n/g, '\n');

      if (!projectId || !clientEmail || !privateKey) {
        throw new Error(
          'Firebase Admin configuration is missing. Please check FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY environment variables.',
        );
      }

      console.log('Initializing Firebase Admin SDK with Project ID:', projectId);
      initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
    }
  }

  async verifyIdToken(firebaseIdToken: string) {
    // Enable a mock bypass in non-production environments when a mock token is provided
    if (
      this.configService.get<string>('NODE_ENV') !== 'production' &&
      firebaseIdToken.startsWith('mock-token')
    ) {
      // Extract the phone number if specified, e.g. mock-token-919999999999, or use a default
      const parts = firebaseIdToken.split('-');
      const phoneNumber = parts[2] ? `+${parts[2]}` : '+919999999999';

      console.log(`[FirebaseService] Bypassing verification. Returning mock user with phone number: ${phoneNumber}`);
      return {
        uid: 'mock_uid_12345',
        phoneNumber: phoneNumber,
        firebase: {
          sign_in_provider: 'phone',
        },
      } as any;
    }

    try {
      const decodedToken = await getAuth().verifyIdToken(firebaseIdToken);

      return decodedToken;
    } catch {
      throw new UnauthorizedException('Invalid Firebase ID Token');
    }
  }
}