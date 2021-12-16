
import React, { useContext }  from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav} from 'react-bootstrap'
import cartContext from "../Context/Cart/cart";
export interface INavigation {}
const Navigation: React.FunctionComponent = (props) => {
    const AuthContext = useContext(cartContext)
    const Navi = useNavigate()

    const logoutHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        AuthContext.cartDispatch({ type:'LOGOUT' })
        Navi('/')
    }

    return(
        <div style = {{ height: '10vh' }}>
           <Navbar collapseOnSelect expand = 'lg' >
               <Container>
                   <Navbar.Brand>  <Link to = "/" className = "brand">ClothingMania</Link></Navbar.Brand>
                   <Navbar.Toggle aria-controls = 'response-navbar-nav'/>
                   { AuthContext.cartState.AUTH ? (
                           <Navbar.Collapse id = 'response-navbar-nav'>
                               <Nav className = 'ms-auto'>
                                   <Nav.Link>Welcome</Nav.Link>
                                   <Nav.Link>{ AuthContext.cartState.USER?.lastName }</Nav.Link>
                                   <Nav.Link onClick = { logoutHandler }>Log out</Nav.Link>
                                   <Nav.Link><i className="fas fa-shopping-cart"></i></Nav.Link>
                               </Nav>
                           </Navbar.Collapse>
                   ) : (
                       <Navbar.Collapse id = 'response-navbar-nav'>
                           <Nav className = 'ms-auto'>
                               <Nav.Link href = "/register">Register</Nav.Link>
                               <Nav.Link href = "/login">Login</Nav.Link>
                               <Nav.Link><i className="fas fa-shopping-cart"></i></Nav.Link>
                           </Nav>
                       </Navbar.Collapse>
                   )}
               </Container>
           </Navbar>
        </div>
    )
}

export default Navigation