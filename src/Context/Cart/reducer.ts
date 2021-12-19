import {TCart} from "../../interfaces/cart/reducer";
import {IAuthProps, IUser} from "../../interfaces/auth";
import {IProduct, InitalProduct} from "../../interfaces/product";

const reducer = (state: IAuthProps, action: TCart): IAuthProps => {
    let item: IProduct = InitalProduct
    let user = null
    let total: any = 0
    let count = 0

    if ("payload" in action) {
        item = action.payload
    }
    if ("user" in action) {
        user = action.user
    }

    let items: IProduct[] = [ ...state.CART.cart ] ;




    switch ( action.type ) {
        case 'ADD':

            if ( items.find( ({id}) => id === item.id ) ) {
                const index = items.findIndex( ({id}) => id === item.id )
                items[index].quantity++

            } else {

                item.quantity = 1
                items.push(item)

            }
            for(const price of items){
                total += (price.price * price.quantity)
                count++
            }

            return {
                ...state,
                CART: {
                    cart: items,
                    count,
                    total: total.toFixed(2)
                }
            }

        case 'LOGIN':
            return {
                ...state,
                TOKEN: action.token,
                USER: action.user,
                AUTH: true,
                CART: {
                    cart: [],
                    count: 0,
                    total: 0
                }
            }
        case 'LOGOUT':
            return {
                ...state,
                TOKEN: '',
                AUTH: false,
                CART: {
                    cart: [],
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