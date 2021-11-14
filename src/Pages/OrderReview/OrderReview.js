import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './OrderReview.css'

const OrderReview = () => {
    const [orders, setOrders] = useState([]);
    const {user}= useAuth();
    console.log(user.email)

    useEffect(()=>{
        fetch(`https://protected-island-07289.herokuapp.com/orders/${user.email}`)
        .then(res=>res.json())
        .then(data=> {
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
                const remaining = orders.filter(order=> order._id == id);
                setOrders(remaining)
                alert('successfully deleted')
            }
        })
    }

    const countOrder= orders.length;

    let total = 0;

    for(const order of orders){
        total= total+ order.singleProduct.price;
    }
        let tax = total * .2;

        let totalAmount = total + tax;
    return (
        <div>
            <Container> 
                <div className=' order-header my-5'>
                    <div>
                        <h2 className='order-heading'>My order</h2>
                    </div>
                    <div className='order'>
                <NavLink style={{fontSize:'18px', marginRight:'8px',textDecoration:'none' ,color:'#000'}} to='/home'>home</NavLink><span style={{fontSize:'20px', marginRight:'8px',color:'#000'}} >/</span><NavLink style={{fontSize:'18px', marginRight:'8px', textDecoration:'none',color:'#000' }}to='/product'>Poducts</NavLink>
            </div>
                </div>
                <div> 
                    <h5>Total Order: {countOrder} </h5>    
                    <div> 
                        <h3>You have to pay</h3>
                        <div>
                        <Table striped bordered hover>
                            
                            <tbody>
                                <tr>
                                <td>Total Amount (without tax)</td>
                                <td>$ {total}</td>
                              
                                
                                </tr>
                                <tr>
                                <td>Tax</td>
                                <td>$ {tax}</td>
                                </tr>
                               
                                <tr>
                                <td>Total Amount (with tax)</td>
                                <td>$ {totalAmount}</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                        </div>

                    </div>
                </div>
                <h3 style={{color:'#006eff'}}className='text-center my-5'>Your Booking products</h3>
            <Row>
                    
                {
                   orders.map(order=> <MyOrder handleDelelte={handleDelelte} key={order?.singleProduct?.id} order={order} ></MyOrder>) 
                }
                
            </Row>
            </Container>
        </div>
    );
};

export default OrderReview;