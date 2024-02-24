import React, { Fragment, useEffect, useState } from 'react'
import './section3.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { cartSlice } from '../../Redux/cartSlice'

const Section3 = () => {
    const [card , setcard] = useState([{}])


    useEffect(() =>{
        axios.get('https://dummyjson.com/carts')
        .then((res) =>setcard(res.data.carts[3].products))
        .catch((err) =>console.log(err))

    }
    )
    const  dispatch = useDispatch()

  return (
    <Fragment>
    <div className='best-sellar'>
    <div className='title'>

    <h1>Bast Sellar</h1>

    </div>
    <div className='cards'>

    {
        card.map((el) => 

<div key={el.products} className='card'>

        <img src={el.thumbnail}alt=''/>
        <p>{el.title}</p>
        <p>{el.price}$</p>
        <button className='btn' onClick={ ()=>dispatch(cartSlice.actions.addTocart(el))}>Add cart</button>




    </div>
        )

}
    </div>
    </div>
      
    </Fragment>
  )
}

export default Section3
