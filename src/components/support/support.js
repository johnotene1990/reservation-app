import React from "react";
import "./support.css";
import Home1pic from "../images/home1.png";
import Home2pic from "../images/home2.jpg";
import Home3pic from "../images/home3.jpg";

const Support = () => {
  return (
    <div className="container">
      <div className="featureBox">
        <div className="icon">
          <img src={Home1pic} alt="" />
        </div>
        <h3 className="title">Secure</h3>
        <p className="description">
          We strictly only deal with vendors that provide top-notch security.
        </p>
        <a href="/" className="link">
          Learn More →
        </a>
      </div>

      <div className="featureBox">
        <div className="icon">
          <img src={Home2pic} alt="" />
        </div>
        <h3 className="title">24/7 Support</h3>
        <p className="description">Lorem ipsum dolor sit amet, consectetur.</p>
        <a href="/" className="link">
          Learn More →
        </a>
      </div>

      <div className="featureBox">
        <div className="icon">
          <img src={Home3pic} alt="" />
        </div>
        <h3 className="title">Customizable</h3>
        <p className="description">Lorem ipsum dolor sit amet, consectetur.</p>
        <a href="/" className="link">
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default Support;
