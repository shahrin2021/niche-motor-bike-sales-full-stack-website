import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
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
        <div className='d-flex justify-content-center align-items-center' style={{height:'90vh'}}>
             <Container>
            <div className="register-area ">
                <h3 >Please Register</h3>
                <Form onSubmit={onHandleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                onBlur={handleOnBlur}
                type="text"
                name="name"
                placeholder="your Name" />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                onBlur={handleOnBlur}
                type="email"
                name="email"
                placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password"
                name="password"
                onBlur={handleOnBlur}
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
            </div>
        </Container>
        </div>
    );
};

export default Register;