import React from 'react';
import Login from '../../Login/Login';
import Reviews from '../../Reviews/Reviews';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;