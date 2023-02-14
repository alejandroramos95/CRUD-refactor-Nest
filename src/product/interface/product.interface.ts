import { Types } from 'mongoose';

export interface ProductInterface {
  title: String;
  price: String;
  thumbnail: String;
  _id: Types.ObjectId;
}
