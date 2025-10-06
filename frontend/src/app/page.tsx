import { Suspense } from 'react';
import { Hero } from '@/components/home/Hero';
import { FeaturedCategories } from '@/components/home/FeaturedCategories';
import { RecentProducts } from '@/components/home/RecentProducts';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <Suspense fallback={<LoadingSpinner />}>
          <FeaturedCategories />
        </Suspense>
      </section>
      
      {/* Recent Products */}
      <section className="container mx-auto px-4">
        <Suspense fallback={<LoadingSpinner />}>
          <RecentProducts />
        </Suspense>
      </section>
    </div>
  );
}