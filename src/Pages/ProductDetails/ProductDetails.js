import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import './ProductDetails.css'

const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct]= useState([]);
    const {user ,isLoading} = useAuth();
    const nameRef= useRef();
    const emailRef= useRef();
    const phoneRef= useRef();
    const addressRef= useRef();

    console.log(product)
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
            console.log(data)
        })
    },[id])



    const singleProduct= product.find(pb=>pb?._id == id)
console.log(singleProduct)

    const onSubmit = (e) => {
        let name= nameRef.current.value;
        let email = emailRef.current.value;
        let phone = phoneRef.current.value;
        let address= addressRef.current.value; 
       const orderDetails = {name:name, email:email, phone:phone,address:address , singleProduct:singleProduct}

       axios.post('http://localhost:5000/orders', orderDetails )
       .then(res=> {
           if(res.data.insertedId){
            alert('successfully user added')
            nameRef.current.value='';
            phoneRef.current.value='';
            addressRef.current.value='';
           }
           
        })
      
        e.preventDefault()
    }




    
    
   
    return (
    <Container className="mt-5">
        <Row>
            <Col lg={7}>
                <div>
                    <div className='text-center'>
                    <img src={singleProduct?.img} alt='bike'/>
                    </div>
                        <div>
                            <h4  className='text-center mt-2'>{singleProduct?.name}</h4>
                            <div className='preview'>
                            <h4 > Bike Preview </h4>
                            <p>{singleProduct?.discription.slice(0, 500)}</p>
                        
                        </div>
                    </div>
                        <div className="mt-3">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                              
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                          
                                <td>{singleProduct?.price}</td>
                                <td>{singleProduct?.stock}</td>
                                <td>{singleProduct?.review}</td>
                                </tr>
                              
                               
                            </tbody>
                        </Table>
                    </div>

                </div>
            </Col>
            <Col lg={5}>
            <div className='confirm-booking mt-4'>
          <div style={{maxWidth:'300px'}}>
          <h4 className="my-5">pleace confirn your order via fill the form</h4>
          </div>
          <form action="" onSubmit={onSubmit}>
              <div>
                  <input ref={nameRef} placeholder='Your name' className='w-100 mb-3'  type="text" name="" id=""  value={user.displayName} />
              </div>
              <div>
                  <input ref={emailRef} placeholder='Email'  className='w-100 mb-3'  type="email" name="" id="" value={user.email}/>
              </div>
             
              <div>
                  <input ref={addressRef} placeholder='Address'  className='w-100 mb-3'  type="text" name="" id="" />
              </div>

              <div>
                  <input ref={phoneRef} placeholder='Phone Number' className='w-100 mb-3'  type="number" name="" id="" />
              </div>
             
             <button className='btn btn-success'>Place Order</button>
              
          </form>
              </div>


            </Col>
        </Row>
    </Container>
    );
};

export default ProductDetails;