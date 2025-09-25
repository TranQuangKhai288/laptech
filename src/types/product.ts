// Product Types
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  category: Category;
  brand: Brand;
  images: ProductImage[];
  specifications: ProductSpecification[];
  features: string[];
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  order: number;
  isMain: boolean;
}

export interface ProductSpecification {
  id: string;
  name: string;
  value: string;
  group: string;
  order: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  children?: Category[];
  productCount: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  description?: string;
  website?: string;
  productCount: number;
}

// Filter and Search Types
export interface ProductFilters {
  category?: string[];
  brand?: string[];
  priceMin?: number;
  priceMax?: number;
  inStock?: boolean;
  rating?: number;
  features?: string[];
  sortBy?: "price" | "rating" | "name" | "newest" | "popularity";
  sortOrder?: "asc" | "desc";
}

export interface SearchParams {
  query?: string;
  filters?: ProductFilters;
  page?: number;
  limit?: number;
}

export interface ProductSearchResult {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Review Types
export interface ProductReview {
  id: string;
  productId: string;
  userId: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  rating: number;
  title: string;
  comment: string;
  pros?: string[];
  cons?: string[];
  isVerifiedPurchase: boolean;
  helpfulCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewSummary {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}
