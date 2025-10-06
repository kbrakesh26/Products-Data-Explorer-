import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price?: number, currency = 'USD'): string {
  if (!price) return 'Price not available';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function formatRating(rating?: number): string {
  if (!rating) return 'No rating';
  return rating.toFixed(1);
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

export function getImageUrl(url?: string, fallback = '/placeholder-book.jpg'): string {
  if (!url) return fallback;
  
  // If it's already a full URL, return as is
  if (url.startsWith('http')) return url;
  
  // If it's a relative URL, assume it's from the target site
  const baseUrl = process.env.NEXT_PUBLIC_TARGET_BASE_URL || 'https://www.worldofbooks.com';
  return `${baseUrl}${url}`;
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}