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

import P1412673 from "../../assets/image/P1412673.JPG";
import P1412687 from "../../assets/image/P1412689.JPG";
import P1412708 from "../../assets/image/P1412708.JPG";
import P1412721 from "../../assets/image/P1412738.JPG";
import P1412727 from "../../assets/image/P1412761.JPG";
import P1412740 from "../../assets/image/P1412775.JPG";

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
    url: "https://www.facebook.com/profile.php?id=61594595604411",
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
    url: "https://www.instagram.com/hotel_sleep_n_eat?cplk=MTczZGZkZjB1dHd4eA%3D%3D&utm_source=qr",
  },
];

/*
 * Replace these images later with your actual
 * Instagram post assets.
 */

const instagramPosts = [
  {
    id: "instagram-001",
    image: P1412673,
    alt: "Sleep N Eat Instagram post 1",
  },
  {
    id: "instagram-002",
    image: P1412687,
    alt: "Sleep N Eat Instagram post 2",
  },
  {
    id: "instagram-003",
    image: P1412708,
    alt: "Sleep N Eat Instagram post 3",
  },
  {
    id: "instagram-004",
    image: P1412721,
    alt: "Sleep N Eat Instagram post 4",
  },
  {
    id: "instagram-005",
    image: P1412727,
    alt: "Sleep N Eat Instagram post 5",
  },
  {
    id: "instagram-006",
    image: P1412740,
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
                  +91 7972823773
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

                <a href="mailto:sleepneathotel@gmail.com">
                  sleepneathotel@gmail.com
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
                  Plot no 34, Vihirgaon umred road, near villa 24,
                  <br />
                  Outer Ring Road, Nagpur 441204.
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