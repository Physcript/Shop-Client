
import React, { useContext,useState } from 'react'
import { Container } from 'react-bootstrap'
import authContext from '../Context/Cart/cart'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../interfaces/product'

export interface IOrderPage {}
const OrderPage = (props: IOrderPage) => {
  const Navi = useNavigate()
  const AuthContext = useContext(authContext)
  const CART =  AuthContext.cartState.CART.cart || []

  const orderHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const sendData = {
      cart: CART,
      count: AuthContext.cartState.CART.count,
      total: AuthContext.cartState.CART.total,
      userId: AuthContext.cartState.USER!._id
    }
    const data = JSON.stringify(sendData)
    const url = 'https://ts-shop.herokuapp.com/api/order'
    const token = document.cookie.split("=")[1]
    const request = new Request(url,{ 
      method: 'POST',
      headers: { 'Content-Type': 'application/json', token },
      credentials: 'include',
      body: data
    })

    fetch(request).then((res) =>{
      if(res.status === 200 ) {
        res.json().then((json) => {
          AuthContext.cartDispatch({type: 'RESET'})
          console.log(json)
        })
      } else {
        res.json().then(() => {
          AuthContext.cartDispatch({type: 'RESET'})
          Navi('/login')
        })
      }
    })

  }

  return (
    <Container>
      <div className = 'd-flex flex-column gap-5 mt-1' >
        <h2>Cart List</h2>
        <div className = 'w-100'>


        { CART.length === 0 ? (
          <div>
            <label> Empty Cart </label>
          </div>
        ) : (

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
              <button className = 'btn btn-primary' onClick = { orderHandler }>Confirm Order</button>
            </div>

          </div>
          ) }

        </div>
      </div>
    </Container>
  )
}


export default OrderPage
