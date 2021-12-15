
import { IProduct } from "../product";
import { IUser } from '../auth'

interface IAddCart {
    type: 'ADD',
    payload: IProduct
}
interface ISubCart {
    type: 'SUB',
    payload: IProduct
}
interface ILoginCart {
    type: 'LOGIN',
    user: IUser,
    token: string
}

export type TCart = IAddCart | ISubCart | ILoginCart