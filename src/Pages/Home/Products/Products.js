import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Product from '../Product/Product';

const Products = () => {
   
    const {user ,admin}= useAuth()
    // call all product 
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://protected-island-07289.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])
     
   const specificProduct= products.slice(0,6)
    
    return (
        <div>
        <Container>
            <h2 className='text-center product-heading'>Best Adventure Tourer Bikes</h2>
            <Row>
                {
                   specificProduct.map(product=><Product 
                   key= {product.id}
                   product={product}  
                   ></Product>
                
                   )
                  
                }


            </Row>

        </Container>  

          
  
        </div>
 

    );
};

export default Products;