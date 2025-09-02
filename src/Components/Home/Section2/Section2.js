import React from "react";
import "./Section2.css";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";

const features = [
  {
    icon: <TbTruckDelivery size={40} />,
    title: "Free Delivery",
    desc: "Worldwide",
  },
  {
    icon: <GiReceiveMoney size={40} />,
    title: "Money Returns",
    desc: "30 Days money return",
  },
  {
    icon: <BiSupport size={40} />,
    title: "24/7 Online Support",
    desc: "Customer Support",
  },
  {
    icon: <MdPayment size={40} />,
    title: "Payment Security",
    desc: "Safe Payment",
  },
];

const Section2 = () => {
  return (
    <section className="section2">
      <div className="data-section">
        {features.map((item, index) => (
          <div className="data" key={index}>
            <span>{item.icon}</span>
            <div className="mini-data">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
