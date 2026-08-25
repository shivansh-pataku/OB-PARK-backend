// 1. Single Product Blueprint
export interface Product {
    id: number;
    productId: string;
    productHeading: string;
    productName: string;
    productDescription: string;
    productRating: number;       // e.g. 4.5 (without "/5")
    productFeatures: string[];   // split by semicolon (;)
    productCost: number;         // base cost
    platformCharges: number;
    gst: number;
    discountCoupon: string | null;
    shippingInformation: string;
    longDescription: string;
    category: string;            // category name
    images: string[];            // array of 4 image URLs
}

// 2. Category Wrapper
export interface CategoryProducts {
    id: string;                  // e.g. "car-accessories"
    categoryName: string;        // e.g. "Car Accessories"
    slug: string;
    items: Product[];
}