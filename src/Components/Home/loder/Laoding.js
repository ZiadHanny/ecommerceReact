import React, { Fragment, useState } from 'react'
import './loding.css'

const Laoding = () => {
    const [laoding,setloading] = useState(false)
    setTimeout(() => {
        setloading(true)
    },4000)

  return (
    <Fragment>
      <div className="laoding" style={laoding ? {display:'none'} : {display: 'flax'}}>
      <div class="loader"></div>
      </div>
    </Fragment>
  )
}

export default Laoding
