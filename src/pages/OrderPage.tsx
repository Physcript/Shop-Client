
import { useContext,useState } from 'react'
import { Container } from 'react-bootstrap'
import authContext from '../Context/Cart/cart'
import { IProduct } from '../interfaces/product'
export interface IOrderPage {}
const OrderPage = (props: IOrderPage) => {
  const AuthContext = useContext(authContext)
  const CART =  AuthContext.cartState.CART.cart || []
  console.log(CART)
  return (
    <Container>
      <div className = 'd-flex flex-column gap-5' >

        <div className = 'w-75'>
          <div className = 'd-flex gap-2 flex-column'>
            { CART.map((val) => {
              return (
                <div className = 'd-flex gap-2 flex-row'>
                  <img className = '' src = { val.image } style = {{ width: '50px', height: '50px' }} ></img>
                  <label className = 'w-50'>{ val.title }</label>
                  <label className = 'flex-fill'>Pcs: { val.quantity } </label>
                  <label>₱ { val.price * val.quantity } </label>
                </div>
              )
            }) }
            <div className = 'ms-auto'>
              <label className = 'h2'>Total: ₱ { AuthContext.cartState.CART.total} </label>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}


export default OrderPage
