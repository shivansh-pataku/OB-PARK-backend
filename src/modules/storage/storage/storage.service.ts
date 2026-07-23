import { Injectable } from '@nestjs/common';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class StorageService {
  constructor(
    private readonly localStorageService: LocalStorageService,
  ) {}

  async saveProfileImage(
    buffer: Buffer,
  ): Promise<string> {
    return this.localStorageService.saveFile(
      buffer,
      'profile',
    );
  }

  async deleteProfileImage(
    relativePath: string,
  ): Promise<void> {
    return this.localStorageService.deleteFile(
      relativePath,
    );
  }

  getPublicUrl(relativePath: string): string {
  return `${process.env.APP_URL}/uploads/${relativePath}`;
    }
}