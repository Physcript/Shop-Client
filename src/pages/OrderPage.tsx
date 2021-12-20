
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import authContext from '../Context/Cart/cart'
export interface IOrderPage {}
const OrderPage = (props: IOrderPage) => {
  const AuthContext = useContext(authContext)
  console.log(AuthContext.cartState)
  return (
    <Container>
      <div className = 'd-flex flex-column gap-5' >

        <div className = 'w-75'>
          <div className = 'd-flex gap-5'>
            <img className = '' src = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' style = {{ width: '50px', height: '50px' }} ></img>
            <label className = 'w-50 flex-fill'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</label>
            <label>Pcs: 3</label>
            <label>23.22$</label>
          </div>
        </div>
      </div>
    </Container>
  )
}


export default OrderPage
