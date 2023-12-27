import React, { useState, useEffect } from "react";
import axios from "axios";

function GetProductData(id) {
  const [dataCart, setDataCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setDataCart(response.data);
      })

      .catch((err) => console.log(err));
  }, []);

  let productsData = dataCart.find((item) => item.id === id);

  
  console.log(productsData);
  return productsData;
}
export { GetProductData };
