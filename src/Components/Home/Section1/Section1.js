import React, { Fragment } from 'react'
import './section.css'
import slid1 from './image/banner7.jpg'
import slid2 from './image/banner9.jpg'
import slid3 from './image/banner8.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Section = () => {
     
    return (
      <Fragment>
        <section className='slider'>
       
        <img src={slid3} alt=''/>
      
        <div className='data-slider' >
        <h4>NEW TRANDING</h4>

        <h1>Sofa Collection</h1>
        <p>Lorem ipsum dolor sit amet,
         consectetur adipiscing elit. 
         Phasellus blandit massa enim.
         Nullam id varius nunc id varius nunc.</p>

         <button className='btn-shop'> Shop!</button>

        </div>


        </section>
      </Fragment>
        
      );
     }


export default Section
