import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])
    return (
        <Container>
            <h2 className='text-center product-heading'>Best Adventure Tourer Bikes</h2>
            <Row>
                {
                   products.map(product=><Product 
                   key= {product.id}
                   product={product}
                   
                   ></Product>)
                }


            </Row>
        </Container>    
  
   
 

    );
};

export default Products;