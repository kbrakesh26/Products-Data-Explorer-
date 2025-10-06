import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductDetail } from './entities/product-detail.entity';
import { Review } from './entities/review.entity';
import { Category } from './entities/category.entity';

@Module({
  imports: [
  TypeOrmModule.forFeature([Product, ProductDetail, Review, Category]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
