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
import Availability from "../../Pages/Availability";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);

  const handleBookNow = () => {
    setIsAvailabilityOpen(true);
  };

  const closeAvailability = () => {
    setIsAvailabilityOpen(false);
  };

  const handleMobileBookNow = () => {
    setMobileMenu(false);
    setIsAvailabilityOpen(true);
  };

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

            <span className="top-text">
              <a href="tel:+917070707261">+91 7070707261</a>
            </span>
          </div>

          {/* Email */}
          <div className="top-item">
            <span className="top-icon">
              <FaEnvelope />
            </span>

            <span className="top-text">
              <a href="mailto:sleepneat@hotel.com">sleepneat@hotel.com</a>
            </span>
          </div>

          {/* Location */}
          <div className="top-item location-item">
            <span className="top-icon">
              <FaMapMarkerAlt />
            </span>

            <span className="top-text">
              Plot no 34, Vihirgaon umred road, near villa 24 Outer Ring Road,
              Nagpur 441204.
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
            <a
              href="https://www.facebook.com/profile.php?id=61594595604411"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/hotel_sleep_n_eat?cplk=MTczZGZkZjB1dHd4eA%3D%3D&utm_source=qr"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
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
          {/* LOGO */}
          <div className="navbar-logo">
            <NavLink to="/" onClick={closeMenu}>
              <img src={logo} alt="Sleep N Eat Hotel" />
            </NavLink>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="navbar-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/rooms">Room</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* RIGHT SIDE ACTIONS */}
          <div className="navbar-actions">
            {/* Mobile Book Now Button */}
            <button
              type="button"
              className="mobile-book-btn"
              onClick={handleMobileBookNow}
            >
              <FaCalendarAlt />
              <span>Book Now</span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenu(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenu}
            aria-controls="mobile-sidebar"
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
        aria-hidden={!mobileMenu}
      >
        <aside
          id="mobile-sidebar"
          className="mobile-sidebar"
          onClick={(e) => e.stopPropagation()}
        >
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <NavLink to="/" onClick={closeMenu}>
              <img src={logo} alt="Sleep N Eat Hotel" />
            </NavLink>

            <button type="button" onClick={closeMenu} aria-label="Close menu">
              <FaTimes />
            </button>
          </div>

          {/* GOLD DIVIDER */}
          <div className="mobile-gold-line"></div>

          {/* MOBILE NAVIGATION */}
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

          {/* MOBILE BOOK NOW BUTTON */}
          <button
            type="button"
            className="mobile-book-btn"
            onClick={handleMobileBookNow}
          >
            <FaCalendarAlt />
            <span>Book Now</span>
          </button>

          {/* MOBILE CONTACT */}
          <div className="mobile-contact">
            <div className="mobile-contact-item">
              <FaPhoneAlt />
              <a href="tel:+917070707261">+91 7070707261</a>
            </div>

            <div className="mobile-contact-item">
              <FaEnvelope />
              <a href="mailto:sleepneat@hotel.com">sleepneat@hotel.com</a>
            </div>
          </div>

          {/* MOBILE SOCIAL LINKS */}
          <div className="mobile-social-links">
            <a
              href="https://www.facebook.com/profile.php?id=61594595604411"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/hotel_sleep_n_eat?cplk=MTczZGZkZjB1dHd4eA%3D%3D&utm_source=qr"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </aside>
      </div>

      {/* AVAILABILITY MODAL */}
      {isAvailabilityOpen && (
        <Availability room={null} onClose={closeAvailability} />
      )}
    </>
  );
};

export default Navbar;