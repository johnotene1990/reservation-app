import React from "react";
import "./tour.css";
import { IoMdTrendingUp } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Tour2 from "../images/tourimage2.jpg";
import Tour1 from "../images/tourimage.jpg";

const TrendingTours = () => {
  return (
    <div className="tours-container">
      <div className="tour">
        <h2 className="tours-heading">Trending Tours</h2>
        <p className="tours-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
          minim veniam.
        </p>
        <a href="/" className="view-all-tours">
          View All Tours →
        </a>
      </div>

      <div className="tours-grid">
        {/* First Tour */}
        <div className="tour-card">
          <img src={Tour1} className="card-img-top" alt="..." />
          <div className="tour-content">
            <div className="beach">
              <h3 className="tour-type">Beachfront</h3>
              <p className="tour-price">$99 per day</p>
            </div>
            <h4 className="tour-title">
              A Trip to the Bahamas and the Carribean Ocean
            </h4>
            <div className="tour-meta">
              <span className="meta-item">
                {" "}
                <IoMdTrendingUp />
                Trending
              </span>
              <span className="meta-item">
                {" "}
                <MdAccessTime />7 Days Tour
              </span>
              <span className="meta-item">
                <CiLocationOn />
                Africa
              </span>
            </div>
            <button className="book-now">Book Now</button>
          </div>
        </div>

        {/* Second Tour */}
        <div className="tour-card">
          <img src={Tour2} className="card-img-top" alt="..." />
          <div className="tour-content">
            <div className="beach">
              <h3 className="tour-type">Cruise</h3>
              <p className="tour-price">$169 per day</p>
            </div>
            <h4 className="tour-title">
              Cruise to the Mariana Trench and the Phillipines
            </h4>
            <div className="tour-meta">
              <span className="meta-item">
                <IoMdTrendingUp /> Trending
              </span>
              <span className="meta-item">
                <MdAccessTime />
                15 Days Tour
              </span>
              <span className="meta-item">
                <CiLocationOn />
                Australia
              </span>
            </div>
            <button className="book-now">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTours;