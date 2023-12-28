import React from "react";

import "./Products.css";

import ProductsItem from "./ProductsItem";
const Products = ({ data, productFilter, setCartShow }) => {
  return (
    <div>
      <p className="length-of-product">
        {productFilter.length} Product(s) found
      </p>

      <div className="products-list">
        {productFilter.map((product, index) => {
          product.quantity = 1;
          return (
            <div className="cart" key={index}>
              <ProductsItem product={product} setCartShow={setCartShow} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
