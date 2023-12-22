import React, { useState,useContext } from "react";
import "./Cart.css";
import cartIcon from "../../static/cart-icon.png";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const [cartShow, setCartShow] = useState(false);
  return (
    <div className={`cart-side ${cartShow ? "cart-show" : ""}`}>
      <div className="cart-png" onClick={() => setCartShow(!cartShow)}>
        {cartShow ? (
          <IoMdClose />
        ) : (
          <>
            <img src={cartIcon} alt="" />
            <div className="circle-box-counter">0</div>
          </>
        )}
      </div>
      <div className="cart-items-container">
        <div className="cart-top-container">
          <div className="cart-png-active">
            <img src={cartIcon} alt="" />
            <div className="circle-box-counter">0</div>
          </div>
          <h2>Cart</h2>
        </div>

        <div className="cart-items">
          <div className="cart-item">
            <img src="https://media.vogue.co.uk/photos/6384d7e061c7075f073b1e10/2:3/w_1920,c_limit/191022_Shot_13_148_v3_QC_F300.jpg" />
            <div className="cart-info">
              <div className="cart-info-left">
                <h4 className="cart-product-title">
                  basic stay crovvy off white
                </h4>
                <p className="cart-product-type">Wine</p>
                <p className="cart-product-quantity">Quantity:1</p>
              </div>

              <div className="cart-info-right">
                <IoMdClose />
                <span className="cart-product-price">$13.25</span>
                <div className="quantity-btns">
                  <button>-</button>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-subtotal">
        <div className="subtotal-info">
          <h2>SUBTOTAL</h2>
          <div>
            <span className="subtotal-price">$36.60</span>
            <p>Op up 9 2dffc</p>
          </div>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
