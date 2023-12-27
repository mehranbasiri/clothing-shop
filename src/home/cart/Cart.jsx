import React, { useState, useContext } from "react";
import "./Cart.css";
import cartIcon from "../../static/cart-icon.png";
// import { CartContext } from "../../context/CartContext";
import { IoMdClose } from "react-icons/io";
import { GetProductData } from "../../data/Data";
import CartContext from "../../context2/cart/CartContext";
import CartItem from "./CartItem";
const Cart = ({ cartShow, setCartShow, id, quantity }) => {
  // const cart = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  // const productCount = cart.items.reduce(
  //   (sum, product) => sum + product.quantity,
  //   0
  // );

  const { showCart, cartItem, showHideCart } = useContext(CartContext);
  console.log(cartItems);
  const productData = GetProductData(id);
  return (
    <div className={`cart-side ${cartShow ? "cart-show" : ""}`}>
      <div className="cart-png" onClick={() => setCartShow(!cartShow)}>
        {cartShow ? (
          <IoMdClose />
        ) : (
          <>
            <img src={cartIcon} alt="" />
            <div className="circle-box-counter">{cartItems?.length}</div>
          </>
        )}
      </div>

      <div className="cart-items-container">
        <div className="cart-top-container">
          <div className="cart-png-active">
            <img src={cartIcon} alt="" />
            <div className="circle-box-counter">{cartItems?.length}</div>
          </div>
          <h2>Cart</h2>
        </div>
        {cartItems?.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} id={item.id} item={item}></CartItem>
            ))}
          </>
        ) : (
          <h3>hiiiii</h3>
        )}{" "}
      </div>
      <div className="cart-subtotal">
        <div className="subtotal-info">
          <h2>SUBTOTAL</h2>
          <div>
            <span className="subtotal-price">
              $ {cartItems?.reduce((amount, item) => item.price + amount, 0)}
            </span>
            <p>Op up 9 2dffc</p>
          </div>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
