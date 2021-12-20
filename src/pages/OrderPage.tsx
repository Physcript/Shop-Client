
import React, { useContext,useState } from 'react'
import { Container } from 'react-bootstrap'
import authContext from '../Context/Cart/cart'
import { IProduct } from '../interfaces/product'
export interface IOrderPage {}
const OrderPage = (props: IOrderPage) => {
  const AuthContext = useContext(authContext)
  const CART =  AuthContext.cartState.CART.cart || []

  const addCart = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const removeCart = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  return (
    <Container>
      <div className = 'd-flex flex-column gap-5 mt-1' >
        <h2>Cart List</h2>
        <div className = 'w-100'>
          <div className = 'd-flex gap-2 flex-column'>
            { CART.map((val) => {
              let total = val.price * val.quantity
              return (
                <div className = 'd-flex gap-2 flex-row'>
                  <img className = '' src = { val.image } style = {{ width: '50px', height: '50px' }} ></img>
                  <label className = 'w-50'>{ val.title }</label>
                  <label className = '' style = {{ marginRight: '10px' }}>Pcs: { val.quantity } </label>
                  <div className = 'd-flex gap-2'>
                    <label
                      onClick = { () => ( AuthContext.cartDispatch({ type: 'ADD', payload: val }) ) }
                    ><i className="fas fa-plus translate-middle bg-white" style = {{ color: 'green', fontSize: '13px' }}></i></label>
                    <label
                      onClick = { () => ( AuthContext.cartDispatch({ type: 'SUB', payload: val }) ) }
                    ><i className="fas fa-minus translate-middle bg-white" style = {{ color: 'red', fontSize: '13px' }}></i></label>
                  </div>
                  <label className = 'flex-fill'> </label>
                  <label>₱ { total.toFixed(2) } </label>
                </div>
              )
            }) }
            <div className = 'ms-auto d-flex gap-5 '>
              <label className = 'h2'>Total: ₱ { AuthContext.cartState.CART.total} </label>
              <button className = 'btn btn-primary'>Confirm Order</button>
            </div>

          </div>
        </div>
      </div>
    </Container>
  )
}


export default OrderPage
