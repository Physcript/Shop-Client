
import React,{ useState } from 'react'
import { Container,Button } from 'react-bootstrap'

export interface IAdminPage {}
const AdminPage = (props: IAdminPage) => {
  const [ password,setPassword ] = useState({
    password: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name,value } = e.target
    setPassword((val) => ({
      ...val,
      [name]: value
    }))
  }

  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const myData = {
      password: password.password
    }
    const data = JSON.stringify(myData)
    const url = 'http://localhost:1337/api/loginadmin'
    const request = new Request(url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: data
    })

    fetch(request).then((res) => {
        if(res.status === 200){
          res.json().then((val) => {
            console.log(val)
          })
        }else{
          res.json().then((val) => {
            console.log(val)
          })
        }
    })

  }


  return (
    <div>
      <Container>
        <div className = 'd-flex justify-content-center align-items-center' style = {{ height: '90vh' }}>
          <div className = 'd-flex flex-column gap-2'>
            <label>Admin Panel</label>
            <input
              type = 'password'
              placeholder = 'Password'
              name = 'password'
              value = { password.password }
              onChange = { onChange }
            />
            <Button className = 'btn btn-sm w-50'
              onClick = { loginHandler }
            >
              Admin
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AdminPage
