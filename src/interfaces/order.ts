
import { IProduct } from './product'

export interface IOrder {
  _id: string,
  cart: IProduct[]
  count: number,
  total: number,
  userId: string,
  status: string,
  createdAt: Date,
  updatedAt: Date
}
