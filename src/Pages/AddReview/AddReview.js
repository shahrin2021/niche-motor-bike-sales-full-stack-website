import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import './AddReview.css'

const AddReview = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const reviewRef = useRef()
    const starRef = useRef()
    const {user} = useAuth()
    const handleSubmit = e =>{
        const name= nameRef.current.value;
        const email= emailRef.current.value;
        const review =reviewRef.current.value;
        const star = starRef.current.value;
       
        const newReview = {  name: name , email: email, review:review ,star:star }  
            
        fetch(' https://protected-island-07289.herokuapp.com/reviews', {
            method: "POST", 
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(newReview)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
             alert('successfully review added')
             nameRef.current.value='' ;
             emailRef.current.value='';
             reviewRef.current.value='';
             starRef.current.value=''
            }
            console.log(data)
        })
        e.preventDefault()
    };
    return (
        <Container>
            
        <div className='d-flex justify-content-center align-items-center ' style={{height:'90vh'}}>
        <div>
        <h2 className='text-center mb-3'>Send us your Feedback</h2>
            <div className='addreview-area'>
              <form onSubmit={handleSubmit}>
            <label htmlFor="">Your name</label>
         <div>
             
         <input className='w-100 mb-2' ref={nameRef} type='text' value={user.displayname}  placeholder='name' />  
         </div>
         <label htmlFor="">Email</label>
         <div>
         <input  className='w-100 mb-2' type='email' ref={emailRef} value={user.email}  placeholder='email'/>
         </div>
         <label htmlFor="">Your Feedbank</label>
         <div>
         <textarea  className='w-100 mb-2' ref={reviewRef} id="10" cols="" rows="5"  placeholder='review'/>
         </div>
         <label htmlFor="">Give us stars</label>
         <div>
         <input className='w-100 mb-3' ref={starRef} type="number"  placeholder='star'/>
         </div>
    
        
      <button className='btn btn-warning d-block mx-auto' type="submit"  >Send Feedback</button>
    </form>
    </div>
    </div>
        </div>
        </Container>
    );
};

export default AddReview;
