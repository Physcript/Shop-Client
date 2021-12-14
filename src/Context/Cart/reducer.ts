
import { TCart } from "../../interfaces/cart/reducer";
import {IAuthProps, IUser} from "../../interfaces/auth";
import {IProduct} from "../../interfaces/product";

const reducer = (state: IAuthProps, action: TCart): IAuthProps => {
    let item: IProduct | IUser | undefined = undefined

    if ("payload" in action) {
        item = action?.payload
    }

    let items =  [...state.CART.cart ] ;


    switch ( action.type ) {
        case 'ADD':

            if(items.find( ({ id }) => id === action.payload.id )) {

                let index = items.findIndex( ({id}) => id === action.payload.id )
                items[index].quantity = items[index].quantity + 1

            }else {
                if ("quantity" in item!) {
                    item!.quantity = 1
                }
                items.push(<IProduct>item)
            }

            return {
                ...state,
                CART: {
                    cart: items,
                    count: 0,
                    total: 0
                }
            }
        case 'LOGIN':
            return {
                ...state,
                TOKEN: action.token,
                USER: action.payload,
                AUTH: true
            }
        default:
            return {
                ...state
            }

    }
}

export default reducer