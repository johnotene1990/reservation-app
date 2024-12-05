import React from 'react';
import './footer.css'; // Import the CSS file
import { FaEnvelopeOpenText } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="newsletter-section">
        <div className='news'>
        <FaEnvelopeOpenText size={70} color="green" />
          <div>
            <h1>Newsletter</h1>
            <p>Subscribe now to get our latest blog posts.</p>
          </div>
        </div>
        <div className="email-input-container">
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe Now</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo d-flex justify-content-center alignItem-center">
        <h1 className='text-white p-2 rounded' style={{background: 'purple'}}>TR</h1>
          <h2>Treact</h2>
        </div>
        <ul className="footer-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>Reviews</li>
        </ul>
        <div className="footer-social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="footer-copyright">
          <p>© Copyright 2020, Treact Inc. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

