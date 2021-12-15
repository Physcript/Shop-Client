

import React, { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import {Container} from "react-bootstrap";
import Cards from '../components/Cards'
import {IProduct} from "../interfaces/product";
import cartContext from "../Context/Cart/cart";
export interface IStartPage {}

const StartPage: React.FunctionComponent<IStartPage> = (props) => {

    const AuthContext = useContext(cartContext)
    const [ products,setProducts ] = useState([])
    const [ loaded,setLoaded ] = useState(true)

    useEffect(() => {
        if(loaded) {
            setLoaded(false)
            fetch(`https://fakestoreapi.com/products`).then((res) =>
                res.json()
            )
                .then(json => {
                    setProducts(json)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        if(document.cookie.split('=')[1]) {
            const token = document.cookie.split('=')[1]
            fetch('http://localhost:1337/api/auth', {
                method: 'GET',
                credentials: 'include'
            })
                .then((res) => {
                    if (res.ok) {
                        return res.json()
                    }
                    else {
                        throw new Error('Unauthorized')
                    }
                })
                .then ((json) => {
                    AuthContext.cartDispatch({ type: 'LOGIN', user: json.data.user , token: json.data.token })
                })
                .catch((err) => {
                    document.cookie = 'token='

                })

        }
    },[])
    return (
        <div>
            <Container>
                <div className = "m-5 d-flex">Mens Section</div>
                    <div className = 'd-flex justify-content-center pt-3 gap-3 flex-wrap'>
                        { products.map( (val:IProduct) => {
                            if(val.category === `men's clothing`) {
                                return (
                                    <Cards key={val.id} props={val}/>
                                )
                            }
                        }) }
                    </div>

                <div className = 'm-5'>Ladies Section</div>
                <div className = 'd-flex justify-content-center pt-3 gap-3 flex-wrap'>
                    { products.map( (val:IProduct) => {
                        if(val.category === `women's clothing`) {
                            return (
                                <Cards key={val.id} props={val}/>
                            )
                        }
                    }) }
                </div>
            </Container>
            <div className = 'bg-dark' style = {{ height: '20vh' , marginTop: '20px' }}></div>
        </div>
    )
}

export default StartPage