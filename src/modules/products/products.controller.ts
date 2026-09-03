import { Controller, Get, Query, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Public } from '../../common/decorators/public.decorator';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Public()        //@Get is called as a decorator  which is used to get the data from the server using get HTTP method, here 'featured' is an endpoint used to get the featured products and can be used to get products by tag
  @Get('featured') // here featured is an optional param and used to get the featured products and can be used to get products by tag
  getFeatured() {
    return this.productsService.getFeaturedProducts(); //this means the function will return the products based on the featured param  
  }

  @Public()
  @Get(':id') // here id is a required param and used to get the product by id
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  @Public()
  @Get()
  getProducts(
    @Query('category') category?: string, //here tag @Query is used to get the value of the query parameter in url 
    @Query('categoryslug') categoryslug?: string,
    @Query('search') search?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    const parsedLimit = limit ? parseInt(limit, 10) : undefined; //limit is 
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
