import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shahrin2021/blog-for-bike/main/blog.json')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data);
            console.log(data)
        })
    },[])
    return (<div style={{marginTop:'100px'}}>
        <Container className=''>
           <div className='text-center my-5' >
           <h2 className='text-danger  '>Our Leatest Blogs</h2>
            <p >Read our leatest blogs </p>
           </div>
            <Row>
                {
                    blogs.map(blog=><Blog
                    
                        blog={blog}
                        key={blog.id}
                    
                    />)
                }
            </Row>
        </Container>
        </div>
    );
};

export default Blogs;