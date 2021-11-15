import { TextField } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Container, Form } from 'react-bootstrap';
import { NavLink ,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './login.css'

const Login = () => {
    const [loginData , setLoginData]= useState({})
    const {user,error , isLoading ,handleLoginGmailPassword,singInWithGoogle} =useAuth();
    const history = useHistory();
    const location= useLocation()
    const handleOnBlur = e=>{
        const field= e.target.name;
        const value= e.target.value;
        const newLoginData= {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(value)

    }

    const handleGoogleLogin = ()=>{
        singInWithGoogle(location,history)
    }

    const onHandleSubmit= e =>{
        console.log(loginData)
        handleLoginGmailPassword(loginData.email, loginData.password , location, history)
        e.preventDefault()
    }
    return (
    <div className="justify-content-center align-items-center d-flex margin-top" style={{height:'90vh', marginTop:'80px'}}>
        <Container>
            <div className="login-area ">
                <h3>Please login</h3>
                <Form onSubmit={onHandleSubmit}>
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
                Login
            </Button>
                    <div className='text-center mt-3'>
                    <NavLink style={{textDecoration:'none', fontSize:"20px",color: '#000'}}  to='/register'>
                Or / Register Now     
            </NavLink>

           <div className='mt-3'>
           <Button onClick={handleGoogleLogin} className='btn btn-warning'>Signin With Google</Button>
           </div>
                    </div>
                    
            </Form> 
            {
                error && <div className='mt-2'>
                  <Alert >
                    {error}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
                </div>
            }
            </div>
        </Container>
     </div>
    );
};

export default Login;