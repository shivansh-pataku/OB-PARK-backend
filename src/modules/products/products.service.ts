import { Injectable, NotFoundException } from '@nestjs/common';
import { MockData } from './data/mock-data';
import { productCategories } from './data/types';

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

  private mapProduct(product: any, category: { id: string; categoryName: string; slug: string }) {
    const mapped = {
      ...product,
      name: product.title, // Map title to name for frontend hook compatibility
      category: {
        id: category.id,
        name: category.categoryName,
        slug: category.slug,
      },
    };

    if (mapped.imagePath) {
      mapped.imagePath = this.fixImagePaths(mapped.imagePath);
    }
    if (mapped.galleryImages) {
      mapped.galleryImages = mapped.galleryImages.map((img: string) => this.fixImagePaths(img));
    }
    if (mapped.reviewsBreakdown?.userFeed) {
      mapped.reviewsBreakdown.userFeed = mapped.reviewsBreakdown.userFeed.map((rev: any) => {
        if (rev.userUploadedMedia) {
          return {
            ...rev,
            userUploadedMedia: rev.userUploadedMedia.map((img: string) => this.fixImagePaths(img)),
          };
        }
        return rev;
      });
    }
    return mapped;
  }

  getCategories() {
    return productCategories.map((cat) => ({
      id: cat.id,
      name: cat.categoryName,
      slug: cat.slug,
      imagePath: cat.imagePath,
      shortDescription: cat.shortDescription,
    }));
  }

  getProducts(categorySlug?: string, search?: string, limit = 10, offset = 0) {
    let allProducts: any[] = [];

    for (const cat of MockData) {
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
          p.title.toLowerCase().includes(searchLower) ||
          p.brand.toLowerCase().includes(searchLower),
      );
    }

    const total = allProducts.length;
    const paginated = allProducts.slice(offset, offset + limit);

    return {
      products: paginated,
      total,
      limit,
      offset,
    };
  }

  getFeaturedProducts() {
    const featured: any[] = [];
    for (const cat of MockData) {
      if (cat.items.length > 0) {
        // Take the first product of each category as featured
        featured.push(this.mapProduct(cat.items[0], cat));
      }
    }
    return featured;
  }

  getProductById(id: string) {
    for (const cat of MockData) {
      const product = cat.items.find((item) => item.id === id);
      if (product) {
        return this.mapProduct(product, cat);
      }
    }
    throw new NotFoundException(`Product with ID "${id}" not found`);
  }
}
