import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController, CategoriesController } from './products.controller';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
