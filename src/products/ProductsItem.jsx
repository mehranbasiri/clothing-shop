import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Context";
const ProductsItem = ({ product }) => {
  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.dispatch;
  return (
    <div className="products-item">
      <img className="image1" src={product.image} />
      <img className="image2" src={product.image2} />
      <div className="product-info">
        <h5>{product.title}</h5>
        <div className="line"></div>
        <span>${product.price}</span>
        <p>or 3 x$4.42</p>
        <button onClick={() => dispatch({ type: "ADD", payload: product })}>
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default ProductsItem;
