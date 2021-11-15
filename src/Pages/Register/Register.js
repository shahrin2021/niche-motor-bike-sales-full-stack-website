import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Container, Form } from 'react-bootstrap';
import { NavLink ,useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

import './Register.css'

const Register = () => {
    const [loginData , setLoginData]= useState({})
    const {error , isLoading, registerUser}=useAuth();
    const history= useHistory()
    const handleOnBlur = e=>{
        const field= e.target.name;
        const value= e.target.value;
        const newLoginData= {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(value)

    }

    console.log(loginData)

    const onHandleSubmit= e =>{
        console.log(loginData)
        registerUser(loginData.email, loginData.password,loginData.name ,history )
        e.preventDefault()
    }
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:'90vh', marginTop:'80px'}}>
             <Container>
            <div className="register-area ">
                <h3 >Please Register</h3>
                <Form onSubmit={onHandleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control 
                onChange={handleOnBlur}
                type="text"
                name="name"
                placeholder="your Name" />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                onChange={handleOnBlur}
                type="email"
                name="email"
                placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password"
                name="password"
                onChange={handleOnBlur}
                placeholder="Password" />
            </Form.Group>
                

            <Button className='btn btn-success' style={{margin:'0 auto',display:'block'}}variant="primary" type="submit">
               Register
            </Button>
                    <div className='text-center mt-3'>
                    <NavLink style={{textDecoration:'none', fontSize:"20px",color: '#000'}}  to='/login'>
                Or / Login    
            </NavLink>
                    </div>
                    
            </Form> 

            {
                error && <div className='mt-2'>
                  <Alert >{error}</Alert>
                </div>
            }
            </div>
        </Container>
        </div>
    );
};

export default Register;