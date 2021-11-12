import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../../image/logo (1).png'

const Header = () => {
  const {user,error ,handleSingOut, isLoading ,handleLoginGmailPassword} =useAuth();
  console.log(user)
  if(isLoading){
    return  (<div  style={{height:'100vh'}}className='d-flex justify-content-center align-items-center'>
    <Spinner animation="border" variant="danger" />
    </div>);
    
}
    return (
        <div>
             <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
      <img src={logo} alt="" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/product">Bikes</Nav.Link>
      <Nav.Link as={Link} to="/orderreview">My order</Nav.Link>
      <Nav.Link as={Link} to="manageorder">All order</Nav.Link>
      
    </Nav>
    {
      user.email && <h2 className="text-white">{user.name}</h2>
    }
    {
      user.email ? <Button onClick={handleSingOut}>Logout</Button>:<Nav.Link as={Link} to="/login">Login</Nav.Link>
    }
    </Navbar.Collapse>
    
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;