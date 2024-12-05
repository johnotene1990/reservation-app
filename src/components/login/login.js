import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    alert(`Logged in with phone number: ${phoneNumber}`);
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleLogin} className="width-30px"><Link to="/" style={{color: 'white'}}>Login</Link></button>
    </div>
  );
};

export default Login;
