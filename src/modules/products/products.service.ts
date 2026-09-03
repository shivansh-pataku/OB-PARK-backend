import { Injectable, NotFoundException } from '@nestjs/common';
import { allCategories } from './data/categories';
import { Product } from './data/types';

@Injectable()
export class ProductsService {
  private fixImagePaths(path: string): string {
    if (!path) return path;
    // Map '/products/' relative path to '/uploads/products/' served by backend
    if (path.startsWith('/products/')) {
      return path.replace('/products/', '/uploads/products/');
    }
    return path;
  }

  private mapProduct(
    product: Product,
    category: { id: string; categoryName: string; slug: string },
  ) {
    const mapped = {
      ...product,
      // Map new properties to old property names for backward compatibility:
      title: product.productName,
      name: product.productName,
      basePrice: product.productCost,
      price: Number(product.productCost),
      brand: (product as any).brand || '',
      imagePath: product.images && product.images[0] ? this.fixImagePaths(product.images[0]) : '',
      galleryImages: product.images ? product.images.map((img: string) => this.fixImagePaths(img)) : [],
      images: product.images && product.images.length > 0 ? [this.fixImagePaths(product.images[0])] : [],
      category: {
        id: category.id,
        name: category.categoryName,
        slug: category.slug,
      },
    };
    return mapped;
  }

  getCategories() {
    return allCategories.map((cat) => ({
      id: cat.id,
      name: cat.categoryName,
      slug: cat.slug,
      imagePath: `/categories/${cat.slug}.jpg`,
      shortDescription: `Explore our collection of ${cat.categoryName} products.`,
    }));
  }

  getProducts(categorySlug?: string, search?: string, limit?: number, offset?: number) {
    let allProducts: any[] = [];

    for (const cat of allCategories) {
      if (categorySlug && cat.slug !== categorySlug) {
        continue;
      }
      const mapped = cat.items.map((item) => this.mapProduct(item, cat));
      allProducts.push(...mapped);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      allProducts = allProducts.filter(
        (p) =>
          p.productName.toLowerCase().includes(searchLower) ||
          (p.brand && p.brand.toLowerCase().includes(searchLower)) ||
          (p.productHeading && p.productHeading.toLowerCase().includes(searchLower)),
      );
    }

    const total = allProducts.length;
    const paginated = limit !== undefined
      ? allProducts.slice(offset ?? 0, (offset ?? 0) + limit)
      : allProducts;

    return {
      products: paginated,
      total,
      limit: limit ?? total,
      offset: offset ?? 0,
    };
  }

  getFeaturedProducts() {
    const featured: any[] = [];
    for (const cat of allCategories) {
      if (cat.items.length > 0) {
        // Take the first product of each category as featured
        featured.push(this.mapProduct(cat.items[0], cat));
      }
    }
    return featured;
  }

  getProductById(id: string): any {
    // 1. Check if the ID matches a category slug
    const category = allCategories.find((cat) => cat.slug === id || cat.id === id);
    if (category) {
      return {
        products: category.items.map((item) => this.mapProduct(item, category)),
        total: category.items.length,
        limit: category.items.length,
        offset: 0,
      };
    }

    // 2. Otherwise search for a single product by productId or numeric id
    for (const cat of allCategories) {
      const product = cat.items.find(
        (item) => String(item.id) === id || item.productId === id,
      );
      if (product) {
        return this.mapProduct(product, cat);
      }
    }
    throw new NotFoundException(`Product or Category with ID "${id}" not found`);
  }
}
