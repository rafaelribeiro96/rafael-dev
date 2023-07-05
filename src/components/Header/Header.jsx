import React from 'react';
import './Header.css';
import linkedinsvg from '../../assets/images/linkedin.svg';
import instasvg from '../../assets/images/insta.svg';
import logoRafael from '../../assets/images/logoRafael.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="left-section-header">
        {/* <div className="logo-header">rafaeldev.com</div> */}
        <div className="logo-header">
          <img src={logoRafael} alt="Logo Rafael Ribeiro Dev" className="logo-header-img" />
        </div>
        <div className="subtitle-header">Construindo experiências digitais únicas e personalizadas</div>
      </div>
      <div className="right-section-header">
        <a href="https://www.linkedin.com/in/rafaelfeliperibeiro/" target="_blank" rel="noreferrer">
          <img src={linkedinsvg} alt="LinkedIn" className="icon-header" />
        </a>
        <a href="https://www.instagram.com/rafaelribeirodev/" target="_blank" rel="noreferrer">
            <img src={instasvg} alt="Instagram" className="icon-header" />
          </a>
      </div>
    </div>
  );
};

export default Header;
