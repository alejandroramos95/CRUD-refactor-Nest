import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/product/dto/product.dto';
import mongoose, { connect } from 'mongoose';
import { ProductModel } from 'src/product/models/product.model';

@Injectable()
export class productMongoService {
  private mongodb;
  private url: string;
  constructor() {
    this.url = process.env.DB_MONGO;
    this.mongodb = connect;
  }

  async save(prod) {
    await this.mongodb(this.url);
    const data = await prod.save();
    return data;
  }

  async createData(prod: ProductDTO) {
    await this.mongodb(this.url);
    const newProduct = await this.save(
      new ProductModel({
        title: prod.title,
        price: prod.price,
        thumbnail: prod.thumbnail,
      }),
    );
    return await newProduct;
  }

  async getAll() {
    await this.mongodb(this.url);
    return await ProductModel.find({}, { __v: false });
  }

  async getById(id: string) {
    await this.mongodb(this.url);
    const prodId = new mongoose.Types.ObjectId(id);
    return await ProductModel.findById(prodId);
  }

  async deleteById(id: string) {
    await this.mongodb(this.url);
    const prodId = new mongoose.Types.ObjectId(id);
    return await ProductModel.findByIdAndDelete(prodId);
  }

  async updateById(id: string, prod: ProductDTO) {
    await this.mongodb(this.url);
    const prodId = new mongoose.Types.ObjectId(id);
    await ProductModel.findByIdAndUpdate(prodId, prod);
    return prod;
  }
}
