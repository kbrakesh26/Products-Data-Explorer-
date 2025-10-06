import axios from 'axios';
import type {
  Navigation,
  Category,
  Product,
  ScrapeJob,
  PaginatedResponse,
} from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Response Error:', {
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
    });
    return Promise.reject(error);
  }
);

// Navigation API
export const navigationApi = {
  getAll: (): Promise<Navigation[]> =>
    api.get('/navigation').then((res) => res.data),
  
  getById: (id: string): Promise<Navigation> =>
    api.get(`/navigation/${id}`).then((res) => res.data),
};

// Category API
export const categoryApi = {
  getAll: (navigationId?: string): Promise<Category[]> => {
    const params = navigationId ? { navigationId } : {};
    return api.get('/categories', { params }).then((res) => res.data);
  },
  
  getById: (id: string): Promise<Category> =>
    api.get(`/categories/${id}`).then((res) => res.data),
  
  getBySlug: (slug: string): Promise<Category> =>
    api.get(`/categories/slug/${slug}`).then((res) => res.data),
};

// Product API
export const productApi = {
  getAll: (params?: {
    categoryId?: string;
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponse<Product>> =>
    api.get('/products', { params }).then((res) => res.data),
  
  search: (params: {
    q: string;
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponse<Product>> =>
    api.get('/products/search', { params }).then((res) => res.data),
  
  getById: (id: string): Promise<Product> =>
    api.get(`/products/${id}`).then((res) => res.data),
  
  getBySlug: (slug: string): Promise<Product> =>
    api.get(`/products/slug/${slug}`).then((res) => res.data),
  
  getRecommendations: (id: string, limit = 5): Promise<Product[]> =>
    api.get(`/products/${id}/recommendations`, { params: { limit } }).then((res) => res.data),
};

// Scraping API
export const scrapingApi = {
  startJob: (data: {
    type: string;
    url: string;
    parameters?: Record<string, any>;
  }): Promise<ScrapeJob> =>
    api.post('/scraping/start', data).then((res) => res.data),
  
  refreshNavigation: (): Promise<{ message: string }> =>
    api.post('/scraping/navigation/refresh').then((res) => res.data),
  
  refreshCategories: (navigationId?: string): Promise<{ message: string }> =>
    api.post('/scraping/categories/refresh', { navigationId }).then((res) => res.data),
  
  refreshProducts: (data?: {
    categoryId?: string;
    limit?: number;
  }): Promise<{ message: string }> =>
    api.post('/scraping/products/refresh', data).then((res) => res.data),
  
  getAllJobs: (): Promise<ScrapeJob[]> =>
    api.get('/scraping/jobs').then((res) => res.data),
  
  getJobStatus: (id: string): Promise<ScrapeJob> =>
    api.get(`/scraping/jobs/${id}`).then((res) => res.data),
};

export default api;