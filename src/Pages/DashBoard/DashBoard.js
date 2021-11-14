import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Offcanvas, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './DashBoard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import OrderReview from '../OrderReview/OrderReview';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AdminRoute from '../PrivateRoute/AdminRoute/AdminRoute';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';


const DashBoard = () => {
    const [show, setShow] = useState(false);
    const {user,admin,isLoading ,handleSingOut} = useAuth();
    let { path, url } = useRouteMatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    if(!admin){
        return  (<div  style={{height:'100vh'}}className='d-flex justify-content-center align-items-center'>
        <Spinner animation="border" variant="danger" />
        </div>);
        
    }
    return (
        <div>
    
    <Container>
        <div >
      <div className='d-flex justify-content-between align-items-center dashboard-header'>
      <div>
          <Button variant="primary" onClick={handleShow}>
          <i className="uil uil-bars dash-icon "></i>
      </Button>
          </div>
          <div className='dash-heading'>
              <h5>DASHBOARD</h5>
          </div>
        
      </div>

      <Offcanvas style={{width:'240px'}} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>DASHBOARD</Offcanvas.Title>
          <h6>{user.displayName}</h6>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div>
         <NavLink style={{textDecoration:'none',fontSize:'20px',color:'#000'}} to='/home'> <i className="uil uil-home me-2"></i>Home</NavLink>
         </div>
         <div>
         <NavLink style={{textDecoration:'none',fontSize:'20px',color:'#000'}} to={`${url}/myorder`}> <i class="uil uil-shop me-2"></i>My Order</NavLink>
         </div>
         <div>
         <NavLink style={{textDecoration:'none',fontSize:'20px',color:'#000'}} to={`${url}/pay`}> <i class="uil uil-shopping-cart-alt me-2"></i>Pay</NavLink>
         </div>
         <div>
         <NavLink style={{textDecoration:'none',fontSize:'20px',color:'#000'}} to={`${url}/review`}> <i className="uil uil-message me-2"></i>Review us</NavLink>
         </div>
        
         {
             admin && <div>

                 <div>
                     <NavLink style={{textDecoration:'none',fontSize:'20px',color:'#000'}} to={`${url}/manageOrder`}> <i className="uil uil-airplay me-2"></i>Manage Order</NavLink>
                 </div>
                 <div>
                     <NavLink style={{textDecoration:'none',fontSize:'20px',color:'#000'}} to={`${url}/makeadmin`}> <i className="uil uil-house-user me-2"></i>Make Admin</NavLink>
                 </div>
                 <div>
                     <NavLink style={{textDecoration:'none',fontSize:'20px',color:'#000'}} to={`${url}/addproduct`}> <i className="uil uil-swatchbook me-2"></i>Add Product</NavLink>
                 </div>

                 <div className='mt-3'> 

                    <Button className='btn btn-danger dashBtn' variant='containt' onClick={handleSingOut}> <i className="uil uil-signout"></i>Logout</Button>
                </div>


                 </div>
         }
        </Offcanvas.Body>
      </Offcanvas>
      </div>

      <div>
      <Switch>
        <Route exact path={path}>
        <OrderReview></OrderReview>
        </Route>
        <Route path={`${path}/myorder`}>
        <OrderReview></OrderReview>
        </Route>
        <Route path={`${path}/pay`}>
        <Pay></Pay>
        </Route>
        <Route path={`${path}/review`}>
        <AddReview></AddReview>
        </Route>
        <AdminRoute path={`${path}/manageOrder`}>
        <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/makeadmin`}>
        <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
        <AddProduct></AddProduct>
        </AdminRoute>
      </Switch>
      </div>

    
   


    </Container>

  
        </div>
    );
};

export default DashBoard;