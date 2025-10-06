'use client';

import { useProducts } from '@/hooks/useApi';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { formatPrice } from '@/lib/utils';

export function RecentProducts() {
  const { data, isLoading, error } = useProducts({ limit: 12 });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Failed to load products</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Recent Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((product) => (
          <a
            key={product.id}
            href={`/products/${product.slug}`}
            className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {product.category?.name}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-primary-600">
                  {formatPrice(product.price, product.currency)}
                </span>
                {product.rating && (
                  <div className="flex items-center text-sm text-gray-500">
                    <span>★ {product.rating.toFixed(1)}</span>
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="/products"
          className="btn-primary px-8 py-3 text-lg font-semibold rounded-lg transition-colors"
        >
          View All Products
        </a>
      </div>
    </div>
  );
}