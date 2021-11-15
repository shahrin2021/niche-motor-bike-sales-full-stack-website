import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div style={{marginTop:'100px'}} >
            <div className="container">
                <div className="text-center">
                <h2 >GET IN TOUCH </h2>
                <p>we are always glad to help you </p>
                </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="conatct-container">
                    <form action="">
                        <div className="contact-form-area" >
                        <label htmlFor="">Name :</label>
                        <input type="text" className="form-control" id=""/>
                        </div>
                        <div className="contact-form-area">
                        <label htmlFor="">Email :</label>
                        <input type="email" className="form-control" id=""/>
                        </div>
                        <div className="contact-form-area">
                        <label htmlFor="">Subject :</label>
                        <input type="text" className="form-control" id=""/>
                        </div>
                        <div className="contact-form-area">
                        <label htmlFor="">Phone :</label>
                        <input type="text" className="form-control" id=""/>
                        </div>
                        <div className="contact-form-area">
                        <label htmlFor="">Comment :</label>
                        <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="text-center">
                            <button className ='btn  btn-danger contact-btn'>Send</button>
                        </div>
                    </form>
                    </div>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;