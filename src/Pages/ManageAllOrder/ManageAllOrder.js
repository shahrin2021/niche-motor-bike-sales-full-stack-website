import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const ManageAllOrder = (props) => {
    const {name,_id, email, phone, address, singleProduct}= props.order
    return (
        <Col lg={4} md={6} sm={12} className='d-flex justify-content-center'>
        <Card style={{ width: '22rem',marginBottom:'30px' }}>
<Card.Img variant="top" style={{height:'200px'}} src={singleProduct?.img} />
<Card.Body>
<Card.Title>{singleProduct?.name}</Card.Title>
<Card.Text>
  {singleProduct?.discription.slice(0 ,50)}
</Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
<ListGroupItem>Name: {name}</ListGroupItem>
<ListGroupItem>Email:{email}</ListGroupItem>
<ListGroupItem>phone:{phone}</ListGroupItem>
<ListGroupItem>Address:{address}</ListGroupItem>
<ListGroupItem>Price : ${singleProduct?.price}</ListGroupItem>
<ListGroupItem>Review : {singleProduct?.review}</ListGroupItem>
    <ListGroupItem> Stock :  {singleProduct?.stock}</ListGroupItem>
</ListGroup>
<Card.Body>
<button onClick={()=>props.handleDelelte(_id)} className='btn btn-success'>Delete</button>
</Card.Body>
</Card>
    
    </Col>
    );
};

export default ManageAllOrder;