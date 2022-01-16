
import React, {ChangeEvent, useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export interface RegisterPage {}

const RegisterPage = (props: RegisterPage) => {
    const [ success,setSuccess ] = useState('')
    const [ notSuccess,setNotSuccess ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [ register,setRegister ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const { name,value } = e.target
        setRegister((val) => ({
            ...val,
            [name]:value
        }))
    }

    const registerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const myData = {
            firstName: register.firstName,
            lastName: register.lastName,
            email: register.email,
            password: register.password,
            confirmPassword: register.confirmPassword
        }

        const data = JSON.stringify(myData)

        const url = 'https://ts-shop.herokuapp.com/api/register'

        const request = new Request(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })

        fetch(request).then((val) => {
            if(val.status === 200) {
                val.json().then((json) => {
                    setNotSuccess({
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    })
                    setRegister({
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    })


                    setSuccess(`Register Succes check your email: ${json.data.email}`)

                })
            }else {
                val.json().then((json) => {
                    setSuccess('')
                    setNotSuccess(json.error)
                })
            }
        })

    }

    return (
        <div className = 'd-flex flex-column justify-content-center' style = {{ height: '90vh' }} >
            <Container className = ''>
                <div className = 'w-50 mx-auto'>
                    <div className = 'd-flex flex-column'>
                        <label className = 'text-success'> { success } </label>
                        <label className = 'text-danger'> { notSuccess.email } </label>
                        <label className = 'text-danger'> { notSuccess.firstName } </label>
                        <label className = 'text-danger'> { notSuccess.lastName } </label>
                        <label className = 'text-danger'> { notSuccess.password } </label>
                        <label className = 'text-danger'> { notSuccess.confirmPassword } </label>
                        <label className = 'mt-2 mb-2'>Register</label>
                    </div>
                    <div className = 'd-flex flex-column gap-2 form-group mb-2'>
                        <Row>
                            <Col className = 'd-flex gap-2 gap-me '>
                                <input
                                    className = 'form-control'
                                    placeholder = 'Firstname'
                                    name = 'firstName'
                                    onChange = { onChange }
                                    value = { register.firstName }
                                />
                                <input
                                    className = 'form-control'
                                    placeholder = 'Lastname'
                                    name = 'lastName'
                                    onChange = { onChange }
                                    value = { register.lastName }
                                />
                            </Col>
                        </Row>

                        <input
                            className = 'form-control'
                            placeholder = 'Email'
                            name = 'email'
                            onChange = { onChange }
                            value = { register.email }
                        />
                        <input
                            className = 'form-control'
                            placeholder = 'Password'
                            name = 'password'
                            type = 'password'
                            onChange = { onChange }
                            value = { register.password }
                        />
                        <input
                            type = 'password'
                            className = 'form-control'
                            placeholder = 'Confirm Password'
                            name = 'confirmPassword'
                            onChange = { onChange }
                            value = { register.confirmPassword }
                        />

                    </div>
                    <div>
                        <button onClick = { registerHandler } className = 'btn btn-primary'>Register</button>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default RegisterPage