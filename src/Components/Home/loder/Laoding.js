import React, { useState, useEffect } from "react";
import "./loding.css";

const Loading = ({ duration = 4000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "auto";
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [duration]);

  if (!show) return null;

  return (
    <div className="loading">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
