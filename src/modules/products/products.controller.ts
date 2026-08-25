import { Controller, Get, Query, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Public } from '../../common/decorators/public.decorator';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Public()
  @Get('featured')
  getFeatured() {
    return this.productsService.getFeaturedProducts();
  }

  @Public()
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  @Public()
  @Get()
  getProducts(
    @Query('category') category?: string,
    @Query('categoryslug') categoryslug?: string,
    @Query('search') search?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    const parsedLimit = limit ? parseInt(limit, 10) : undefined;
    const parsedOffset = offset ? parseInt(offset, 10) : undefined;
    return this.productsService.getProducts(
      category || categoryslug,
      search,
      parsedLimit,
      parsedOffset,
    );
  }
}

@Controller('categories')
export class CategoriesController {
  constructor(private readonly productsService: ProductsService) { }

  @Public()
  @Get()
  getCategories() {
    return this.productsService.getCategories();
  }
}
