import axios from 'axios';
import React, { Fragment } from 'react';
import './Cart.css';
import Nav from '../Nav/Nav';
import Footer from '../footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
import { cartSlice } from '../Redux/cartSlice';

const Cart = () => {
  const cartProducts = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Nav />
      <div className="cart-container">
        <div className="cart-header">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Remove</p>
        </div>

<div className="cart-items">
  {cartProducts.length === 0 ? (
    <p className="empty-cart">Your cart is empty.</p>
  ) : (
    cartProducts.map(el => (
      <div key={el.id} className="cart-item">
        <img src={el.image} alt={el.title} />
        <div className="cart-item-info">
          <h1>{el.title}</h1>
          <p>{el.description?.slice(0, 60)}...</p>
        </div>
        <div className="cart-item-price">
          <span>{el.price}$</span>
          <button onClick={() => dispatch(cartSlice.actions.removeTocart(el))}>
            <IoMdClose />
          </button>
        </div>
      </div>
    ))
  )}
</div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Cart;



