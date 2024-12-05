import React from "react";
import Serviceimag from "../images/serviceimage.jpg";
import Card from "react-bootstrap/Card";

const Service = () => {
  return (
    <div style={{ display: "flex", marginTop: "15%", marginRight: "5%" }}>
      <Card
        style={{
          width: "110rem",
          marginRight: "5%",
          marginLeft: "5%",
          border: "none",
        }}
      >
        <Card.Img variant="top" src={Serviceimag} />
      </Card>
      <div className="mt-3" style={{ fontSize: "15px" }}>
        <div>
          <div className="body ">
            <div className="body">
              <h1
                className="POP"
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  marginBottom: "14px",
                }}
              >
                We have the best service.
              </h1>
              <p
                className="card-text"
                style={{ marginBottom: "15%", fontSize: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div style={{ marginTop: "5%" }}>
              <div className="serv" style={{ display: "flex" }}>
                <h5 style={{ color: "blue", fontSize: "30px" }}>192</h5>
                <h5
                  style={{ marginLeft: "55%", color: "blue", fontSize: "30px" }}
                >
                  479
                </h5>
              </div>
              <div style={{ display: "flex" }}>
                <h5 style={{ fontSize: "30px" }}>Countries</h5>
                <h5 style={{ marginLeft: "40%", fontSize: "30px" }}>Hotel</h5>
              </div>
            </div>
            <div style={{ marginTop: "15%" }}>
              <div style={{ display: "flex" }}>
                <h5 style={{ color: "blue", fontSize: "30px" }}>2093</h5>
                <h5
                  style={{ marginLeft: "50%", color: "blue", fontSize: "30px" }}
                >
                  10347
                </h5>
              </div>
              <div style={{ display: "flex" }}>
                <h5 style={{ fontSize: "30px" }}>Rooms</h5>
                <h5 style={{ marginLeft: "45%", fontSize: "30px" }}>Workers</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
