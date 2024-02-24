import React, { Fragment } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './sigup.css'
import Footer from '../footer/footer'

const Signup = () => {
  return (
    <Fragment>
    <Nav/>
    
    <div className='continer-signup'>
    <form className='signup'>
    <h1>SignUp</h1>

        
        <input type='text' placeholder='username' />
        <input type='text' placeholder='Email' />
        <input type='Password' placeholder='Password' />

          <button>SignUp</button>

        <p>Have already user ? <Link to={'../login'}>LOGIN</Link></p>

 

    </form>
    </div>
    <Footer/>
      
    </Fragment>
  )
}

export default Signup
