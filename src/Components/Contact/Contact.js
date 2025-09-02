import React, { Fragment } from 'react';
import './contact.css';
import { FaRegMap } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import mapsimg from '../image/Google Maps Supercharges Location Sharing, Discretely Drools Over Your Data.jpeg';

const Contact = () => {
  return (
    <Fragment>
      <section className="contacts">
        <div className="contacts-wrapper">

          <div className="contact-card">
            <span><FaRegMap size={40}/></span>
            <h1>Address</h1>
            <h2>123 Street, Old Trafford, London, UK</h2>
          </div>

          <div className="contact-card">
            <span><MdOutlineMarkEmailRead size={40} /></span>
            <h1>Email Address</h1>
            <h2>info@yourmail.com</h2>
          </div>

          <div className="contact-card">
            <span><IoPhonePortraitOutline size={40} /></span>
            <h1>Phone</h1>
            <h2>+135-678-535-56</h2>
          </div>

        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-wrapper">
          <div className="form-info">
            <h1>Get In Touch</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Enter Name"/>
            <input type="email" placeholder="Enter Email"/>
            <input type="text" placeholder="Enter Phone"/>
            <input type="text" placeholder="Enter Subject"/>
            <textarea rows={6} placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-map">
          <img src={mapsimg} alt="map"/>
        </div>
      </section>
    </Fragment>
  )
}

export default Contact;
