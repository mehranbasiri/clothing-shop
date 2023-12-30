import React from "react";

import "./Products.css";

import ProductsItem from "./ProductsItem";
const Products = ({ isLoading, productFilter, setCartShow }) => {
  return (
    <div>
      <p className="length-of-product">
        {productFilter.length} Product(s) found
      </p>

      <div className="products-list">
        {isLoading ? (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : (
          <>
            {productFilter.map((product, index) => {
              product.quantity = 1;
              return (
                <div className="cart" key={index}>
                  <ProductsItem product={product} setCartShow={setCartShow} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
