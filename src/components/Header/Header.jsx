import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="left-section-header">
        <div className="logo-header">rafaeldev.com</div>
        <div className="subtitle-header">Construindo experiências digitais únicas e personalizadas</div>
      </div>
      <div className="right-section-header">
        <a href="https://www.linkedin.com/">
          <img src="linkedin-icon.png" alt="LinkedIn" className="icon-header" />
        </a>
        <a href="https://github.com/">
          <img src="github-icon.png" alt="GitHub" className="icon-header" />
        </a>
      </div>
    </div>
  );
};

export default Header;
