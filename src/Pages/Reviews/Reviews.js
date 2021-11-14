import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (
        <Container>
            <h2 className='text-center my-5'>What Say our customer about us ?</h2>
            <Row>
                    {
                        reviews.map(review=><Review
                        
                            review={review}
                            key= {review._id}
                        
                        />)
                    }
            </Row>  
        </Container>
    );
};

export default Reviews;