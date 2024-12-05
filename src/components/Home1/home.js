import React from "react";
import "./home1.css";
import Image from "../images/navimage2.jpg";
import Support from "../support/support";
import Service from "../service/service";
import About from "../about/about";
import Blog from "../blog/blog";
import Testimony from "../testimony/testimony";
import Question from "../Questions/question";
import Tour from "../tour/tour";

function Home1() {
  return (
    <div >
      <div className="con">
        <div className='title-left'>
          <div className='title'>
            <h1>Find Perfect Hotels</h1>
            <h2>anywhere you go</h2>
            <p>We've been in the hotels business across the world for 5 years now.
             We assure you that you will always enjoy your stay with us. </p>
          </div>
          <div className='big-button'>
            <button className='btn' style={{background: 'purple', color: 'white', padding: '8px', width: '35%', marginRight: '20px'}}>Sign Up</button>
            <button className='btn' style={{background: 'grey', color: 'white', padding: '8px', width: '35%', marginRight: '20px'}}>Search Hotels</button>
          </div>
        </div>
      <div className="image-right">
        <img src={Image} alt="" />
      </div>
      </div>

      <Support />
        <About />
        <Tour />
        <Service />
        <Blog />
        <Testimony />
        <Question /> 
    </div>
  );
}

export default Home1;
