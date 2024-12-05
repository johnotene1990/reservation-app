import React from "react";
import "./blog.css";
import Image from "../images/blogimage1.jpg";
import Image2 from "../images/blogimage2.jpg";
import Blogimage3 from "../images/blogimageside1.jpg";
import Blogimage4 from "../images/blogimageside2.jpg";
import Blogimage5 from "../images/blogimageside3.jpg";
import Blogimage6 from "../images/blogimageside4.jpg";
import Blogimage7 from "../images/blogimageside5.jpg";
import Testpic from "../images/testimpic1.jpg";
import Tespic from "../images/testimpic2.jpg";

const BlogPosts = () => {
  return (
    <div className="blog-container">
      <div className="popular-posts">
        <h2>Popular Posts</h2>
        <div className="posty">
          <div className="pot">
          <div className="post">
            <img src={Image} alt="travel safety" className="post-image" />
            <div className="post-content">
              <h3>Tips on how to travel safely in foreign countries</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <div className="post-author">
                <img
                  src={Testpic}
                  alt="Charlotte Delos"
                  className="author-image"
                />
                <p>
                  Charlotte Delos
                  <br />
                  <span>Travel Advocate</span>
                </p>
              </div>
            </div>
          </div>
          </div>

            <div className="pos">
          <div className="post">
            <div className="post1">
            <img src={Image2} alt="beach life" className="post-image" />
            <div className="post-content">
              <h3>Enjoying the beach life while on vacation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <div className="post-author">
                <img src={Tespic} alt="Adam Cuppy" className="author-image" />
                <p>
                  Adam Cuppy
                  <br />
                  <span>Vlogger</span>
                </p>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="recent-posts">
        <h2>Recent Posts</h2>
        <ul className="Rpost">
          <li>
            <div>
              <h3>Getting the most out of your vacation</h3>
              <p>Aaron Patterson</p>
            </div>
            <div className="imgpost">
            <img src={Blogimage3} alt="post thumbnail" />
            </div>
            
          </li>
          <li>
            <div>
              <h3>Choosing the perfect Safaris in Africa</h3>
              <p>Sam Phipphen</p>
            </div>
            <div className="imgpost">
              <img src={Blogimage4} alt="post thumbnail" />
            </div>
          </li>
          <li>
          <div>
              <h3>Hiking during the monsoon in Asia</h3>
              <p>Tony Hawk</p>
            </div>
            <div className="imgposti">
            <img src={Blogimage5} alt="post thumbnail" />
            </div>
          </li>
          <li>
          <div>
              <h3>Must carry items while travelling to Thailand</h3>
              <p>Himali Turn</p>
            </div>
            <div className="imgposty">
            <img src={Blogimage6} alt="post thumbnail" />
            </div>
          </li>
          <li>
          <div>
              <h3>An extremely funny trip to the Swiss Alps</h3>
              <p>Tony Stark</p>
            </div>
            <div className="imgpostt">
            <img src={Blogimage7} alt="post thumbnail" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogPosts;
