import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.enableCors({ origin: ['http://localhost:3000', 'http://localhost:3001'], credentials: true, }); // credentials means cookies are sent

  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port') ?? 3000;

  setupSwagger(app);

  await app.listen(port);

  console.log(`🐦‍🔥 Server running on http://localhost:${port}`);
  console.log(`🦚 Swagger Docs: http://localhost:${port}/api`);
}

bootstrap();
