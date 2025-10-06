import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// ...existing imports...
import { BullModule } from '@nestjs/bull';
import { ScheduleModule } from '@nestjs/schedule';

import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './database/entities/product.entity';
import { ProductDetail } from './database/entities/product-detail.entity';
import { Review } from './database/entities/review.entity';
import { Category } from './database/entities/category.entity';
import { SeederService } from './seeder/seeder.service';
import { NavigationModule } from './modules/navigation/navigation.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { ScrapingModule } from './modules/scraping/scraping.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      // Use file-based sqlite for persistence; fallback to data/database.sqlite
      database: process.env.SQLITE_FILE ?? 'data/database.sqlite',
      synchronize: true,
      // Register all entity files (compiled .js) to avoid metadata ordering issues
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    // Throttler removed temporarily to ensure app bootstraps in this environment.
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT ?? '6379'),
      },
    }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    TypeOrmModule.forFeature([Product, ProductDetail, Review]),
    NavigationModule,
    CategoryModule,
    ProductModule,
    ScrapingModule,
  ],
  providers: [SeederService],
})
export class AppModule {}
