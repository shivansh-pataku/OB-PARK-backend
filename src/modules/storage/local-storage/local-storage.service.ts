import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { randomUUID } from 'crypto';
import sharp from 'sharp';



@Injectable()
export class LocalStorageService {
   async saveFile(
  buffer: Buffer,
  folder: string,
): Promise<string> {

  const uploadPath = path.join(
    process.cwd(),
    'uploads',
    folder,
  );

  await fs.mkdir(uploadPath, {
    recursive: true,
  });

  const fileName = `${randomUUID()}.webp`;

  const filePath = path.join(
    uploadPath,
    fileName,
  );

  await sharp(buffer)
    .resize(512, 512, {
      fit: 'cover',
    })
    .webp({
      quality: 80,
    })
    .toFile(filePath);

  return `${folder}/${fileName}`;

}

    async deleteFile(
    relativePath: string,
    ): Promise<void> {
    try {
        const absolutePath = path.join(
        process.cwd(),
        'uploads',
        relativePath,
        );

        await fs.unlink(absolutePath);
    } catch {
        // Ignore if file does not exist
    }
    }

}
