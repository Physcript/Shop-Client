
import { IProduct } from "../product";

interface IAddCart {
    type: 'ADD',
    payload: IProduct
}
interface ISubCart {
    type: 'SUB',
    payload: IProduct
}

export type TCart = IAddCart | ISubCart