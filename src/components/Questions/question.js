import React, { useState } from "react";
import Questimage from "../images/questimage1.jpg";
import Card from "react-bootstrap/Card";
import { FaPlus, FaMinus } from "react-icons/fa";

const FQA = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleDropdown = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div style={{ display: "flex", marginTop: "10%", marginRight: "5%" }}>
      <Card
        style={{
          width: "110rem",
          marginRight: "5%",
          marginLeft: "5%",
          border: "none",
        }}
      >
        <Card.Img variant="top" src={Questimage} />
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
                Questions
              </h1>
              <p
                className="card-text"
                style={{ marginBottom: "15%", fontSize: "20px" }}
              >
                Here are some frequently asked questions about our hotels from
                our loving customers. Should you have any other questions, feel
                free to reach out via the contact form below.
              </p>
            </div>
            <div style={{ marginTop: "5%" }}>
              <div className="serv" style={{ display: "flex" }}>
                <h1 style={{ fontSize: "23px" }}>
                  Is lunch provided free of cost?
                </h1>
                <h6
                  style={{
                    marginLeft: "35%",
                    color: "blue",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleDropdown(1)}
                >
                  {isOpen[1] ? <FaMinus /> : <FaPlus />}
                </h6>
              </div>
              {isOpen[1] && (
                <div style={{ marginLeft: "5%", marginTop: "1%", fontSize: "18px" }}>
                  <p>
                    Yes, if you have a memebership card with us, otherwise Lunch
                    is not provided free of cost but per menu. However, we offer
                    various meal options at reasonable prices.
                  </p>
                </div>
              )}
              <div
                className="serv"
                style={{ display: "flex", marginTop: "5%" }}
              >
                <h1 style={{ fontSize: "23px" }}>
                  Do you have bedroom suite?
                </h1>
                <h6
                  style={{
                    marginLeft: "38%",
                    color: "blue",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleDropdown(2)}
                >
                  {isOpen[2] ? <FaMinus /> : <FaPlus />}
                </h6>
              </div>
              {isOpen[2] && (
                <div style={{ marginLeft: "5%", marginTop: "1%", fontSize: "18px" }}>
                  <p>
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Commodi velit quae eveniet. Animi ducimus, alias doloribus
                    adipisci natus dolorum, iure eius debitis fuga ipsa deserunt
                    soluta inventore laboriosam nemo illo.{" "}
                  </p>
                </div>
              )}
            </div>
            <div style={{ marginTop: "5%" }}>
              <div className="serv" style={{ display: "flex" }}>
                <h1 style={{ fontSize: "23px" }}>
                  Are Wi-Fi costs included in the price?
                </h1>
                <h6
                  style={{
                    marginLeft: "25%",
                    color: "blue",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleDropdown(3)}
                >
                  {isOpen[3] ? <FaMinus /> : <FaPlus />}
                </h6>
              </div>
              {isOpen[3] && (
                <div style={{ marginLeft: "5%", marginTop: "1%", fontSize: "18px" }}>
                  <p>
                    Yes, Wifi is provided at affordable price. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Commodi velit quae eveniet. Animi ducimus, alias doloribus
                    adipisci natus dolorum, iure eius debitis fuga ipsa deserunt
                    soluta inventore laboriosam nemo illo..
                  </p>
                </div>
              )}
              <div
                className="serv"
                style={{ display: "flex", marginTop: "5%" }}
              >
                <h1 style={{ fontSize: "23px" }}>
                  Where can I reach you for support?
                </h1>
                <h6
                  style={{
                    marginLeft: "30%",
                    color: "blue",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleDropdown(4)}
                >
                  {isOpen[4] ? <FaMinus /> : <FaPlus />}
                </h6>
              </div>
              {isOpen[4] && (
                <div style={{ marginLeft: "5%", marginTop: "1%", fontSize: "18px" }}>
                  <p>You can reach us through our support team at support@example.com 
                    or call us at (123) 456-7890.  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Commodi velit quae eveniet. Animi ducimus, alias doloribus
                    adipisci natus dolorum, iure eius debitis fuga ipsa deserunt
                    soluta inventore laboriosam nemo illo..</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FQA;
