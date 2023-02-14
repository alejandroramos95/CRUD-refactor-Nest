import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productMongoService } from 'src/utils/productMongo.service';

@Module({
  providers: [ProductService, productMongoService],
  controllers: [ProductController],
})
export class ProductModule {}
