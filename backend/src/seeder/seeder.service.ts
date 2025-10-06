import { Injectable, Logger } from '@nestjs/common';
import { OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../database/entities/product.entity';
import { ProductDetail } from '../database/entities/product-detail.entity';
import { Review } from '../database/entities/review.entity';

@Injectable()
export class SeederService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SeederService.name);

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(ProductDetail)
    private productDetailRepository: Repository<ProductDetail>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async onApplicationBootstrap() {
    // Only seed in non-production environments
    if (process.env.NODE_ENV === 'production') return;

    const count = await this.productRepository.count();
    if (count > 0) {
      this.logger.log('Seed data already present, skipping seeder.');
      return;
    }

    this.logger.log('Seeding demo products...');

    const demoProducts: Partial<Product>[] = [
      {
        slug: 'the-hobbit',
        title: 'The Hobbit',
        shortDescription: 'A fantasy novel by J.R.R. Tolkien',
        imageUrl: '/placeholder-book.jpg',
        isActive: true,
        categoryId: '',
        price: 9.99,
        currency: 'USD',
        rating: 4.7,
      },
      {
        slug: 'pride-and-prejudice',
        title: 'Pride and Prejudice',
        shortDescription: "A classic novel by Jane Austen",
        imageUrl: '/placeholder-book.jpg',
        isActive: true,
        categoryId: '',
        price: 7.5,
        currency: 'USD',
        rating: 4.5,
      },
      {
        slug: 'clean-code',
        title: 'Clean Code',
        shortDescription: 'A Handbook of Agile Software Craftsmanship',
        imageUrl: '/placeholder-book.jpg',
        isActive: true,
        categoryId: '',
        price: 28.0,
        currency: 'USD',
        rating: 4.8,
      },
    ];

    for (const p of demoProducts) {
      const product = this.productRepository.create(p as Product);
      await this.productRepository.save(product);
    }

    this.logger.log('Demo products seeded.');
  }
}
