import React from 'react';
import './footer.css';
import { SiGooglemaps, SiMinutemailer } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaGithub, FaLinkedin, FaWeebly } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../Nav/Logo';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-column footer-brand'>
          <Logo />
          <p className="footer-tagline">Modern furniture and home essentials, picked with care.</p>
          <div className='social-icons'>
            <a href='https://github.com/ZiadHanny' target='_blank' rel='noopener noreferrer' aria-label="GitHub">
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/ziad-hany-9a45b7236' target='_blank' rel='noopener noreferrer' aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href='https://portfolio-z-t2tj.vercel.app/' target='_blank' rel='noopener noreferrer' aria-label="Portfolio">
              <FaWeebly />
            </a>
          </div>
        </div>

        <div className='footer-column'>
          <h3>Contact Info</h3>
          <p><SiGooglemaps className="icon" /> 123 Street, Old Trafford, New York, USA</p>
          <p><MdOutlineEmail className="icon" /> info@yourmail.com</p>
          <p><IoMdPhonePortrait className="icon" /> +123-456-789</p>
        </div>

        <div className='footer-column'>
          <h3>Useful Links</h3>
          <Link to='/home'>Home</Link>
          <Link to='/product'>Shop</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <div className='footer-column'>
          <h3>Subscribe Our Newsletter</h3>
          <p>Sign up to get our latest offers and updates!</p>
          <div className='newsletter'>
            <input type='email' placeholder='Enter your email' />
            <button aria-label="Subscribe"><SiMinutemailer /></button>
          </div>
        </div>
      </div>

      <div className="footer-line">
        <span></span>
        <p>© 2025 ShopWise. All rights reserved.</p>
        <p className="footer-credit">Made by Ziad Hany</p>
      </div>
    </footer>
  );
};

export default Footer;
