

import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Container} from "react-bootstrap";
import Cards from '../components/Cards'
import {IProduct} from "../interfaces/product";
export interface IStartPage {}

const StartPage: React.FunctionComponent<IStartPage> = (props) => {
    const [ products,setProducts ] = useState([])
    useEffect(() => {
        axios.request({
            url: `https://fakestoreapi.com/products/`,
            method: 'GET'
        })
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })
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