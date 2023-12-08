import React, { useState } from "react";
import GithubCorner from "react-github-corner";
import cartIcon from "../static/cart-icon.png";
import "./Home.css";
const Home = () => {
  const [circle, setCricle] = useState(false);

  return (
    <div>
      salam
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
            <div
              id="circle"
              className={`${circle ? "black-circle" : "white-circle"}`}
              onClick={() => setCricle(!circle)}
            >
              <span>XS</span>
            </div>
            <div
              id="circle"
              className={`${circle ? "black-circle" : "white-circle"}`}
              onClick={() => setCricle(!circle)}
            >
              <span>S</span>
            </div>{" "}
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
        </div>
      </div>
    </div>
  );
};

export default Home;
