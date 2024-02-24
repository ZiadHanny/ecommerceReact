import React, { Fragment, useState } from 'react'
import  './Nav.css'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import Logo from "./img/logo_dark.png"


 

const Nav = () => {
  const [mnue, setmnue] =useState(false)
  const [small,setsmall] =useState(false)
  const [ close, setclose] =useState(false)
  // const [search, setsearch] =useState(false)
  window.addEventListener('resize', (e) => {
 let windowSize = e.currentTarget.innerWidth;

  windowSize <= 850? setmnue(true): setmnue(false)
  })

  const onChange = ()=> {
    setsmall(!small)
    setclose(!close)
    // setsearch(!search)
  }
  return (
    <Fragment>
    <header>
        <nav>
            <img src={Logo} alt=''/>            
            <ul className={small? "samllMnue" :undefined} style={ mnue? {display: 'none'} :   undefined} >
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/product'}>product</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>

              </ul> 
           
            <ul className="bar">
            <NavLink to={'/login'}> Login</NavLink>

              <NavLink to={'/cart'}><MdOutlineShoppingCart size={25}/></NavLink>

             {/* <NavLink> <GoSearch size={25} onClick={()=> onChange()}/> </NavLink> */}
            </ul>
        {
          close? (
            <IoClose onClick={()=> onChange()} size={25} style={{cursor: 'pointer'}} />

          ):
          (
            mnue? (
            <IoMenu onClick={()=> onChange()} size={25} style={{cursor: 'pointer'}}/>

          ) :undefined
          )

        }
        </nav>
       
    </header>

    
      
    </Fragment>
  )
}

export default Nav
