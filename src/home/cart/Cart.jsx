import React, { useState, useContext } from "react";
import "./Cart.css";
import cartIcon from "../../static/cart-icon.png";
import { IoMdClose } from "react-icons/io";
import { CartContext } from "../../context/Context";
import CartItem from "./CartItem";
const Cart = ({ cartShow, setCartShow }) => {
  

  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className={`cart-side ${cartShow ? "cart-show" : ""}`}>
      <div className="cart-png" onClick={() => setCartShow(!cartShow)}>
        {cartShow ? (
          <IoMdClose />
        ) : (
          <>
            <img src={cartIcon} alt="" />
            <div className="circle-box-counter">{state?.length}</div>
          </>
        )}
      </div>

      <div className="cart-items-container">
        <div className="cart-top-container">
          <div className="cart-png-active">
            <img src={cartIcon} alt="" />
            <div className="circle-box-counter">{state.length}</div>
          </div>
          <h2>Cart</h2>
        </div>
        {state?.length > 0 ? (
          <>
            {state.map((item, index) => (
              <CartItem key={index} dispatch={dispatch} item={item}></CartItem>
            ))}
          </>
        ) : (
          <p className="text-empty-cart">Add some products in the cart</p>
        )}
      </div>
      <div className="cart-subtotal">
        <div className="subtotal-info">
          <h2>SUBTOTAL</h2>
          <div>
            <span className="subtotal-price">${total}</span>
            <p>Op up 9 2dffc</p>
          </div>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
