import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
        })
    },[])
    return (
        <div>
            <Container>
                <Row>
                    {
                      orders.map(order=><ManageAllOrder
                      
                      order={order}
                      
                      
                      />)  
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrders;