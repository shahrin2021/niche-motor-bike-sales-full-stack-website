import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const OrderReview = () => {
    const [orders, setOrders] = useState([]);
    const {user}= useAuth();
    console.log(user.email)

    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res=>res.json())
        .then(data=> {
            setOrders(data)
        })
    },[])
    return (
        <div>
            <Container>
            <Row>
                    
                {
                   orders.map(order=> <MyOrder key={order?.singleProduct?.id} order={order} ></MyOrder>) 
                }
                
            </Row>
            </Container>
        </div>
    );
};

export default OrderReview;