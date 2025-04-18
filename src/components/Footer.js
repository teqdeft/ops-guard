import React from 'react'
import footer from "../assets/images/footer_logo.svg"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (

    <footer>
      <div className="custom-container">
        <div className="footer_inner">
          <div className="footer_logo">
            <NavLink to="/"><img src={footer} alt="" /></NavLink>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="custom-container">
          <div className="footer_menu">
            <ul>

              <li><NavLink to="about">About Us</NavLink> <span></span></li>
              <li><NavLink to="services">Services</NavLink> <span></span></li>
              <li><NavLink to="blog">Blog</NavLink> <span></span></li>
              <li><NavLink to="contact">Contact Us</NavLink> <span></span></li>
            </ul>
          </div>
          <div className="footer_text_right">
            <p>© Copyright OPS Guard 2024, All Rights Reserved</p>
          </div>
        </div>

      </div>
    </footer>

  )
}

export default Footer
