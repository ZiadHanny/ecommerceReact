import React, { Fragment, useState, useEffect } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Logo from "./img/logo_dark.png";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);
  const [menuOpen, setMenuOpen] = useState(false);

  // Resize Listener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Fragment>
      <header>
        <nav>
          <img src={Logo} alt="logo" />

          {/* Main Menu */}
          <ul
            className={`menu ${isMobile ? "hide" : ""} ${
              menuOpen ? "smallMenu open" : ""
            }`}
          >
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>

          {/* Right Bar */}
          <ul className="bar">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/cart">
              <MdOutlineShoppingCart size={25} />
            </NavLink>
          </ul>

          {/* Toggle Icon */}
          {isMobile &&
            (menuOpen ? (
              <IoClose
                onClick={() => setMenuOpen(false)}
                size={28}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <IoMenu
                onClick={() => setMenuOpen(true)}
                size={28}
                style={{ cursor: "pointer" }}
              />
            ))}
        </nav>
      </header>
    </Fragment>
  );
};

export default Nav;
