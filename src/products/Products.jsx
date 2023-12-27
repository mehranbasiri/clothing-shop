import React from "react";

import "./Products.css";

import ProductsItem from "./ProductsItem";
const Products = ({ data, productFilter,setCartShow }) => {
  return (
    <div>
      <div className="products-list">
        {productFilter.map((product) => (
          <div className="cart">
            <ProductsItem product={product}  setCartShow={setCartShow} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
