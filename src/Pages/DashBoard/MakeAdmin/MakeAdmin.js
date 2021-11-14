import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Container, Form } from 'react-bootstrap';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail]= useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur= e=>{
        const value = e.target.value;
        setEmail(value)
        console.log(value)
    }

    const handleSubmit = e=>{
        const user={email};
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount ){
                setSuccess(true)
                
            }
            
            console.log(data)
        })
        e.preventDefault()
    }

    return (
        <Container>
            <h3 className='text-center my-5'>Create an Admin </h3>
        <div className="d-flex justify-content-center">
            <div className='admin-form'>
                <Form style={{textAlign:'center'}} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 d-inline-block w-100" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleOnBlur} type="email" placeholder="Email" />
                    </Form.Group>
                    <Button className='btn btn-danger'  type="submit" variant="primary" > Make Admin</Button>
                </Form>
             
        </div>

        <div className='text-center'>
            {
               success && <Alert  > Admin successfully addded</Alert>
           }
        </div>
    </div>
    </Container>
    );
};

export default MakeAdmin;