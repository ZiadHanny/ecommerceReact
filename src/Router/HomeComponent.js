import React, { Fragment } from 'react'
import Nav from '../Components/Nav/Nav'
import Laoding from '../Components/Home/loder/Laoding'
import Footer from '../Components/footer/footer'
import Section from '../Components/Home/Section1/Section1'
import Cart from '../Components/cart/Cart'
import Section2 from '../Components/Home/Section2/Section2'
import Section3 from '../Components/Home/Section3/Section3'
import Section4 from '../Components/Home/Section4/Section4'

const HomeComponent = () => {
  return (
    <Fragment>
    <Laoding/>
    <Nav/>
    <Section/>
    <Section2/> 
    <Section3/> 
    <Section4/>
    <Footer/>
    </Fragment>
  )
}

export default HomeComponent
