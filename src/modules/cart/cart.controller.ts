import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@ApiTags('Cart')
@ApiBearerAuth('access-token')
@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    // 1. POST /cart/items (Add Product to Cart)
    @Post('items')
    @ApiOperation({ summary: 'Add product to cart' })
    async addToCart(
        @CurrentUser() user: any,
        @Body() dto: AddToCartDto,
    ) {
        const userId = user.sub;
        return this.cartService.addToCart(userId, dto);
    }

    // 2. GET /cart (Fetch Cart Details)
    @Get()
    @ApiOperation({ summary: 'Get current user cart details' })
    async getCart(@CurrentUser() user: any) {
        const userId = user.sub;
        return this.cartService.getCart(userId);
    }

    // 3. PATCH /cart/items/:itemId (Update Item Quantity)
    @Patch('items/:itemId')
    @ApiOperation({ summary: 'Update cart item quantity' })
    async updateCartItem(
        @CurrentUser() user: any,
        @Param('itemId') itemId: string,
        @Body() dto: UpdateCartItemDto,
    ) {
        const userId = user.sub;
        return this.cartService.updateCartItem(userId, itemId, dto.quantity);
    }

    // 4. DELETE /cart/items/:itemId (Remove Item from Cart)
    @Delete('items/:itemId')
    @ApiOperation({ summary: 'Remove item from cart' })
    async removeCartItem(
        @CurrentUser() user: any,
        @Param('itemId') itemId: string,
    ) {
        const userId = user.sub;
        return this.cartService.removeCartItem(userId, itemId);
    }
}
