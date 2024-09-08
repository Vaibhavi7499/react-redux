import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useSelector } from "react-redux";

const NavBar = () => {

   let cart = useSelector((state)=>{
        return state;
    })

    let totalAmount = cart.reduce((a,c)=>{
          return a + c?.price
    },0)

  return (
    <div className="p-nav">
      <nav className="navbar navbar-light bg-light">
        <span>
          <h1>Total Price {totalAmount}₹</h1>
        </span>
        <span className="cart-notification">
          <Link to="/view-cart">
            <span>Cart</span>
            <span className="total-cart">{cart?.length}</span>
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
