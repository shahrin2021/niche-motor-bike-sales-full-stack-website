import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {

    const {name, email, review, star}= props.review;
    return (
        <Col lg={6} md={6} sm={12}>
          <Card className='review-card'>
           
              <Card.Header >
                  <h5 style={{fontSize:'24px',display:'flex', alignItems:'center'}}>
                  <span className='me-2'><i className="uil uil-user-circle"></i></span> <h6 className='m-0'>{name}</h6>
                  </h5>
                  <h5 style={{fontSize:'20px',display:'flex' , alignItems:'center'}}>
                  <span className='me-2'><i className="uil uil-envelope-minus"></i></span> <h6 className='m-0'>{email}</h6> 
                  </h5>
                  </Card.Header >
            <Card.Body>
                <Card.Title>
            <div className='d-flex justify-content-between mb-2'>
                
                <div className='rating-icon'>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star-half-alt"></span>
               
                </div>
                <div>{star} </div>
            </div>
                </Card.Title>
                <Card.Text>
               {review.slice(0,200)}
                </Card.Text>
                
            </Card.Body>
    </Card>
        </Col>
    );
};

export default Review;