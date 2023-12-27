import React, { useState, useContext } from "react";

import { GetProductData } from "../../data/Data";
import { IoMdClose } from "react-icons/io";
// import { CartContext } from "../../context/CartContext";
import CartContext from "../../context2/cart/CartContext";

const CartItem = ({ id, item, quantity }) => {
  // const cart = useContext(CartContext);

  // const productData = GetProductData(id);
  const [count, setCount] = useState(1);

  const { cartItems, removeItem, incerement, updateQuantity } =
    useContext(CartContext);

  return (
    <div className="cart-items">
      <div className="cart-item">
        <img src={item.image} />
        <div className="cart-info">
          <div className="cart-info-left">
            <h4 className="cart-product-title">{item.title}</h4>
            <p className="cart-product-type">{item.style}</p>
            <p className="cart-product-quantity">Quantity:{count}</p>
          </div>

          <div className="cart-info-right">
            <IoMdClose onClick={() => removeItem(item.id)} />
            <span className="cart-product-price">${item.price * count}</span>
            <div className="quantity-btns">
              <button onClick={() => setCount(count - 1)}>-</button>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
