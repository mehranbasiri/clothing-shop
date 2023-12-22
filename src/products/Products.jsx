import React from "react";

import "./Products.css";

import ProductsItem from "./ProductsItem";
const Products = ({ data, productFilter }) => {
  return (
    <div>
      <div className="products-list">
        {productFilter.map((product) => (
          <div className="cart">
            <ProductsItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
