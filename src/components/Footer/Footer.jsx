import React from 'react';
import './Footer.css';
import instasvg from '../../assets/images/insta.svg';
import linkedinsvg from '../../assets/images/linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <span className="copyright-content"><span className="color-copyright">Copyright © 2023 </span><span className="color-autor">rafaeldev.com </span><span className="color-copyright">by </span><span className="color-autor"><a className="color-autor" href="https://rafaelribeiro96.github.io/" target="_blank" rel="noreferrer">Rafael Ribeiro</a></span></span>
        <div className="social-media-footer">
          <a href="https://www.instagram.com/rafaelribeirodev/" target="_blank" rel="noreferrer">
            <img src={instasvg} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/rafaelfeliperibeiro/" target="_blank" rel="noreferrer">
            <img src={linkedinsvg} alt="Linkedin" />
          </a>
          </div>    
      </div>
    </footer>
  );
};

export default Footer;
