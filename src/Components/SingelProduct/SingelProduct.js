import React, { Fragment, useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Singel.css'
import { IoIosStar } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { cartSlice } from '../Redux/cartSlice'
import Footer from '../footer/footer'


const SingelProduct = () => {
    const [single, setSingle] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setSingle(res.data) )
        .catch((err) => console.log(err))
    })
    const  dispatch = useDispatch()
  return (

    <Fragment>
    <Nav/>
    <div className="continer-single" >
    
 
    
    <div className='img-single' >
    <img src={single.image} alt=''/>

    </div>
    <div className='data-single'>
    <h1>{single.title}</h1>
    <span>{single.price}$ <sub><del>110$</del></sub></span>
    {/* <span>{single.rating.rate} <IoIosStar size={20} color='gold'/></span> */}
    <p>{single.description}</p>
    <h3>category: <span>{single.category}</span></h3>
    <button className='btn' onClick={ ()=>dispatch(cartSlice.actions.addTocart(single))}>Add cart</button>


    </div>
    
    </div>
    <Footer/>
    </Fragment>
  )
}

export default SingelProduct
