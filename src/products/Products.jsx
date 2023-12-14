import React, { useEffect, useState } from "react";
import axios, { getAdapter } from "axios";
import "./Products.css";
const Products = ({data,productFilter}) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/products")
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log("data" + products);

  return (
    <div>
      <div className="products-list">
        {productFilter.map((item) => (
          <div className="products-item">
            <img className="image1" src={item.image} />
            <img className="image2" src={item.image2} />
            <div className="product-info">
              <h5>{item.title}</h5>
              <div className="line"></div>
              <span>${item.price}</span>
              <button>Add to Card</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
