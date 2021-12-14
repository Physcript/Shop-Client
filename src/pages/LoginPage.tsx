import React, { useState,useContext } from 'react'

import {Button, Container, FormLabel} from "react-bootstrap";
import axios from 'axios'
import cartContext from "../Context/Cart/cart";
import { useNavigate } from 'react-router-dom'
export interface ILoginPage {}
const LoginPage = (props: ILoginPage) => {
    const AuthContext = useContext(cartContext)
    const Navi = useNavigate()
    const [ loginData,setLoginData ] = useState({
        email: '',
        password: ''
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name,value } = e.target
        setLoginData((val) => ({
            ...val,
            [name]:value
        }))
    }

    const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        axios.request({
            url: 'http://localhost:1337/api/login',
            method: 'POST',
            data: {
                email: loginData.email,
                password: loginData.password
            }
        })
            .then((res) => {
                const { user, token } = res.data.data
                AuthContext.cartDispatch({ type: 'LOGIN', payload: user, token: token })
                document.cookie = `token=${token}`
                Navi('/')

            })
            .catch((err) => {
                console.log(err.response)
            })

    }

    return (
        <div style = {{ height: '90vh' }} className = 'd-flex flex-column justify-content-center' >
            <Container className = '' style = {{ width: '300px' }}>
                <div className = 'd-flex flex-column mb-2'>
                    <FormLabel>Login</FormLabel>
                    <input
                        className = ''
                        type = 'text'
                        placeholder = 'Email'
                        name = 'email'
                        value = { loginData.email }
                        onChange = { onChange }
                    />
                    <input
                        type = 'password'
                        placeholder = 'password'
                        name = 'password'
                        value = { loginData.password }
                        onChange = { onChange }
                    />
                </div>
                <div className = 'd-flex flex-column '>
                    <Button className = 'btn-sm' onClick = { loginHandler }>Login</Button>
                    <a href = "#">Register</a>
                    <a href = "#">Forgot password</a>
                </div>
            </Container>
        </div>
    )
}

export default LoginPage