import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import './Cart.css'
import Nav from '../Nav/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdClose } from "react-icons/io";
import Footer from '../footer/footer'
import { cartSlice } from '../Redux/cartSlice'




const Cart = () => {
  
  const cartprodcut = (useSelector(state => state.cart.cart));
  const  dispatch = useDispatch()

    
  return (
    <Fragment>
    <Nav/>
    <div className= "continer-cart">
  
  <div className= 'continer-title'>

    <p>Product</p>
    <p>Title</p>
    <p>Price</p>    
    <p>Remove</p>
  </div>



    <div className = "container-data">
    {
      cartprodcut.map(el =>(

      <div key={el.id} className ="carts">


          <img src={el.image} alt=""/>
          <div className = "data-carts">

            <h1>{el.title}</h1>


          </div>
          <h2><sup> {el.price}$ </sup> </h2>
          <button onClick={ ()=>dispatch(cartSlice.actions.removeTocart(el))} ><IoMdClose/></button>

         
      </div>
      ))

    }
    </div>
    </div>
    <Footer/>
    </Fragment> 
  )
}

export default Cart
