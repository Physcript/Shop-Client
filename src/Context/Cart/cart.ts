


import React, { createContext } from 'react'
import {ICartContext} from "../../interfaces/cart/cart";
import { initialAuth } from '../../interfaces/auth'

const cartContext = createContext<ICartContext>({
    cartState: initialAuth,
    cartDispatch: () => {}
})

export default cartContext
export const CartContextProvider = cartContext.Provider
export const CartContextConsumer = cartContext.Consumer