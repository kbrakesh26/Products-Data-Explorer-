# Product Data Explorer

A comprehensive full-stack application for exploring product data from World of Books, built with NestJS backend and Next.js frontend.

## 🚀 Features

### Backend (NestJS)
- **RESTful API** with comprehensive Swagger documentation
- **Web Scraping** using Crawlee + Playwright for real-time data
- **PostgreSQL** database with TypeORM for data persistence
- **Queue System** with Bull/Redis for background scraping jobs
- **Rate Limiting** and security middleware
- **Caching** with Redis for optimal performance
- **Comprehensive Testing** setup

### Frontend (Next.js)
- **Modern React** with Next.js 14 App Router
- **TypeScript** for type safety
- **Tailwind CSS** for responsive styling
- **SWR & React Query** for efficient data fetching
- **Search Functionality** with real-time results
- **Responsive Design** with mobile-first approach
- **Accessibility** focused components

## 🏗️ Architecture

```
├── backend/          # NestJS API server
│   ├── src/
│   │   ├── modules/      # Feature modules (navigation, products, etc.)
│   │   ├── database/     # Entities, migrations, seeds
│   │   └── scraping/     # Web scraping logic
├── frontend/         # Next.js React application
│   ├── src/
│   │   ├── app/          # Next.js pages and layouts
│   │   ├── components/   # React components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and API client
└── docs/            # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- PostgreSQL (v13+)
- Redis (v6+)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/product-data-explorer.git
cd product-data-explorer
```

### 2. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Update .env with your database credentials
# DATABASE_HOST=localhost
# DATABASE_PORT=5432
# DATABASE_USERNAME=postgres
# DATABASE_PASSWORD=your_password
# DATABASE_NAME=product_data_explorer

# Run database migrations
npm run migration:run

# Seed the database with sample data
npm run seed

# Start the backend server
npm run start:dev
```

The backend will be running at `http://localhost:3001`
API documentation available at `http://localhost:3001/api/docs`

### 3. Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Update .env.local
# NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Start the frontend server
npm run dev
```

The frontend will be running at `http://localhost:3000`

## 📋 API Endpoints

### Navigation
- `GET /api/navigation` - Get all navigation items
- `GET /api/navigation/:id` - Get navigation item by ID

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `GET /api/categories/slug/:slug` - Get category by slug

### Products
- `GET /api/products` - Get all products (with pagination)
- `GET /api/products/search?q=query` - Search products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/:id/recommendations` - Get product recommendations

### Scraping
- `POST /api/scraping/navigation/refresh` - Refresh navigation data
- `POST /api/scraping/categories/refresh` - Refresh category data
- `POST /api/scraping/products/refresh` - Refresh product data
- `GET /api/scraping/jobs` - Get all scraping jobs
- `GET /api/scraping/jobs/:id` - Get scraping job status

## 🔧 Development

### Backend Development

```bash
cd backend

# Start in watch mode
npm run start:dev

# Run tests
npm test

# Run e2e tests
npm run test:e2e

# Generate migration
npm run migration:generate -- src/database/migrations/MigrationName

# Run migration
npm run migration:run
```

### Frontend Development

```bash
cd frontend

# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 🐳 Docker Deployment

### Using Docker Compose

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Individual Docker Builds

```bash
# Backend
cd backend
docker build -t product-data-explorer-backend .
docker run -p 3001:3001 product-data-explorer-backend

# Frontend
cd frontend
docker build -t product-data-explorer-frontend .
docker run -p 3000:3000 product-data-explorer-frontend
```

## 🌐 Deployment

### Backend Deployment Options

- **Railway**: Easy deployment with automatic builds
- **Render**: Simple PostgreSQL and Redis hosting
- **Heroku**: Classic PaaS with add-ons
- **DigitalOcean**: App Platform deployment
- **AWS**: ECS or Elastic Beanstalk

### Frontend Deployment Options

- **Vercel**: Optimal for Next.js applications
- **Netlify**: Great for static site generation
- **AWS S3 + CloudFront**: Static hosting solution
- **Railway**: Full-stack deployment

## 📊 Database Schema

The application uses the following main entities:

- **Navigation**: Main navigation categories
- **Category**: Product categories and subcategories
- **Product**: Individual product information
- **ProductDetail**: Extended product metadata
- **Review**: Customer reviews and ratings
- **ScrapeJob**: Background scraping job tracking
- **ViewHistory**: User interaction tracking

## 🔒 Security Features

- **Rate Limiting**: Prevents API abuse
- **CORS Configuration**: Secure cross-origin requests
- **Input Validation**: Comprehensive data validation
- **SQL Injection Prevention**: Parameterized queries
- **XSS Protection**: Content sanitization
- **Helmet**: Security headers middleware

## 🧪 Testing

### Backend Testing

```bash
cd backend

# Unit tests
npm test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### Frontend Testing

```bash
cd frontend

# Component tests (when implemented)
npm test

# E2E tests (when implemented)
npm run test:e2e
```

## 📈 Performance Optimizations

### Backend
- Database query optimization with proper indexing
- Redis caching for frequently accessed data
- Background job processing for scraping
- Connection pooling for database efficiency

### Frontend
- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- SWR caching for API responses
- Lazy loading for non-critical components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- World of Books for providing the data source
- NestJS and Next.js communities for excellent documentation
- Crawlee team for the robust scraping framework
- Contributors and testers

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

---

Made with ❤️ by the Product Data Explorer Team