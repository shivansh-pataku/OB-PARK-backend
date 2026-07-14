import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration, validate } from './config';
import { PrismaModule } from './database/prisma/prisma.module';
import { FirebaseModule } from './integrations/firebase/firebase.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';

@Module({
  imports: [
  ConfigModule.forRoot({
      isGlobal: true,

  envFilePath: '.env',
  load: [configuration],
  validate,
  cache: true,
  expandVariables: true,
}),
  PrismaModule, FirebaseModule, AuthModule, UsersModule,], 
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}