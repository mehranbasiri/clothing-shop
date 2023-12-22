import React, { useState, useEffect } from "react";
import axios from "axios";

// export const Data = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products")
//       .then((response) => {
//         setData(response.data);
//       })

//       .catch((err) => console.log(err));
//   }, []);
// }

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

  let productData = dataCart.find((item) => item.id === id);

  return productData;
}
export  { GetProductData };
