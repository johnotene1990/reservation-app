import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav
        className="d-flex fixed-top"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div className="d-flex" style={{ marginLeft: "40px" }}>
          <h1
            className="text-white p-2 rounded"
            style={{ background: "purple" }}
          >
            TR
          </h1>
          <h1 className="fs-5 w-50 ps-1 mt-2" style={{ color: "#6610f2" }}>
            TravelReservation
          </h1>
        </div>

        <ul className="d-flex list-unstyled mx-auto mt-3 fw-semibold">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="px-4">
            <Link to="/service">Service</Link>
          </li>
          <li className="px-4">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="px-4" style={{ marginLeft: "30%" }}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
