import React from "react";

import { GetProductData } from "../../data/Data";
import { IoMdClose } from "react-icons/io";

const CartItem = ({ item, dispatch }) => {
  return (
    <div className="cart-items">
      <div className="cart-item">
        <img src={item.image} />
        <div className="cart-info">
          <div className="cart-info-left">
            <h4 className="cart-product-title">{item.title}</h4>
            <p className="cart-product-type">{item.style}</p>
            <p className="cart-product-quantity">Quantity:{item.quantity}</p>
          </div>

          <div className="cart-info-right">
            <IoMdClose
              onClick={() => dispatch({ type: "REMOVE", payload: item })}
            />
            <span className="cart-product-price">
              ${Math.floor(item.price * item.quantity)}
            </span>
            <div className="quantity-btns">
              <button
                style={item.quantity === 1 ? { opacity: 0.2 } : { opacity: 1 }}
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}
              >
                -
              </button>
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
