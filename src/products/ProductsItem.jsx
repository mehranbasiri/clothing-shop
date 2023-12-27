import React, { useEffect, useState } from "react";
import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
import CartContext from "../context2/cart/CartContext";
const ProductsItem = ({ product, setCartShow }) => {
  const { addToCart } = useContext(CartContext);
  // const productQuantity = cart.getproductQuantity(product.id);

  // function addToCartButton() {
  //   cart.addItemToCart(product.id);
  //   setCartShow(true);
  // }

  return (
    <div className="products-item">
      <img className="image1" src={product.image} />
      <img className="image2" src={product.image2} />
      <div className="product-info">
        <h5>{product.title}</h5>
        <div className="line"></div>
        <span>${product.price}</span>
        <button onClick={() => addToCart(product)}>Add to Card</button>
      </div>
    </div>
  );
};

export default ProductsItem;
