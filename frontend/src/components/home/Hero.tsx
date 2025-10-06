export function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Amazing Books
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Explore thousands of books from World of Books with our comprehensive product data explorer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/categories"
              className="btn-primary px-8 py-3 text-lg font-semibold rounded-lg transition-colors"
            >
              Browse Categories
            </a>
            <a
              href="/products"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 text-lg font-semibold rounded-lg transition-colors"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}