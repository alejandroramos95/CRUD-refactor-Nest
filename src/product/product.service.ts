import { Injectable } from '@nestjs/common';
import { productMongoService } from 'src/utils/productMongo.service';
import { ProductInterface } from './interface/product.interface';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productMongo: productMongoService) {}

  async getAll(): Promise<ProductInterface[]> {
    return await this.productMongo.getAll();
  }

  async getById(id: string): Promise<ProductInterface> {
    return await this.productMongo.getById(id);
  }

  async createData(product: ProductDTO): Promise<ProductInterface> {
    return await this.productMongo.createData(product);
  }

  async deleteById(id: string): Promise<ProductInterface> {
    return await this.productMongo.deleteById(id);
  }

  async updateById(id: string, product): Promise<ProductDTO> {
    return await this.productMongo.updateById(id, product);
  }
}
