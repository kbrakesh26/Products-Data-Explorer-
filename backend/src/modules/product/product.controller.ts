import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { Product } from '../../database/entities/product.entity';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiQuery({ name: 'categoryId', required: false, description: 'Filter by category ID' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number', type: Number })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page', type: Number })
  @ApiResponse({ status: 200, description: 'Return all products.' })
  async findAll(
    @Query('categoryId') categoryId?: string,
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ): Promise<{ products: Product[]; total: number; page: number; limit: number }> {
    const result = await this.productService.findAll(categoryId, Number(page), Number(limit));
    return {
      ...result,
      page: Number(page),
      limit: Number(limit),
    };
  }

  @Get('search')
  @ApiOperation({ summary: 'Search products' })
  @ApiQuery({ name: 'q', required: true, description: 'Search query' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number', type: Number })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page', type: Number })
  @ApiResponse({ status: 200, description: 'Return search results.' })
  async search(
    @Query('q') query: string,
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ): Promise<{ products: Product[]; total: number; page: number; limit: number }> {
    const result = await this.productService.searchProducts(query, Number(page), Number(limit));
    return {
      ...result,
      page: Number(page),
      limit: Number(limit),
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: 200, description: 'Return product.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  async findOne(@Param('id') id: string): Promise<Product | null> {
    return this.productService.findOne(id);
  }

  @Get(':id/recommendations')
  @ApiOperation({ summary: 'Get product recommendations' })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of recommendations', type: Number })
  @ApiResponse({ status: 200, description: 'Return product recommendations.' })
  async getRecommendations(
    @Param('id') id: string,
    @Query('limit') limit = 5,
  ): Promise<Product[]> {
    return this.productService.getRecommendations(id, Number(limit));
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get product by slug' })
  @ApiResponse({ status: 200, description: 'Return product.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  async findBySlug(@Param('slug') slug: string): Promise<Product | null> {
    return this.productService.findBySlug(slug);
  }
}
