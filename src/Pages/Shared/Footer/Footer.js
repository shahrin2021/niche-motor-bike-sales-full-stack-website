import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../image/logo (1).png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-area'>
            <Container>
                <Row>
                    <Col lg={5} md={5} sm={12}>
                        <div className='mb-3'>
                            <div className='mb-3'>
                                <img src={logo} alt="" />
                            </div>
                            <p className='text-white'>
                            Experience Our Award-Winning Bike Tours. More Trip Leaders and Unrivaled Van Support. 
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} md={3}  sm={12} className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h5 className=' text-white mb-2'>Shob by</h5>
                        <NavLink style={{textDecoration:'none',fontSize:'18px',color:'#ddd',marginBottom:'10px'}} className='d-block' to='/home'>Home</NavLink>
                        <NavLink style={{textDecoration:'none',fontSize:'18px',marginBottom:'10px',color:'#ddd'}}  className='d-block'  to='/myorder'>My Order</NavLink>
                        <NavLink style={{textDecoration:'none',fontSize:'18px',color:'#ddd',marginBottom:'10px'}}  className='d-block'  to='/review'>Rview us</NavLink>
                        <NavLink style={{textDecoration:'none',fontSize:'18px',color:'#ddd',marginBottom:'10px'}}  className='d-block'  to='/contact'>contact</NavLink>
                        </div> 
                        
                    </Col>
                    <Col lg={4} md={4} sm={12} className='d-flex justify-content-center align-items-center'>
                        <div className='footer-contact text-justified '>
                            <h5 className='text-white mt-4'>Contact us</h5>
                            <div className='d-flex mb-2 mt-3 '> 
                           <p> <i className="uil uil-envelope-minus me-3 text-white"></i></p>
                            <p className='m-0 text-white'> Email:</p>
                             <p className='m-0 text-white'> shahrinrpi@gmail.com</p>
                            </div>
                            <div className='d-flex  mb-2 '> 
                            <p><i className="uil uil-phone-alt me-3 text-white"></i></p>
                            <p className='m-0 text-white'> Phone: </p> 
                            <p className='m-0 text-white'> 01796795850</p> 
                            </div>
                            <div className='d-flex  '> 
                            <p><i className="uil uil-location-point me-3 text-white"></i></p>
                            <p className='m-0 text-white'> Location: </p> 
                            <p className='m-0 text-white'> saidpur,Rangpur</p>  
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12} md={12} sm={12} className='d-flex justify-content-center align-items-center'> 
                    <p className='text-white mt-4'>Copyright © 2021-present Magento, Inc. All rights reserved</p>
                    </Col>

                  
                </Row>
            </Container>
        </div>
    );
};

export default Footer;