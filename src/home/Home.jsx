import React, { useEffect, useState } from "react";
import axios from "axios";
import GithubCorner from "react-github-corner";
import cartIcon from "../static/cart-icon.png";
import "./Home.css";
import Products from "../products/Products";
const Home = () => {
  const [circle, setCricle] = useState(false);
  const [data, setData] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const sizeItem = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setData(response.data);
        setProductFilter(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (e) => {
    const filterValue = e.target.getAttribute("value");
    console.log(filterValue);
    if (filterValue === "XS") {
      setProductFilter(data.filter((itm) => itm.availableSizes[1] === "XS"));
      setCricle(true);
    }
    if (filterValue === "L") {
      setProductFilter(data.filter((itm) => itm.availableSizes[1] === "L"));
      setCricle(true);
    }
    if (filterValue === "XL") {
      setProductFilter(data.filter((itm) => itm.availableSizes[2] === "XL"));
    }
    if (filterValue === "XXL") {
      setProductFilter(data.filter((itm) => itm.availableSizes[3] === "XXL"));
    }
    if (filterValue === "S") {
      setProductFilter(data.filter((itm) => itm.availableSizes[0] === "S"));
    }
    if (filterValue === "M") {
      setProductFilter(data.filter((itm) => itm.availableSizes[0] === "M"));
    }
    if (filterValue === "ML") {
      setProductFilter(data.filter((itm) => itm.availableSizes[1] === "ML"));
    } else{
      console.log(false);
      setCricle(false);
    }
  };

  console.log(productFilter);
  // const handleFilter = (event) => {
  //   setProductFilter(data.filter((f) => f.style === "Wine"));
  // };
  // console.log(productFilter);
  return (
    <div>
      <GithubCorner
        href="https://github.com/username/repo"
        bannerColor="#151513"
        octoColor="#fff"
        size={80}
        direction="left"
      />
      <div className="cart-png">
        <img src={cartIcon} alt="" />
        <div className="circle-box-counter">0</div>
      </div>
      <div className="products-page">
        <div className="left-side">
          <h2>Sizes:</h2>
          <div className="size-items">
            {sizeItem.map((item, index) => (
              <div
                key={index}
                className={
                  circle ? "circle black-circle" : "circle white-circle"
                }
                value={item}
                onClick={handleFilter}
              >
                <span value={item} onClick={handleFilter}>
                  {item}
                </span>
              </div>
            ))}
            {/* <div
              className={`${
                circle ? "circle black-circle" : "circle white-circle"
              }`}
              onClick={() => setCricle(true)}
            >
              <span>XS</span>
            </div>{" "}
            <div
              className={`${
                circle ? "circle black-circle" : "circle white-circle"
              }`}
              onClick={toggleCircle}
            >
              <span>XS</span>
            </div>{" "}
            <div
              className={`${
                circle ? "circle black-circle" : "circle white-circle"
              }`}
              onClick={toggleCircle}
            >
              <span>XS</span>
            </div>{" "}
            <div
              className={`${
                circle ? "circle black-circle" : "circle white-circle"
              }`}
              onClick={toggleCircle}
            >
              <span>XS</span>
            </div>{" "}
            <div
              className={`${
                circle ? "circle black-circle" : "circle white-circle"
              }`}
              onClick={toggleCircle}
            >
              <span>XS</span>
            </div> */}
          </div>
        </div>
        <div className="right-side">
          <p>products found</p>
          <Products data={data} productFilter={productFilter} />
        </div>
      </div>
    </div>
  );
};

export default Home;
