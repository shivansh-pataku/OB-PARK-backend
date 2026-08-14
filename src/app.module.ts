import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration, validate } from './config';
import { PrismaModule } from './database/prisma/prisma.module';
import { FirebaseModule } from './integrations/firebase/firebase.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { ProfileModule } from './modules/profile/profile.module';
import { StorageModule } from './modules/storage/storage.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { ProductsModule } from './modules/products/products.module';
import { PaymentModule } from './modules/payment/payment.module';
import { FormsModule } from './modules/forms/forms.module';


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
    PaymentModule,
    VehicleModule,
    ProfileModule,
    PrismaModule,
    FirebaseModule,
    AuthModule,
    UsersModule,
    StorageModule,
    ProductsModule,
    ServeStaticModule.forRoot({ rootPath: join(process.cwd(), 'uploads'), serveRoot: '/uploads', }),
    FormsModule,
  ],

  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule { }
