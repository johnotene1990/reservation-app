import React from "react";
import "./about.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aboutimage1 from "../images/aboutimage1.jpg";
import Aboutimage2 from "../images/aboutimage2.jpg";
import Aboutimage3 from "../images/aboutimage3.jpg";
import Aboutimage4 from "../images/aboutimage4.jpg";
import { FaStar, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

function SampleNextArrow(props) {
  const { Name, style, onClick } = props;
  return (
    <div
      className={Name}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { Name, style, onClick } = props;
  return (
    <div
      className={Name}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <h1 className="POP">Popular Hotels</h1>
      <Slider {...settings}>
        <div>
          <div className="card">
            <img src={Aboutimage2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">
                {" "}
                Hudak Home <FaStar className="star" />
                4.8
              </h2>
              <p className="card-icons">
                <span className="icon-circle">
                  <FaMapMarkerAlt /> Palo Alto, CA
                </span>
                <span className="icon-circle">
                  <FaDollarSign /> USD 19/day
                </span>
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectur dolori adipiscing elit,
                sed do eiusmod tempor nova inclididunt ut labore et dolore magna
                aliqua.
              </p>
              <button className="book-now">Book Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={Aboutimage1} className="card-img-top1" alt="..." />
            <div className="card-body">
              <h2 className="card-title">
                Wyatt Residency <FaStar className="star" /> 4.5
              </h2>
              <p className="card-icons">
                <span className="icon-circle">
                  <FaMapMarkerAlt /> Rome, Italy
                </span>
                <span className="icon-circle">
                  <FaDollarSign /> USD 39/day
                </span>
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectur dolori adipiscing elit,
                sed do eiusmod tempor nova inclididunt ut labore et dolore magna
                aliqua.
              </p>
              <button className="book-now">Book Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={Aboutimage3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">
                Hotel Baja <FaStar className="star" /> 4.9
              </h2>
              <p className="card-icons">
                <span className="icon-circle">
                  <FaMapMarkerAlt /> Ibisa, Spain
                </span>
                <span className="icon-circle">
                  <FaDollarSign /> USD 50/day
                </span>
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectur dolori adipiscing elit,
                sed do eiusmod tempor nova inclididunt ut labore et dolore magna
                aliqua.
              </p>
              <button className="book-now">Book Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={Aboutimage4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">
                Soho Paradise <FaStar className="star" /> 5.0
              </h2>
              <p className="card-icons">
                <span className="icon-circle">
                  <FaMapMarkerAlt /> Arizona, RAK
                </span>
                <span className="icon-circle">
                  <FaDollarSign /> USD 99/day
                </span>
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectur dolori adipiscing elit,
                sed do eiusmod tempor nova inclididunt ut labore et dolore magna
                aliqua.
              </p>
              <button className="book-now">Book Now</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
