import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaSearch,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaBars,
  FaTimes,
  FaCalendarAlt,
} from "react-icons/fa";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      {/* =========================================================
          TOP CONTACT BAR
      ========================================================= */}

      <div className="top-header">
        <div className="top-header-container">
          {/* Phone */}
          <div className="top-item">
            <span className="top-icon">
              <FaPhoneAlt />
            </span>

            <span className="top-text">+91 70707 07261</span>
          </div>

          {/* Email */}
          <div className="top-item">
            <span className="top-icon">
              <FaEnvelope />
            </span>

            <span className="top-text">info@sleepneat.com</span>
          </div>

          {/* Location */}
          <div className="top-item location-item">
            <span className="top-icon">
              <FaMapMarkerAlt />
            </span>

            <span className="top-text">
              Sleep N Eat, Vhirgaon, Nagpur, Maharashtra 440034
            </span>
          </div>

          {/* Working Time */}
          <div className="top-item working-time">
            <span className="top-icon">
              <FaRegClock />
            </span>

            <span className="top-text">Mon - Fri: 09:00 - 05:00</span>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Pinterest">
              <FaPinterestP />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVBAR
      ========================================================= */}

      <header className={`hotel-navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          {/* =====================================================
              LOGO
          ===================================================== */}

          <div className="navbar-logo">
            <NavLink to="/" onClick={closeMenu}>
              <img src={logo} alt="Sleep N Eat Hotel" />
            </NavLink>
          </div>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav className="navbar-menu">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/rooms">Room</NavLink>

            <NavLink to="/gallery">Gallery</NavLink>

            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* =====================================================
              RIGHT SIDE ACTIONS
          ===================================================== */}

          <div className="navbar-actions">
            {/* Search */}
            <div className="navbar-search">
              <FaSearch />
              <input type="text" placeholder="Search for Rooms..." />
            </div>

            {/* Book Now */}
            <button className="book-now-btn" type="button">
              <span className="book-icon">
                <FaCalendarAlt />
              </span>

              <span>Book Now</span>
            </button>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenu(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU OVERLAY
      ========================================================= */}

      <div
        className={`mobile-overlay ${mobileMenu ? "show-mobile-menu" : ""}`}
        onClick={closeMenu}
      >
        <aside className="mobile-sidebar" onClick={(e) => e.stopPropagation()}>
          {/* Mobile Header */}
          <div className="mobile-header">
            <NavLink to="/" onClick={closeMenu}>
              <img src={logo} alt="Sleep N Eat Hotel" />
            </NavLink>

            <button onClick={closeMenu} aria-label="Close menu">
              <FaTimes />
            </button>
          </div>

          {/* Gold Divider */}
          <div className="mobile-gold-line"></div>

          {/* Mobile Navigation */}
          <nav className="mobile-nav">
            <NavLink to="/" onClick={closeMenu}>
              <span>Home</span>
              <span className="mobile-arrow">→</span>
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              <span>About</span>
              <span className="mobile-arrow">→</span>
            </NavLink>

            <NavLink to="/rooms" onClick={closeMenu}>
              <span>Room</span>
              <span className="mobile-arrow">→</span>
            </NavLink>

            <NavLink to="/gallery" onClick={closeMenu}>
              <span>Gallery</span>
              <span className="mobile-arrow">→</span>
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              <span>Contact</span>
              <span className="mobile-arrow">→</span>
            </NavLink>
          </nav>

          {/* Mobile Book Button */}
          <button className="mobile-book-btn" type="button">
            <FaCalendarAlt />

            <span>Book Now</span>
          </button>

          {/* Mobile Contact */}
          <div className="mobile-contact">
            <div className="mobile-contact-item">
              <FaPhoneAlt />
              <span>+91 70707 07261</span>
            </div>

            <div className="mobile-contact-item">
              <FaEnvelope />
              <span>info@sleepneat.com</span>
            </div>
          </div>

          {/* Mobile Socials */}
          <div className="mobile-social-links">
            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaPinterestP />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
