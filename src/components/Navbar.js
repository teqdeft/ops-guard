import React, { useState } from 'react';
import header from "../assets/images/header-logo.svg";
import menu from "../assets/images/menu.png";
import close from "../assets/images/close_icon.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header>
      <div className="custom-container">
        <div className="header-inner">
          <div className="header-logo-section">
            <NavLink to="/"><img src={header} alt="Logo" /></NavLink>
          </div>

          {/* Hamburger / Close Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <img src={isMenuOpen ? close : menu} alt="Menu Toggle" />
          </div>

          {/* Menu */}
          <div className={`header-menu-section ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) => isActive ? 'font-bold' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="services"
                  className={({ isActive }) => isActive ? 'font-bold' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blog"
                  className={({ isActive }) => isActive ? 'font-bold' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) => isActive ? 'font-bold' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;