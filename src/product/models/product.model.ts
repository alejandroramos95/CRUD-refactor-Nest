import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  thumbnail: { type: String, required: true },
});

export const ProductModel = model('product', productSchema);
