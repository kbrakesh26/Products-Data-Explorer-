'use client';

import { useCategories } from '@/hooks/useApi';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export function FeaturedCategories() {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Failed to load categories</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories?.slice(0, 8).map((category) => (
          <a
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
          >
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
              {category.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {category.productCount} books
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}