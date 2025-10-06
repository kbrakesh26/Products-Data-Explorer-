export interface Navigation {
  id: string;
  name: string;
  url: string;
  order: number;
  isActive: boolean;
  categories?: Category[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  url: string;
  slug: string;
  description?: string;
  parentId?: string;
  navigationId: string;
  productCount: number;
  isActive: boolean;
  navigation?: Navigation;
  parent?: Category;
  subcategories?: Category[];
  products?: Product[];
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  title: string;
  url: string;
  slug: string;
  price?: number;
  originalPrice?: number;
  currency?: string;
  imageUrl?: string;
  shortDescription?: string;
  condition?: string;
  availability?: string;
  rating?: number;
  reviewCount: number;
  categoryId: string;
  isActive: boolean;
  lastScrapedAt?: string;
  category?: Category;
  productDetail?: ProductDetail;
  reviews?: Review[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductDetail {
  id: string;
  productId: string;
  fullDescription?: string;
  author?: string;
  isbn?: string;
  publisher?: string;
  publicationDate?: string;
  language?: string;
  pages?: number;
  format?: string;
  weight?: number;
  dimensions?: string;
  specifications?: Record<string, any>;
  images?: string[];
  tags?: string[];
  product?: Product;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  productId: string;
  reviewerName?: string;
  title: string;
  content: string;
  rating: number;
  reviewDate?: string;
  isVerifiedPurchase: boolean;
  helpfulVotes: number;
  sourceUrl?: string;
  product?: Product;
  createdAt: string;
  updatedAt: string;
}

export interface ScrapeJob {
  id: string;
  type: 'navigation' | 'category' | 'product' | 'product_detail' | 'reviews';
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
  url: string;
  parameters?: Record<string, any>;
  result?: Record<string, any>;
  errorMessage?: string;
  startedAt?: string;
  completedAt?: string;
  retryCount: number;
  maxRetries: number;
  priority?: number;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  products?: T[];
  data?: T[];
  total: number;
  page: number;
  limit: number;
  totalPages?: number;
}