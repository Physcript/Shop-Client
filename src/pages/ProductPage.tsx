
import React, { useState,useEffect,useContext } from 'react'
import authContext from '../Context/Cart/cart'
import { useLocation, useParams } from 'react-router-dom'
import { IProduct,InitalProduct } from "../interfaces/product";
import { Container,Row,Col } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


export interface IProductPage {}

const ProductPage = ( props:IProductPage ) => {

    const AuthContext = useContext(authContext)
    const Navi = useNavigate()
    const [ product, setProduct ] = useState<IProduct>(InitalProduct)
    const [ error,setError ] = useState('')
    const { productID } =  useParams()
    const location = useLocation()

    const findProduct = async () => {
        const url = 'http://localhost:1337/api/one-product'
        const p_id = {
            id : productID
        }
        const data = JSON.stringify(p_id)
        const request = new Request(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:data
        })
        fetch(request).then((val) => {
            if(val.status === 200){
                val.json().then((json) => {
                    setProduct(json.data)
                })
            }else {
                val.json().then((json) => {
                    setError('Product Not found')
                })
            }
        })
    }

    const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      if( AuthContext.cartState.AUTH ){
          AuthContext.cartDispatch({type: 'ADD',payload: product })
      }else {
          Navi('/login')
      }
    }

    const checkOut = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      Navi('/order')
    }

    useEffect(() => {
        if(location.state !== null) {
            setProduct((location.state))
        }else {
            findProduct()
        }
    },[])

    return (
        <div className = 'mt-5' >
            <Container>
                <Row>
                    <Col md = { 12 } lg = { 8 } >
                        <div className = 'd-flex align-items-center'>
                            <img src = { product.image } className = 'w-50'  />
                            <div className = 'p-3'>
                                <h2>{ product.title }</h2>
                                <h5>Rating: { product.rating.rate }</h5>
                                <hr></hr>
                                <div>
                                    <h1>₱{ product.price }</h1>
                                    <div className = 'd-flex flex-row gap-2' >
                                        <button
                                          className = 'btn btn-primary'
                                          onClick = { addToCart }
                                        >Add to Cart</button>
                                        <button
                                          className = 'btn btn-primary'
                                          onClick = { checkOut }
                                        >Check Out
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md = { 12 } lg = { 4 } className = ' d-flex flex-column justify-content-center '>
                        <div>
                            <label><b>Comment</b></label>
                            <hr></hr>
                            <div>
                                <label>Example</label>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div>
                                <label>Example</label>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                        </div>

                    </Col>
                    <Col>
                        <div className = 'mt-5  '>
                            <label><b>Description</b></label>
                            <h5>{ product.description }</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className = 'bg-dark' style = {{ height: '20vh' , marginTop: '20px' }}></div>
        </div>
    )
}

export default ProductPage
