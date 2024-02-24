import React, { Fragment } from 'react'
import "./contact.css"
import { FaRegMap } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Iframe from 'react-iframe'
import mapsimg from '../image/Google Maps Supercharges Location Sharing, Discretely Drools Over Your Data.jpeg'

const Contact = () => {

  return (
    <Fragment>
        <section className="contacts">
        <div className="all-one">

    <div className="contact-one">
    <span><FaRegMap  size={40}/></span>

    <h1>Address</h1>
    <h2>123 Street, Old Trafford, London, UK</h2>
            
    </div>
    <div className="contact-one">
    <span><MdOutlineMarkEmailRead size={40} /></span>
    <h1>Email Address</h1>
    <h2> info@yourmail.com</h2>

            
    </div>
    <div className="contact-one">
    <span><IoPhonePortraitOutline size={40} />
</span>
    <h1>Phone</h1>
    <h2>+135-678-535-56</h2>

            
    </div>
        </div>
        </section>


        <section className="contact-tow">
     <div className='conaction'>
        <div className='data-con'>

        <h1>Get In Touch</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Phasellus
         blandit massa enim. Nullam id varius nunc id varius nunc.</p>
        </div>
         <div className='inputs'>
            <input type='text' placeholder='Enter Name'/>
            <input type='text' placeholder='Enter Email'/>
            <input type='text' placeholder='Enter Phone'/>
            <input type='text' placeholder='Enter Subjcat'/>
          <textarea rows={8} placeholder='Massage' cols={55}>

          </textarea>



         </div>


         </div>
         <div className='conaction-map'>

         <img src={mapsimg} alt=''/>
        

            
        </div>
        

        </section>
      
    </Fragment>

  )
}

export default Contact
