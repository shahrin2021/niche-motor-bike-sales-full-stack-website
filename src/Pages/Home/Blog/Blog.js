
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Blog = (props) => {
    const {name , img, discription,date}=props.blog
    return (
        <Col lg={4} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
            <Card style={{ maxWidth: '22rem',marginBottom:'30px' }}>
  <Card.Img style={{height:'200px'}} variant="top" src={img} />
  <Card.Body>
  <Card.Title>
    {date}
    <hr />
  
  </Card.Title>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {discription.slice(0,100)}
    </Card.Text>
    <Button className='btn btn-success' variant="primary">Read Now <i className="uil uil-arrow-right"></i></Button>
  </Card.Body>
</Card>
        </Col>
    );
};

export default Blog;