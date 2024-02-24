import React, { Fragment, useEffect, useState } from 'react'
import Nav from '../Components/Nav/Nav'
import axios from 'axios'
import './Product.css'
import { IoIosStar } from "react-icons/io";
import Footer from '../Components/footer/footer';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../Components/Redux/cartSlice';
import { Link } from 'react-router-dom';


const ProductComponent = () => {
  const [Product,setproduct] = useState([])
  useEffect(()=>{

    axios.get('https://fakestoreapi.com/products')
    .then((res) =>setproduct(res.data))
    .catch((err) =>console.log(err))
  })

  const  dispatch = useDispatch()
  return (
    <Fragment>
    <Nav/>
        <div class="continer">
    {
      Product.map((el) => (


        <div key={el.id} class="product">
            <img src={el.image} alt="" />
            <h1>{el.title}</h1>
            <h3>{el.category}</h3>
            <p>{el.rating.rate} <IoIosStar  color='gold' /></p>

                <span><sup> {el.price}$ </sup> </span>
            <div className='data'>
                <Link to={`${el.id}`}>Show More</Link>

                <button className='btn' onClick={ ()=>dispatch(cartSlice.actions.addTocart(el))}>Add cart</button>
             </div> 
                
            </div>
        
       ) )

      }
    </div>


    <Footer/>
    
    
    </Fragment>
  )
}

export default ProductComponent
