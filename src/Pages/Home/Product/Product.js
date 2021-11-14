import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Product.css'

const Product = (props) => {
    const {img, name, stock,review, price,id ,_id}= props.product;
    const {admin}= useAuth()
    return (
        <Col lg={4}md={6} sm={12} className='d-flex justify-content-center'>
           <Card style={{ maxWidth: '22rem',marginBottom:'30px' }}>
  <Card.Img style={{height:'200px'}} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      <div className='d-flex justify-content-between mb-2'>
          <div> In Stock :{stock} </div>
          <div className='rating-icon'>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star "></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star-half-alt"></span>
          <span> {review}</span>
          
          </div>
      </div>
      <h6>Price : $ {price}</h6>
    </Card.Text>
   <div className='text-center'>
   <NavLink to={`product/${_id}`}>
   <Button className='btn btn-success me-3'>Buy Now</Button>
   </NavLink>

   {
      admin &&  <NavLink to={`/updateProduct/${_id}`}>
      <button className='btn btn-danger'>Update</button>
      </NavLink>
    }
  
   </div>
  </Card.Body>
</Card> 
        </Col>
    );
};

export default Product;