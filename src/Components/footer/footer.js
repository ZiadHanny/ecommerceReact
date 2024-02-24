import React, { Fragment } from 'react'
import './footer.css'
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { Link } from 'react-router-dom';










const Footer = () => {
  return (
    <Fragment>
    <footer className='footer'>
        <div className='data-one'>
            <h1>Contact info</h1>
            <p> <SiGooglemaps size={20}  /> 123 Street, Old Trafford, NewYork, USA</p>
            <p> <MdOutlineEmail size={20}/>     info@yourmail.com</p>
            <p> <IoMdPhonePortrait size={20}/> +123-456-789</p>
            <div className='data-icon'>

            <Link to={'/Contact'}><FaFacebook size={30} /></Link>
            <Link to={'/Contact'}><AiFillTwitterCircle size={30} /></Link>
            <Link to={'/Contact'}><FaGooglePlus size={30} /></Link>
            <Link to={'/Contact'}><AiFillYoutube size={30}/></Link>
            <Link to={'/Contact'}> <FaSquareInstagram size={30}  /></Link>

            </div>
        

            </div>
            <div className='data-one'>
            <h1>Useful Links</h1>
        <div className='data-tow'>

            <Link to={'/Contact'}>About us</Link>
            <Link to={'/Contact'}>FAQ</Link>
            <Link to={'/Contact'}>Location</Link>
            <Link to={'/Contact'}>Affiliates</Link>
            <Link to={'/Contact'}> Contact</Link>
        </div>
        </div>
            <div className='data-one'>
            <h1>Subscribe Our Newsletter</h1>
            <p>If you want to get an email from us every
             time we have a new special offer, then sign up here!</p>
             <div className='data-three'>
             </div> 
        
        
        </div>
        <div className='line'>
        <span></span>

        </div>
    </footer>
      
    </Fragment>
  )
}

export default Footer
