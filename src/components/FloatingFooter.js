import React, { useState, useEffect, useRef } from 'react';
import './FloatingFooter.css';

const navItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'references', label: 'References' },
];

const FloatingFooter = ({
  activeSection,
  darkMode,
  showReferences,
  showSkills,
  onNavigate,
  onToggleDarkMode,
  onToggleReferences,
  onToggleSkills,
  onPrint,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu when clicking outside — DOM manipulation & event handling
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on Escape key — Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav
      className="floating-footer"
      role="navigation"
      aria-label="CV section navigation"
      ref={menuRef}
    >
      {/* Desktop Navigation */}
      <div className="footer-nav-desktop">
        <ul className="footer-nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`footer-nav-btn ${activeSection === item.id ? 'footer-nav-btn--active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                aria-label={`Navigate to ${item.label}`}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="footer-actions">
          <button
            className="footer-action-btn"
            onClick={onToggleSkills}
            aria-label={showSkills ? 'Hide Skills' : 'Show Skills'}
            title={showSkills ? 'Hide Skills' : 'Show Skills'}
          >
            {showSkills ? '⟨⟩' : '∅'} Skills
          </button>
          <button
            className="footer-action-btn"
            onClick={onToggleReferences}
            aria-label={showReferences ? 'Hide References' : 'Show References'}
            title={showReferences ? 'Hide References' : 'Show References'}
          >
            {showReferences ? '⟨⟩' : '∅'} Refs
          </button>
          <button
            className="footer-action-btn footer-action-btn--dark"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? '☀' : '☾'}
          </button>
          <button
            className="footer-action-btn footer-action-btn--print"
            onClick={onPrint}
            aria-label="Print CV"
            title="Print CV"
          >
            Print CV
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="footer-nav-mobile">
        <button
          className="footer-mobile-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span className="mobile-label">Navigate</span>
          <span className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>

        {menuOpen && (
          <div className="footer-mobile-menu">
            <ul className="footer-mobile-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`footer-mobile-btn ${activeSection === item.id ? 'footer-mobile-btn--active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="footer-mobile-actions">
              <button className="footer-mobile-action-btn" onClick={onToggleSkills}>
                {showSkills ? 'Hide' : 'Show'} Skills
              </button>
              <button className="footer-mobile-action-btn" onClick={onToggleReferences}>
                {showReferences ? 'Hide' : 'Show'} Refs
              </button>
              <button className="footer-mobile-action-btn" onClick={onToggleDarkMode}>
                {darkMode ? '☀ Light' : '☾ Dark'}
              </button>
              <button className="footer-mobile-action-btn" onClick={onPrint}>
                Print CV
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Copyright / Name footer info */}
      <div className="footer-info">
        <span className="footer-name">Tsepang Lebeko</span>
        <span className="footer-sep">·</span>
        <span className="footer-contact-info">+266 5627 2706</span>
        <span className="footer-sep">·</span>
        <span className="footer-copyright">© {new Date().getFullYear()}</span>
      </div>
    </nav>
  );
};

export default FloatingFooter;