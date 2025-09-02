import React, { Fragment, useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Singel.css';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../Redux/cartSlice';
import Footer from '../footer/footer';

const SingelProduct = () => {
    const [single, setSingle] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setSingle(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!single) return <div className="loader">Loading...</div>;

    return (
        <Fragment>
            <Nav />
            <div className="continer-single">
                <div className='img-single'>
                    <img src={single.image} alt={single.title} />
                </div>
                <div className='data-single'>
                    <h1>{single.title}</h1>
                    <div className="price">
                        <span>${single.price}</span>
                        <del>$110</del>
                    </div>
                    <p>{single.description}</p>
                    <h3>Category: <span>{single.category}</span></h3>
                    <button className='btn' onClick={() => dispatch(cartSlice.actions.addTocart(single))}>
                        Add to Cart
                    </button>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default SingelProduct;
