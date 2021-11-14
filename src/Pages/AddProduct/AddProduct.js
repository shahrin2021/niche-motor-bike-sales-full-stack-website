import React, { useRef } from 'react';
import './AddProduct.css'


const AddProduct = () => {
    const nameRef = useRef()
    const imgRef = useRef()
    const idRef = useRef()
    const priceRef = useRef()
    const discriptionRef = useRef()
    const reviewRef = useRef()
    const stockRef = useRef()

    const handleSubmit = e =>{
        const name= nameRef.current.value;
        const id = idRef.current.value;
        const img= imgRef.current.value;
        const discription =discriptionRef.current.value;
        const review = reviewRef.current.value;
        const stock = stockRef.current.value;
        const price = priceRef.current.value;

        const newProduct= { id: id, price:price, name: name, img:img, discription: discription, stock:stock, 
            review:review }
        fetch('http://localhost:5000/products', {
            method: "POST", 
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
             alert('successfully user added')
            nameRef.current.value='';
            idRef.current.value='';
            imgRef.current.value='';
            discriptionRef.current.value='';
            reviewRef.current.value='';
            stockRef.current.value='';
            priceRef.current.value='';
            }
            console.log(data)
        })
        e.preventDefault()
    };
    return (
        <div>
              <div>
        <h2 className='text-center my-5'>Pleace add new product </h2>
        
        <div className='service-add-form'>
        <div className='form-area'>
          <form onSubmit={handleSubmit}>
          <input className='mb-2' ref ={idRef} type="number"   placeholder='id'/>
        <input ref={nameRef}  placeholder='name' />
        <input ref={imgRef}  placeholder='img url'/>
        <input ref={priceRef} type="number"  placeholder='price' />
        <textarea ref={discriptionRef} id="" cols="30" rows="10"  placeholder='discription'/>
        <input ref={reviewRef} type="number"  placeholder='review'/>
        <input  ref={stockRef} type="number" placeholder='stock'/>
        
      <input className='input-btn w-25 m-auto' type="submit" value='Add Service' />
    </form>
        </div>
        </div>
        </div>
        </div>
    );
};

export default AddProduct;