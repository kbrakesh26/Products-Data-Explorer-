import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../database/entities/product.entity';
import { ProductDetail } from '../../database/entities/product-detail.entity';
import { Review } from '../../database/entities/review.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(ProductDetail)
    private productDetailRepository: Repository<ProductDetail>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async findAll(categoryId?: string, page = 1, limit = 20): Promise<{ products: Product[]; total: number }> {
    const whereCondition: any = { isActive: true };
    if (categoryId) {
      whereCondition.categoryId = categoryId;
    }

    const [products, total] = await this.productRepository.findAndCount({
      where: whereCondition,
      relations: ['category'],
      order: { createdAt: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });

    return { products, total };
  }

  async findOne(id: string): Promise<Product | null> {
    return this.productRepository.findOne({
      where: { id, isActive: true },
      relations: ['category', 'productDetail', 'reviews'],
    });
  }

  async findBySlug(slug: string): Promise<Product | null> {
    return this.productRepository.findOne({
      where: { slug, isActive: true },
      relations: ['category', 'productDetail', 'reviews'],
    });
  }

  async getRecommendations(productId: string, limit = 5): Promise<Product[]> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: ['category'],
    });

    if (!product) return [];

    return this.productRepository.find({
      where: { 
        categoryId: product.categoryId,
        isActive: true,
      },
      relations: ['category'],
      order: { rating: 'DESC' },
      take: limit,
    });
  }

  async searchProducts(query: string, page = 1, limit = 20): Promise<{ products: Product[]; total: number }> {
    const [products, total] = await this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .where('product.isActive = :isActive', { isActive: true })
      .andWhere('(product.title ILIKE :query OR product.shortDescription ILIKE :query)', {
        query: `%${query}%`,
      })
      .orderBy('product.rating', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { products, total };
  }
}
