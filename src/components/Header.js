import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="cv-header cv-section" role="banner">
      <div className="header-main">
        <h1 className="header-name">Tsepang Lebeko</h1>
        <p className="header-title">Software Engineering & Multimedia Student</p>
      </div>
      <div className="header-contact" role="contentinfo">
        <div className="contact-item">
          <span className="contact-icon" aria-hidden="true">✉</span>
          <a href="mailto:tsepang.lebeko@student.limkokwing.ac.ls" className="contact-link">
            tsepang.lebeko@student.limkokwing.ac.ls
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-icon" aria-hidden="true">☎</span>
          <a href="tel:+26656272706" className="contact-link">+266 5627 2706</a>
        </div>
        <div className="contact-item">
          <span className="contact-icon" aria-hidden="true">⌖</span>
          <span className="contact-text">Maseru, Lesotho</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon" aria-hidden="true">⎇</span>
          <a href="https://linkedin.com/in/tsepang-lebeko" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-icon" aria-hidden="true">⟁</span>
          <a href="https://github.com/tsepang-lebeko" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;