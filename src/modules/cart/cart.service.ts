import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { ProductsService } from '../products/products.service';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Injectable()
export class CartService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly productsService: ProductsService,
    ) { }

    // 1. Fetch all cart details and product information
    async getCart(userId: string) {
        let cart = await this.prisma.cart.findUnique({
            where: { userId },
            include: { items: true },
        });

        // If it is the user's first time, create a new empty cart
        if (!cart) {
            cart = await this.prisma.cart.create({
                data: { userId },
                include: { items: true },
            });
        }

        const items: any[] = [];

        let subtotal = 0;

        // Link product details for each cart item
        for (const item of cart.items) {
            try {
                const product = this.productsService.getProductById(item.productId);
                items.push({
                    id: item.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    color: item.color,
                    size: item.size,
                    product: {
                        id: product.id,
                        name: product.title,
                        brand: product.brand,
                        price: Number(product.price),
                        imagePath: product.imagePath,
                    },
                });
                subtotal += Number(product.price) * item.quantity;
            } catch (err) {
                console.error(`Product ${item.productId} not found:`, err);
            }
        }

        return {
            id: cart.id,
            userId: cart.userId,
            items,
            subtotal,
            itemCount: items.reduce((acc, item) => acc + item.quantity, 0),
        };
    }

    // 2. Add product to cart or increment quantity
    async addToCart(userId: string, dto: AddToCartDto) {
        // Check if the product is valid
        const product = this.productsService.getProductById(dto.productId);
        if (!product) {
            throw new NotFoundException('Product not found');
        }

        // Fetch or create the user's cart
        let cart = await this.prisma.cart.findUnique({
            where: { userId },
        });

        if (!cart) {
            cart = await this.prisma.cart.create({
                data: { userId },
            });
        }

        // Set default values if not provided by the user
        const color = dto.color || 'Default';
        const size = dto.size || 'Standard';
        const quantity = dto.quantity || 1;

        // Check if the same variation (productId + color + size) already exists in the cart
        const existingItem = await this.prisma.cartItem.findFirst({
            where: {
                cartId: cart.id,
                productId: dto.productId,
                color,
                size,
            },
        });

        if (existingItem) {
            // If the item already exists, increment the quantity
            return this.prisma.cartItem.update({
                where: { id: existingItem.id },
                data: {
                    quantity: existingItem.quantity + quantity,
                },
            });
        } else {
            // If it is a new item, insert a new entry into the cartItem table
            return this.prisma.cartItem.create({
                data: {
                    cartId: cart.id,
                    productId: dto.productId,
                    quantity,
                    color,
                    size,
                },
            });
        }
    }

    // 3. update quantity
    async updateCartItem(userId: string, itemId: string, quantity: number) {
        // check cart existence for user
        const cart = await this.prisma.cart.findUnique({
            where: { userId },
        });
        if (!cart) {
            throw new NotFoundException('Cart not found');
        }
        // check item existence for same user cart

        const cartItem = await this.prisma.cartItem.findUnique({
            where: { id: itemId },
        });
        if (!cartItem || cartItem.cartId !== cart.id) {
            throw new NotFoundException('Cart item not found in your cart');
        }
        // update quantity
        return this.prisma.cartItem.update({
            where: { id: itemId },
            data: { quantity },
        });
    }
    // 4. remove cart item
    async removeCartItem(userId: string, itemId: string) {
        // find cart existence
        const cart = await this.prisma.cart.findUnique({
            where: { userId },
        });
        if (!cart) {
            throw new NotFoundException('Cart not found');
        }
        // check item existence for same user cart
        const cartItem = await this.prisma.cartItem.findUnique({
            where: { id: itemId },
        });
        if (!cartItem || cartItem.cartId !== cart.id) {
            throw new NotFoundException('Cart item not found in your cart');
        }

        return this.prisma.cartItem.delete({
            where: { id: itemId },
        });
    }
}