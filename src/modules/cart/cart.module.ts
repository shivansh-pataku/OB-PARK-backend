import { Module } from "@nestjs/common";
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { ProductsModule } from "../products/products.module";
import { PrismaModule } from "../../database/prisma/prisma.module";

@Module({
    imports: [ProductsModule, PrismaModule], // for database connectivity, 
    controllers: [CartController],
    providers: [CartService],
})

export class CartModule { }