import React, { useEffect, useState } from "react";
import axios from "axios";
import GithubCorner from "react-github-corner";
import "./Home.css";
import Products from "../products/Products";
import Cart from "./cart/Cart";
const Home = () => {
  const [circle, setCricle] = useState([]);
  const [data, setData] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const [cartToggle, setCartToggle] = useState(false);

  const [cartShow, setCartShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sizeItem = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setData(response.data);
        setProductFilter(response.data);
        setIsLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (e) => {
    const filterValue = e.target.getAttribute("value");

    if (filterValue === "XS") {
      setProductFilter(data.filter((itm) => itm.availableSizes[1] === "XS"));
      setCricle(["XS"]);
    }
    if (filterValue === "L") {
      setProductFilter(data.filter((itm) => itm.availableSizes[1] === "L"));
      setCricle(["L"]);
    }
    if (filterValue === "XL") {
      setProductFilter(data.filter((itm) => itm.availableSizes[2] === "XL"));
      setCricle(["XL"]);
    }
    if (filterValue === "XXL") {
      setProductFilter(data.filter((itm) => itm.availableSizes[3] === "XXL"));
      setCricle(["XXL"]);
    }
    if (filterValue === "S") {
      setProductFilter(data.filter((itm) => itm.availableSizes[0] === "S"));
      setCricle(["S"]);
    }
    if (filterValue === "M") {
      setProductFilter(data.filter((itm) => itm.availableSizes[0] === "M"));
      setCricle(["M"]);
    }
    if (filterValue === "ML") {
      setProductFilter(data.filter((itm) => itm.availableSizes[1] === "ML"));
      setCricle(["ML"]);
    } else {
      console.log(false);
    }
  };

  return (
    <div>
      <GithubCorner
        href="https://github.com/username/repo"
        bannerColor="#151513"
        octoColor="#fff"
        size={80}
        direction="left"
      />
      <div className="cart-box" onClick={() => setCartToggle(!cartToggle)}>
        <Cart cartShow={cartShow} setCartShow={setCartShow} />
      </div>
      <div className="products-page">
        <div className="left-side">
          <h2>Sizes:</h2>
          <div className="size-items">
            {sizeItem.map((item, index) => (
              <div
                key={index}
                className={`circle ${circle == item ? "active" : ""}`}
                value={item}
                onClick={handleFilter}
              >
                <span value={item} onClick={handleFilter}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p>Leave a star on Github if this repository was useful </p>

          <a href="https://github.com/mehranbasiri/clothing-shop.git">Star</a>
        </div>
        <div className="right-side">
          <Products
            data={data}
            productFilter={productFilter}
            setCartShow={setCartShow}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
