
import { ICartProps } from "../../interfaces/cart/cart";
import { TCart } from "../../interfaces/cart/reducer";
import { IProduct } from "../../interfaces/product";
import {IAuthProps} from "../../interfaces/auth";

const reducer = (state: IAuthProps, action: TCart): IAuthProps => {
    let item = action.payload
    let items =  [...state.CART.cart ] ;


    switch ( action.type ) {
        case 'ADD':

            if(items.find( ({ id }) => id === action.payload.id )) {

                let index = items.findIndex( ({id}) => id === action.payload.id )
                items[index].quantity = items[index].quantity + 1

            }else {
                item.quantity = 1
                items.push(item)
            }

            return {
                ...state,
                CART: {
                    cart: items,
                    count: 0,
                    total: 0
                }
            }
        default:
            return {
                ...state
            }

    }
}

export default reducer