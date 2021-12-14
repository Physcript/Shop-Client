
import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
export interface INavigation {}
const Navigation: React.FunctionComponent = (props) => {
    return(
        <div style = {{ height: '10vh' }}>
           <Navbar collapseOnSelect expand = 'lg' >
               <Container>
                   <Navbar.Brand>ClothingMania</Navbar.Brand>
                   <Navbar.Toggle aria-controls = 'response-navbar-nav'/>
                   <Navbar.Collapse id = 'response-navbar-nav'>
                       <Nav className = 'ms-auto'>
                           <Nav.Link>Register</Nav.Link>
                           <Nav.Link>Login</Nav.Link>
                           <Nav.Link><i className="fas fa-shopping-cart"></i></Nav.Link>
                       </Nav>
                   </Navbar.Collapse>
               </Container>
           </Navbar>
        </div>
    )
}

export default Navigation