import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Product Data Explorer - Discover Amazing Books',
  description: 'Explore a vast collection of books from World of Books with our comprehensive product data explorer.',
  keywords: ['books', 'reading', 'literature', 'product explorer', 'world of books'],
  authors: [{ name: 'Product Data Explorer Team' }],
  openGraph: {
    title: 'Product Data Explorer',
    description: 'Discover amazing books with our comprehensive product explorer',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Data Explorer',
    description: 'Discover amazing books with our comprehensive product explorer',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50`}>
        <Providers>
          <div className="min-h-full flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}