import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductsItem = ({ product }) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getproductQuantity(product.id);
  console.log(productQuantity);

  return (
    <div className="products-item">
      <img className="image1" src={product.image} />
      <img className="image2" src={product.image2} />
      <div className="product-info">
        <h5>{product.title}</h5>
        <div className="line"></div>
        <span>${product.price}</span>
        <button onClick={() => cart.addItemToCart(product.id)}>
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default ProductsItem;
