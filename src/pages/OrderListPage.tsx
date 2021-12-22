
import React,{ useState,useEffect } from 'react'
import { Container ,Modal, Button } from 'react-bootstrap'
import { IOrder } from '../interfaces/order'
import { IProduct } from '../interfaces/product'

export interface IOrderListPage {}

const OrderListPage = ( props: IOrderListPage ) => {

  const [ order,setOrder ] = useState([])
  const [ modalShow, setModalShow] = React.useState(false);
  const [ data,setData ] = useState([])


  function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      { ...props }
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <label>Order # </label>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        { props.props.map( (val:any) => {
          return (
            <div className = 'd-flex gap-2 flex-row'>
            <img className = '' src = { val.image } style = {{ width: '25px', height: '25px' }} ></img>
            <label className = 'w-50'>{ val.title }</label>
            <label className = '' style = {{ marginRight: '10px' }}>Pcs: { val.quantity } </label>
            <label>₱ { val.price * val.quantity.toFixed(2) } </label>
            </div>
          )
        } ) }

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }

  const showMyModal = (val: any) => {
    setModalShow(true)
    setData(val)
  }


  useEffect(() => {
    const url = 'http://localhost:1337/api/order'

    const request = new Request(url,{
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    })

    fetch(request).then ((res) => {
      if(res.status === 200) {
        res.json().then((json) => {
          setOrder(json.data)
        })
      }else {
        res.json().then((json) => {
          console.log(json)
        })
      }
    })
  },[])



  return (
    <div>
      <Container>
        <label>Order list</label>
        <div className = 'd-flex flex-column gap-2'>

        { order.map((val: IOrder) => {
          return (
          <div key = { val._id }>
            <div onClick={() => showMyModal(val.cart) } className = 'd-flex flex-column w-25' style = {{ padding: '10px', border: '1px solid black' }}>
              <label>Order #: { val._id }</label>
              <label>Status: { val.status } </label>
              <label>Total: P: { val.total } </label>
            </div>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              props= { data }
            />
          </div>
          )
        }) }

        </div>
      </Container>
    </div>
  )
}


export default OrderListPage
