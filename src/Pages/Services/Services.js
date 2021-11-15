import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Service from '../service/Service';
import './Services.css'

const Services = () => {
    const {user , admin}= useAuth();
    // call all product 
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://protected-island-07289.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])
    return (<div>
         <div className='service-banner'>
                <div>
                    <NavLink to="/home" style={{textDecoration:'none' ,fontSize:'30px',color:'#fff',fontWeight:'bold'}}>Home</NavLink><span style={{ fontSize:'30px',fontWeight:'bold',color:'blanchedalmond', padding:'0 4px',display:'inline-block'}}>/</span><NavLink to="/products" style={{textDecoration:'none' ,fontSize:'30px',color:'#fff',fontWeight:'bold'}}>Service</NavLink>
                </div>
            </div>
        <Container>
           
        <h2 className='text-center product-heading'>Best Adventure Tourer Bikes</h2>
        <Row>
            {
               products.map(product=><Service 
               key= {product.id}
               product={product}  
               ></Service>
            
               )
              
            }


        </Row>
       </Container>
       </div>
    );
};

export default Services;