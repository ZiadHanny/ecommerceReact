import React from 'react';
import img2 from '../../image/furniture_banner1.jpg';
import img3 from '../../image/furniture_banner2.jpg';
import { Link } from 'react-router-dom';
import './Serion4.css';

const Section4 = () => {
  return (
    <section className='section4'>
      <div className='card card-left'>
        <img src={img2} alt='New Collection' />
        <div className='overlay'>
          <p className='subtitle'>Super Sale</p>
          <h2>New Collection</h2>
          <Link to={'/product'} className='btn-shop'>Shop New</Link>
        </div>
      </div>

      <div className='card card-right'>
        <img src={img3} alt='New Season' />
        <div className='overlay'>
          <h2>New Season</h2>
          <p className='subtitle'>Sale 40% Off</p>
          <Link to={'/product'} className='btn-shop'>Shop New</Link>
        </div>
      </div>
    </section>
  );
};

export default Section4;
