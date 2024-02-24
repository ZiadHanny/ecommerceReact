import React, { Fragment } from 'react'
import './Section2.css'
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";




const Section2 = () => {
  return (
    <Fragment>
    <section className="section2">
        <div className="data-section">

            <div className="data">
            <span>
            <TbTruckDelivery size={40} />

            </span>
            <div className="mini-data">
                <h1>Free Delivery</h1>
                <p>Worldwide</p>
            </div>
                
            </div>


            <div className="data">
            <span>
            <GiReceiveMoney  size={40} />

            </span>
            <div className="mini-data">
                <h1>Money Returns</h1>
                <p>30 Days money return</p>
            </div>
                
            </div>
            <div className="data">
            <span>
            <BiSupport size={40} />

            </span>
            <div className="mini-data">
                <h1>27/4 Online Support</h1>
                <p>Customer Support</p>
            </div>
                
            </div>
            <div className="data">
            <span>
            <MdPayment size={40} />

            </span>
            <div className="mini-data">
                <h1>Payment Security</h1>
                <p>Safe Payment</p>
            </div>
                
            </div>
            
        </div>
    </section>
      
    </Fragment>
  )
}

export default Section2
