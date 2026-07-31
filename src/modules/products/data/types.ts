export interface Category {
  id: string;
  categoryName: string;
  slug: string;
  items: SingleProduct[];
}

export interface ProductCategory {
  id: string;
  categoryName: string;
  slug: string;
  imagePath: string;
  shortDescription: string;
}

export interface ReviewSummary {
  averageRating: number;
  totalReviewsCount: number;
  boughtPastMonthText: string;
  soldLastWeekText: string;
}

export interface StarPercentageBar {
  stars: number;
  percentage: number;
}

export interface UserReviewCard {
  id: string;
  reviewerName: string;
  rating: number;
  isVerifiedBuyer: boolean;
  commentText: string;
  postedDateAgo: string;
  userUploadedMedia?: string[];
}

export interface ProductAttribute {
  label: string;
  value: string;
}

export interface AboutItemSection {
  heading: string;
  content: string;
}

export interface SingleProduct {
  id: string;
  title: string;
  brand: string;
  price: number;
  currencySymbol: string;
  imagePath: string;
  galleryImages: string[];
  discountText: string;
  ratingData: ReviewSummary;
  attributes: ProductAttribute[];
  aboutSections: AboutItemSection[];
  shippingBadges: string[];

  reviewsBreakdown: {
    starBars: StarPercentageBar[];
    userFeed: UserReviewCard[];
  };
}

export interface OtherProductImages {
  extraImagesSet: string[];
  electronicsImages: string[];
  evAccessoriesImages: string[];
  exteriorAccessoriesImages: string[];
  enuImages: string[];
}


export const productCategories: ProductCategory[] = [
  {
    id: "cat-1",

    categoryName: "EV (Electric Vehicle) Accessories",

    slug: "ev-electric-vehicle-accessories",

    imagePath: "/categories/ev-accessories.jpg",

    shortDescription:
      "Charging solutions, EV connectors, smart battery tools and modern electric vehicle accessories.",
  },

  {
    id: "cat-2",

    categoryName: "Exterior Accessories",

    slug: "exterior-accessories",

    imagePath: "/categories/exterior-accessories.jpg",

    shortDescription:
      "Car covers, body styling parts, exterior protection accessories and vehicle appearance upgrades.",
  },

  {
    id: "cat-3",

    categoryName: "Electronics & Smart Gadgets",

    slug: "electronics-smart-gadgets",

    imagePath: "/categories/electronics-smart-gadgets.jpg",

    shortDescription:
      "Dashcams, smart chargers, wireless connectivity tools, navigation devices and modern car electronics.",
  },

  {
    id: "cat-4",

    categoryName: "Emergency & Utility Products",

    slug: "emergency-utility-products",

    imagePath: "/categories/emergency-utility-products.jpg",

    shortDescription:
      "Emergency repair kits, portable inflators, jump starters, safety tools and roadside utility essentials.",
  },
];