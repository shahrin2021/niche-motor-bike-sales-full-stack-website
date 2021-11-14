import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://protected-island-07289.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
        })
    },[]);

    const handleDelelte= (id)=>{
        const url = `https://protected-island-07289.herokuapp.com/orders/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount> 0){
                const remaining = orders.filter(order=> order._id !== id);
                setOrders(remaining)
                alert('successfully deleted')
            }
        })
    }

   

    return (
        <div>
            <Container>
            <div className=' order-header my-5'>
                    <div>
                        <h2 className='order-heading'>Manage product</h2>
                    </div>
                    <div className='order'>
                <NavLink style={{fontSize:'18px', marginRight:'8px',textDecoration:'none' ,color:'#000'}} to='/home'>home</NavLink><span style={{fontSize:'20px', marginRight:'8px',color:'#000'}} >/</span><NavLink style={{fontSize:'18px', marginRight:'8px', textDecoration:'none',color:'#000' }}to='/product'>Poducts</NavLink>
            </div>
                </div>

                <h2 style={{color:'#006eff'}} className='text-center mb-5'>Manage All Products </h2>
                <Row>
                    {
                      orders.map(order=><ManageAllOrder
                      key={order._id}
                      order={order}
                      handleDelelte={handleDelelte}
                      
                      />)  
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrders;