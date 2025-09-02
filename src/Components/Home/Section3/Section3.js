import React, { useEffect, useState } from "react";
import "./section3.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../Redux/cartSlice";

const Section3 = () => {
  const [cards, setCards] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/carts")
      .then((res) => setCards(res.data.carts[3].products))
      .catch((err) => console.log(err));
  }, []); // ✅ إضافة dependency [] علشان مايتنفذش غير مرة

  return (
    <section className="best-seller">
      <div className="title">
        <h1>Best Seller</h1>
      </div>

      <div className="cards">
        {cards.map((el) => (
          <div key={el.id} className="card">
            <div className="image-wrapper">
              <img src={el.thumbnail} alt={el.title} />
            </div>
            <p className="product-title">{el.title}</p>
            <p className="product-price">${el.price}</p>
            <button
              className="btn"
              onClick={() => dispatch(cartSlice.actions.addTocart(el))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
