import React, { Fragment } from 'react'
import img2   from '../../image/furniture_banner1.jpg'
import img3   from '../../image/furniture_banner2.jpg'
import { Link } from 'react-router-dom'
import './Serion4.css'


const Section4 = () => {
  return (
    <Fragment>
    <section className='section4'>

        <div className='data3'>

        <div className='mini-data'>
        <p>Super Sale</p>

            <h1>New Collection</h1>
            <Link to={'/product'}>Shop New</Link>
        </div>
        <img src={img2} alt=''/>
        </div>

       
        <div className='data4'>
        <div className='mini-data'>
            <h1>New Season</h1>
            <p>Sale 40% Off</p>
            <Link to={'/product'}>Shop New</Link>
        </div>
        <img src={img3} alt=''/>

        </div>
        
    </section>
      
    </Fragment>
  )
}

export default Section4
