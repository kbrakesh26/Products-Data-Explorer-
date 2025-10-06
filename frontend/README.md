# Frontend - Product Data Explorer

A modern Next.js frontend application for exploring product data from World of Books.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **SWR & React Query** for data fetching
- **Responsive Design** with mobile-first approach
- **Search Functionality** with debounced input
- **Loading States** and skeleton screens
- **Accessibility** focused components

## Quick Start

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Update .env.local with your API URL
# NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── providers.tsx     # App providers (SWR, React Query)
│   └── globals.css       # Global styles
├── components/
│   ├── layout/           # Layout components (Header, Footer)
│   ├── home/             # Home page components
│   └── ui/               # Reusable UI components
├── hooks/
│   └── useApi.ts         # Custom hooks for API calls
├── lib/
│   ├── api.ts            # API client with axios
│   └── utils.ts          # Utility functions
├── types/
│   └── index.ts          # TypeScript type definitions
└── styles/
    └── globals.css       # Global CSS with Tailwind
```

## Key Components

### Layout Components
- **Header**: Navigation with search functionality
- **Footer**: Site links and information
- **MobileMenu**: Responsive mobile navigation

### Home Page Components
- **Hero**: Landing section with call-to-action
- **FeaturedCategories**: Grid of product categories
- **RecentProducts**: Latest products showcase

### UI Components
- **SearchBar**: Debounced search with navigation
- **LoadingSpinner**: Loading indicators
- **ProductCard**: Product display cards

## Pages & Routes

- `/` - Home page with hero and featured content
- `/categories` - Browse all categories
- `/categories/[slug]` - Individual category pages
- `/products` - All products with pagination
- `/products/[slug]` - Individual product pages
- `/search` - Search results page
- `/about` - About page
- `/contact` - Contact page

## Data Fetching

The app uses SWR for efficient data fetching with:

- Automatic caching and revalidation
- Background updates
- Error handling and retry logic
- Loading states
- Optimistic updates

## Styling

Built with Tailwind CSS featuring:

- Custom color palette
- Responsive design utilities
- Component-based CSS classes
- Dark mode support (planned)
- Accessibility-focused design

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:3001/api` |
| `NEXT_PUBLIC_TARGET_BASE_URL` | Target site for images | `https://www.worldofbooks.com` |

## Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
npm run build
vercel --prod
```

### Docker

```bash
# Build Docker image
docker build -t product-data-explorer-frontend .

# Run container
docker run -p 3000:3000 product-data-explorer-frontend
```

### Static Export

```bash
# Build static export
npm run build
npm run export
```

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- Bundle analysis and optimization
- Lazy loading for non-critical components
- Service Worker for caching (planned)

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.