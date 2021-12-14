
import { IProduct } from '../product'
import { IAuthProps } from '../auth'
import {TCart} from "./reducer";

export interface ICartProps {
    cart: IProduct[],
    count: number,
    total: number
}

export const InitialCart = {
    cart: [],
    count: 0,
    total: 0
}

export interface ICartContext {
    cartState: IAuthProps,
    cartDispatch: React.Dispatch<TCart>
}

