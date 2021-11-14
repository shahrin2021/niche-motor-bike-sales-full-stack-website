import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
             <Navbar  collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
      <img src={logo} alt="" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link style={{fontSize:'18px', color:'#fff'}} as={Link} to="/home">Home</Nav.Link>
      <Nav.Link style={{fontSize:'18px', color:'#fff'}} as={Link} to="/products">Bikes</Nav.Link>
      <Nav.Link style={{fontSize:'18px', color:'#fff'}} as={Link} to="/contact">Contact</Nav.Link>
     
      
     
      
    </Nav>
    {
      user.email && <p className="text-white m-0">{user?.email}</p>
    }
    {
      user.email && <Nav.Link style={{fontSize:'18px', color:'#fff'}} as={Link} to="/dashboard">Dashboard</Nav.Link>
    }

    {
      user.email ? <Button className='btn btn-warning' onClick={handleSingOut}>Logout</Button>:<NavLink  to="/login"><Button className='btn btn-danger'>Login</Button></NavLink>
    }
    </Navbar.Collapse>
    
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;