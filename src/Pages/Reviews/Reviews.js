import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://protected-island-07289.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (<div style={{marginTop:'50px'}}>
        <Container>
            <h2 className='text-center text-success mb-5' >What Say our customer about us ?</h2>
            <Row>
                    {
                        reviews.map(review=><Review
                        
                            review={review}
                            key= {review._id}
                        
                        />)
                    }
            </Row>  
        </Container>
        </div>
    );
};

export default Reviews;