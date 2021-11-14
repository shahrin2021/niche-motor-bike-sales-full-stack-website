import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const {id} = useParams();
    const [product, setProduct]= useState({})
    
    console.log(product)
    useEffect(()=>{
         fetch(` https://protected-island-07289.herokuapp.com/products/${id}`)
         .then(res=>res.json())
         .then(data=>{
            setProduct(data)
            console.log(data)
         })
    },[])



    const handleNameChange= e=>{
        const productName = e.target.value;
        console.log(productName)
        const updateProduct= {name:productName, price: product.price,img:product.img,stock:product.stock };
        setProduct(updateProduct)

    }

    const handlePriceChange=e=>{
        const productPrice= e.target.value;
        console.log(productPrice)
        const updateProduct= {name:product.name, price: productPrice,img:product.img,stock:product.stock };
        setProduct(updateProduct)
    }
    const handleImgLinkChange = e=>{
       const  productImg = e.target.value;
       const updateProduct= {name:product.name, price: product.price,img:productImg,stock:product.stock };
       setProduct(updateProduct)
    }

    const handleStockChange= e=>{
        const productStock= e.target.value;
        const updateProduct= {name:product.name, price: product.price,img:product.img,stock:productStock};
        setProduct(updateProduct)
    }

    const handleSubmit = e=>{

        const url = ` https://protected-island-07289.herokuapp.com/products/${id}`;
        fetch(url ,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.modifiedCount > 0){
                alert('updated successfully')
                setProduct({});
                e.target.value='';
            }
            console.log(data)
        })

    e.preventDefault()
    }

    return (
    <Container>
        <div>
            <div className='update-form'>
                <h3 className='text-center text-success my-4'>Please update service</h3>
                <form className=' text-center' action="" onSubmit={handleSubmit} >
                   <div>
                   <input onChange={handleNameChange} value={product.name || ''} className='d-block w-75 p-1 mb-3 mx-auto' type="text" 
                    placeholder='name' />
                   </div>

                    <div>
                        <input onChange={handlePriceChange}  value ={product.price || ''} className='d-block w-75 p-1 mb-3 mx-auto'type="number"  placeholder='price' />
                    </div>
                    <div>
                        <input onChange={handleImgLinkChange} value={product.img || ''} className='d-block w-75 p-1 mb-3 mx-auto'type="text"   placeholder='Img url' />
                    </div>
                    <div>
                        <input  onChange={handleStockChange} value={product.stock || ''} className='d-block w-75 p-1 mb-3 mx-auto'type="number"   placeholder='stock' />
                    </div>

                    <input className='mx-auto btn btn-primary' type="submit" value="Update" />
                </form>
            </div>
        </div>
    </Container>
    );
};

export default UpdateProduct;