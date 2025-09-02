import React from 'react';
import './footer.css';
import { SiGooglemaps, SiMinutemailer } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedin, FaWeebly } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { FaGooglePlus, FaSquareInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-column'>
        <h3>Contact Info</h3>
        <p><SiGooglemaps className="icon" /> 123 Street, Old Trafford, New York, USA</p>
        <p><MdOutlineEmail className="icon" /> info@yourmail.com</p>
        <p><IoMdPhonePortrait className="icon" /> +123-456-789</p>
        <div className='social-icons'>
          <Link to='https://github.com/ZiadHanny '><FaGithub /></Link>
          <Link to='www.linkedin.com/in/ziad-hany-9a45b7236'><FaLinkedin /></Link>
          <Link to='https://portfolio-z-t2tj.vercel.app/'><FaWeebly /></Link>
        </div>
      </div>

      <div className='footer-column '>
        <h3>Useful Links</h3>
        <Link to='/About'>About Us</Link>
        <Link to='/FAQ'>FAQ</Link>
        <Link to='/Location'>Location</Link>
        <Link to='/Affiliates'>Affiliates</Link>
        <Link to='/Contact'>Contact</Link>
      </div>

      <div className='footer-column'>
        <h3>Subscribe Our Newsletter</h3>
        <p>Sign up to get our latest offers and updates!</p>
        <div className='newsletter'>
          <input type='email' placeholder='Enter your email' />
          <button><SiMinutemailer /></button>
        </div>
      </div>
      <div className="footer-line">
  <span></span>
  <p>© 2023 By Ziad Hany . All rights reserved.</p>
</div>
    </footer>
  );
};

export default Footer;
