

import React, { useContext } from 'react'
import cartContext from "../Context/Cart/cart";
import { useNavigate } from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'
import { IProduct } from '../interfaces/product'

const Cards = (props: { props: IProduct }) =>  {
    const CartContext = useContext(cartContext)
    const Navi = useNavigate()

    const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if( CartContext.cartState.AUTH ){
            CartContext.cartDispatch({type: 'ADD',payload: props.props })
        }else {
            Navi('/login')
        }
    }

    const changePage = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        Navi(`/product/${props.props.id}` , { state: props.props } )
    }

    return (
        <Card style = {{ width: '200px', padding: '10px' }}>
            <Card.Img
                src = { props.props.image }
                className = 'img-fluid'
                style = {{ width: '200px',height: '200px' }}
            />
            <Card.Body className = 'd-flex flex-column'>
                <Card.Title style = {{ fontSize: '14px' }} onClick = { changePage }>{props.props.title}</Card.Title>
                <Card.Text style = {{ fontSize: '21px' }}>${props.props.price}</Card.Text>
                <Button onClick = { addHandler } className = 'mt-auto'>Add to cart</Button>

            </Card.Body>
        </Card>
    )
}
export default Cards