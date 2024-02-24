import React, { Fragment } from 'react'
import Nav from '../Nav/Nav'
import './Login.css'
import { Link } from 'react-router-dom'
import Footer from '../footer/footer'

const Login = () => {
  return (
    <Fragment>
    <Nav/>
    
    <div className='continer-login'>
    <form className='login'>
    <h1>Login</h1>

        
        <input type='text' placeholder='Email' />
        <input type='Password' placeholder='Password' />
        <button>Login</button>

        <p>Need an account ? <Link to={'signup'}>SIGN UP</Link></p>

 

    </form>
    </div>

    <Footer/>
      
    </Fragment>
  )
}  

export default Login
