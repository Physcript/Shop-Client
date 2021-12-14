
import React, { useContext }  from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import cartContext from "../Context/Cart/cart";
export interface INavigation {}
const Navigation: React.FunctionComponent = (props) => {
    const AuthContext = useContext(cartContext)
    return(
        <div style = {{ height: '10vh' }}>
           <Navbar collapseOnSelect expand = 'lg' >
               <Container>
                   <Navbar.Brand>ClothingMania</Navbar.Brand>
                   <Navbar.Toggle aria-controls = 'response-navbar-nav'/>
                   { AuthContext.cartState.AUTH ? (
                           <Navbar.Collapse id = 'response-navbar-nav'>
                               <Nav className = 'ms-auto'>
                                   <Nav.Link>Welcome</Nav.Link>
                                   <Nav.Link>{ AuthContext.cartState.USER?.lastName }</Nav.Link>
                                   <Nav.Link><i className="fas fa-shopping-cart"></i></Nav.Link>
                               </Nav>
                           </Navbar.Collapse>
                   ) : (
                       <Navbar.Collapse id = 'response-navbar-nav'>
                           <Nav className = 'ms-auto'>
                               <Nav.Link>Register</Nav.Link>
                               <Nav.Link>Login</Nav.Link>
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