import {TCart} from "../../interfaces/cart/reducer";
import {IAuthProps, IUser} from "../../interfaces/auth";
import {IProduct} from "../../interfaces/product";

const reducer = (state: IAuthProps, action: TCart): IAuthProps => {

    let item: IProduct | IUser = action.payload
    let items =  [ ...state.CART.cart ] ;


    switch ( action.type ) {
        case 'ADD':
            if (items.find(({id}) => id === action.payload.id)) {
                const ite = items.findIndex( ({id}) => id === action.payload.id )
                console.log(items[ite].quantity)
                items[ite].quantity = items[ite].quantity + 1
                console.log(items[ite])
            } else {
                action.payload.quantity = 1
                items.push(action.payload)
            }
            console.log(items)
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