import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true });

  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // 1. Fetch values mapped by your config file
  const rawOrigins = configService.get<string>('app.corsOrigins') || '';
  const port = configService.get<number>('app.port') || 3000;

  const envOrigins = new Set(
    rawOrigins
      .split(',')
      .map((o) => o.trim())
      .filter(Boolean),
  );

  // 2. CORS Handling
  app.enableCors({
    origin: (origin, callback) => {
      // Allow internal server-to-server or non-browser tools (e.g. curl, Postman)
      if (!origin) return callback(null, true);

      // Explicit match from env
      if (envOrigins.has(origin)) return callback(null, true);

      // Match domain and all subdomains (obpark.in, www.obpark.in)
      if (/^https?:\/\/(?:[a-zA-Z0-9-]+\.)*obpark\.in$/.test(origin)) {
        return callback(null, true);
      }

      // Match Vercel preview/production deployments (e.g. obpark-xxx-user-projects.vercel.app)
      if (/^https:\/\/obpark(?:-[a-zA-Z0-9]+)*(?:-projects)?\.vercel\.app$/.test(origin)) {
        return callback(null, true);
      }

      // Match any local dev port
      if (/^http:\/\/localhost:\d+$/.test(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked origin: ${origin}`), false);
    },
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization, X-Requested-With',
  });

  setupSwagger(app);

  // Render requires listening on 0.0.0.0
  await app.listen(port, '0.0.0.0');

  console.log(`🐦‍🔥 Server running on port ${port}`);
  console.log(`🦚 Swagger Docs: /api`);
}

bootstrap();