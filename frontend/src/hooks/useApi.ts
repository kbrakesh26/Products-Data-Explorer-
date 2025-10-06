import useSWR from 'swr';
import { navigationApi, categoryApi, productApi } from '@/lib/api';
import type { Navigation, Category, Product, PaginatedResponse } from '@/types';

// Navigation hooks
export function useNavigation() {
  return useSWR<Navigation[]>('navigation', navigationApi.getAll, {
    revalidateOnFocus: false,
    dedupingInterval: 5 * 60 * 1000, // 5 minutes
  });
}

export function useNavigationItem(id: string) {
  return useSWR<Navigation>(
    id ? `navigation/${id}` : null,
    () => navigationApi.getById(id),
    {
      revalidateOnFocus: false,
    }
  );
}

// Category hooks
export function useCategories(navigationId?: string) {
  return useSWR<Category[]>(
    navigationId ? `categories?navigationId=${navigationId}` : 'categories',
    () => categoryApi.getAll(navigationId),
    {
      revalidateOnFocus: false,
      dedupingInterval: 5 * 60 * 1000, // 5 minutes
    }
  );
}

export function useCategory(id: string) {
  return useSWR<Category>(
    id ? `categories/${id}` : null,
    () => categoryApi.getById(id),
    {
      revalidateOnFocus: false,
    }
  );
}

export function useCategoryBySlug(slug: string) {
  return useSWR<Category>(
    slug ? `categories/slug/${slug}` : null,
    () => categoryApi.getBySlug(slug),
    {
      revalidateOnFocus: false,
    }
  );
}

// Product hooks
export function useProducts(params?: {
  categoryId?: string;
  page?: number;
  limit?: number;
}) {
  const key = params 
    ? `products?${new URLSearchParams(
        Object.entries(params).reduce((acc, [key, value]) => {
          if (value !== undefined) acc[key] = String(value);
          return acc;
        }, {} as Record<string, string>)
      ).toString()}`
    : 'products';

  return useSWR<PaginatedResponse<Product>>(
    key,
    () => productApi.getAll(params),
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
    }
  );
}

export function useProductSearch(query: string, params?: {
  page?: number;
  limit?: number;
}) {
  const searchParams = { q: query, ...params };
  const key = query 
    ? `products/search?${new URLSearchParams(
        Object.entries(searchParams).reduce((acc, [key, value]) => {
          if (value !== undefined) acc[key] = String(value);
          return acc;
        }, {} as Record<string, string>)
      ).toString()}`
    : null;

  return useSWR<PaginatedResponse<Product>>(
    key,
    () => productApi.search(searchParams),
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
      dedupingInterval: 30 * 1000, // 30 seconds for search results
    }
  );
}

export function useProduct(id: string) {
  return useSWR<Product>(
    id ? `products/${id}` : null,
    () => productApi.getById(id),
    {
      revalidateOnFocus: false,
    }
  );
}

export function useProductBySlug(slug: string) {
  return useSWR<Product>(
    slug ? `products/slug/${slug}` : null,
    () => productApi.getBySlug(slug),
    {
      revalidateOnFocus: false,
    }
  );
}

export function useProductRecommendations(id: string, limit = 5) {
  return useSWR<Product[]>(
    id ? `products/${id}/recommendations?limit=${limit}` : null,
    () => productApi.getRecommendations(id, limit),
    {
      revalidateOnFocus: false,
      dedupingInterval: 10 * 60 * 1000, // 10 minutes
    }
  );
}