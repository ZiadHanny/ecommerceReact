import React, { Fragment } from 'react'
import './section.css'
import slid3 from './image/banner8.jpg'

const Section = () => {
  return (
    <Fragment>
      <section className='slider'>
        <img src={slid3} alt='' className="slider-img" />

        <div className='data-slider'>
          <h4 className="fade-in">NEW TRENDING</h4>
          <h1 className="slide-up">Sofa Collection</h1>
          <p className="fade-in-delay">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.
          </p>
          <button className='btn-shop bounce-in'>Shop!</button>
        </div>
      </section>
    </Fragment>
  )
}

export default Section
