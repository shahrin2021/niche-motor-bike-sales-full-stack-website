import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-area' >
            <div className="banner-text text-center">
              <h1>Largest Motor Bike Menufacture</h1>
              <p>Chack out our exclusive collection of motor bike scuti bike and more</p>
              <NavLink to='/products'>
              <button className='btn btn-success'>Shop Now </button>
              </NavLink>
            </div>
        </div> 
    );
};

export default Banner;