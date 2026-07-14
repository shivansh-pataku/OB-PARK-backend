import { Injectable, UnauthorizedException } from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';
import './firebase-admin';

@Injectable()
export class FirebaseService {
  async verifyIdToken(firebaseIdToken: string) {
    try {
      const decodedToken = await getAuth().verifyIdToken(firebaseIdToken);

      return decodedToken;
    } catch {
      throw new UnauthorizedException('Invalid Firebase ID Token');
    }
  }
}