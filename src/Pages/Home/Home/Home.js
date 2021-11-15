import React from 'react';
import Login from '../../Login/Login';
import Reviews from '../../Reviews/Reviews';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Products from '../Products/Products';
import Contact from '../../Contact/Contact'


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Products></Products>
            
            <Reviews></Reviews>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;