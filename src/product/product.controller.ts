import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductInterface } from './interface/product.interface';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async getAllProducts(): Promise<ProductInterface[]> {
    return this.productService.getAll();
  }

  @Get(':id')
  async getProductsById(@Param() id: string): Promise<ProductInterface> {
    return this.productService.getById(id);
  }

  @Post()
  async createProduct(
    @Body() productoDTO: ProductDTO,
  ): Promise<ProductInterface> {
    return this.productService.createData(productoDTO);
  }

  @Delete(':id')
  async deleteProductById(@Param() id: string): Promise<ProductInterface> {
    return this.productService.deleteById(id);
  }

  @Put(':id')
  async updateProductById(
    @Param() id: string,
    @Body() productoDTO: ProductDTO,
  ): Promise<ProductDTO> {
    return this.productService.updateById(id, productoDTO);
  }
}
