import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div>
              <div className='pagenotFound-area'>
            <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
                <div className= "text-center pageStyle">
                     <h5>OOPS..</h5>
                    <h1>Page Not Found</h1>
                    <NavLink style={{textDecoration:'none' ,fontSize:'20px', color:'#090909'}} to= '/home'>GO To Home</NavLink>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PageNotFound;
