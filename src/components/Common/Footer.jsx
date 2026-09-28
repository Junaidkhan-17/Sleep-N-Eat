import React from "react";

import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import Testimonial1 from "../../assets/Testimonial1.jpg";
import Testimonial2 from "../../assets/Testimonial2.jpg";
import Testimonial3 from "../../assets/Testimonial3.jpg";
import Testimonial4 from "../../assets/Testimonial4.png";

import logo from "../../assets/logo.png";
import webdocklogo from "../../assets/webdocklogo.png";

import "./Footer.css";

/* =========================================================
   FOOTER DATA
========================================================= */

const footerQuickLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About us",
    path: "/about",
  },
  {
    label: "Rooms",
    path: "/rooms",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

const footerSocialLinks = [
  {
    id: "facebook",
    label: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/",
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/",
  },
];

/*
 * Replace these images later with your actual
 * Instagram post assets.
 */

const instagramPosts = [
  {
    id: "instagram-001",
    image: Testimonial1,
    alt: "Sleep N Eat Instagram post 1",
  },
  {
    id: "instagram-002",
    image: Testimonial2,
    alt: "Sleep N Eat Instagram post 2",
  },
  {
    id: "instagram-003",
    image: Testimonial3,
    alt: "Sleep N Eat Instagram post 3",
  },
  {
    id: "instagram-004",
    image: Testimonial4,
    alt: "Sleep N Eat Instagram post 4",
  },
  {
    id: "instagram-005",
    image: Testimonial1,
    alt: "Sleep N Eat Instagram post 5",
  },
  {
    id: "instagram-006",
    image: Testimonial2,
    alt: "Sleep N Eat Instagram post 6",
  },
];

/* =========================================================
   FOOTER COMPONENT
========================================================= */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">

        <div className="footer-container">

          {/* =================================================
              BRAND / ABOUT
          ================================================= */}

          <div className="footer-brand">

            <a
              href="/"
              className="footer-logo"
              aria-label="Sleep N Eat Home"
            >
              <img
                src={logo}
                alt="Sleep N Eat"
                className="footer-logo-image"
              />
            </a>

            <p className="footer-description">
              <strong>Sleep N Eat</strong> includes a broad
              range of activities, and the many firms and
              their members often define these practices.
            </p>

            {/* Social Links */}

            <div className="footer-socials">

              {footerSocialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  className="footer-social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}

            </div>

          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="footer-column footer-quick-links">

            <h3 className="footer-column-title">
              Quick Links
            </h3>

            <nav
              className="footer-navigation"
              aria-label="Footer navigation"
            >
              {footerQuickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.path}
                  className="footer-navigation-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>

          </div>

          {/* =================================================
              GET IN TOUCH
          ================================================= */}

          <div className="footer-column footer-contact">

            <h3 className="footer-column-title">
              Get In Touch
            </h3>

            {/* Phone */}

            <div className="footer-contact-item">

              <span
                className="footer-contact-icon"
                aria-hidden="true"
              >
                <FiPhone />
              </span>

              <div className="footer-contact-content">

                <a href="tel:+917070707261">
                  +91 70707 07261
                </a>

                <a href="tel:+917070707261">
                  +91 70707 07261
                </a>

              </div>

            </div>

            {/* Email */}

            <div className="footer-contact-item">

              <span
                className="footer-contact-icon"
                aria-hidden="true"
              >
                <FiMail />
              </span>

              <div className="footer-contact-content">

                <a href="mailto:sleepneat@hotel.com">
                  sleepneat@hotel.com
                </a>

                <a href="mailto:infosleepneat@hotel.com">
                  infosleepneat@hotel.com
                </a>

              </div>

            </div>

            {/* Address */}

            <div className="footer-contact-item">

              <span
                className="footer-contact-icon"
                aria-hidden="true"
              >
                <FiMapPin />
              </span>

              <div className="footer-contact-content">

                <address>
                  Sleep N Eat, Vihraon, Nagpur,
                  <br />
                  Maharashtra 440034
                </address>

              </div>

            </div>

          </div>

          {/* =================================================
              INSTAGRAM POSTS
          ================================================= */}

          <div className="footer-column footer-instagram">

            <h3 className="footer-column-title">
              Instagram Post
            </h3>

            <div className="footer-instagram-grid">

              {instagramPosts.map((post) => (
                <div
                  key={post.id}
                  className="footer-instagram-item"
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          COPYRIGHT BAR
      ===================================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p className="footer-copyright">
            Copyright © {currentYear} Sleep N Eat.
            All Rights Reserved.
          </p>

          {/* =================================================
              SPONSORED BY WEBDOCK
          ================================================= */}

          <div className="footer-sponsored">

            <span className="footer-sponsored-label">
              Sponsored by
            </span>

            <a
              href="YOUR_WEBDOCK_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Webdock"
            >
              <img
                src={webdocklogo}
                alt="Webdock"
                className="webdocklogo"
              />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;