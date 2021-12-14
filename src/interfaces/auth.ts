
import {ICartProps, InitialCart} from "./cart/cart";

export interface IAuthProps {
    USER: IUser | null,
    TOKEN: string,
    AUTH: boolean
    CART: ICartProps
}

export const initialAuth = {
    USER: null,
    TOKEN: '',
    AUTH: false,
    CART: InitialCart
}

export interface IUser {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    verified: string,
    createdAt: Date,
    updatedAt: Date
}

