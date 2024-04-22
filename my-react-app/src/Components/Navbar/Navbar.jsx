import React from "react";
import "./Navbar.css";
import cart from "../../assets/cart.png";
// import search from "../../assets/search.png"
import logo from "../../assets/logo.png";
 import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {

// const totalItem = cartItems.length;

  return (
    <div className="navbar">
      <div className="title">
        <Link to={'/'}><img
          src={logo}
          alt=""
          style={{ borderRadius: "50%" }}
          width={"100px"}
          height={"100px"}
        /></Link>
      </div>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        {/* <button className="search-button">Search</button> */}
      </div>

      <div className="user">
        <div className="user-details">SignIn/SignUp</div>

        <div className="cart">
          <Link to={'/cart'}>
          <img className="cartImg" src={cart} alt="" />
          Cart 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
