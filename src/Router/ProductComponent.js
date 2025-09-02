import React, { Fragment, useEffect, useState } from 'react';
import Nav from '../Components/Nav/Nav';
import axios from 'axios';
import './Product.css';
import { IoIosStar } from "react-icons/io";
import Footer from '../Components/footer/footer';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../Components/Redux/cartSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductComponent = () => {
  const [Product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <Nav />
      <div className="product-container">
        {Product.map((el, i) => (
          <motion.div
            key={el.id}
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="img-box">
              <img src={el.image} alt={el.title} />
            </div>
            <h1>{el.title.length > 35 ? el.title.slice(0, 35) + "..." : el.title}</h1>
            <h3>{el.category}</h3>
            <p>{el.rating.rate} <IoIosStar color="gold" /></p>
            <span><sup>{el.price}$</sup></span>

            <div className="card-actions">
              <Link to={`${el.id}`} className="btn-link">Show More</Link>
              <button
                className="btn"
                onClick={() => dispatch(cartSlice.actions.addTocart(el))}
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProductComponent;
