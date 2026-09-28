import React from "react";
import { NavLink } from "react-router-dom";

import "./ContactHero.css";

import contacthero from "../../assets/contacthero.png";


// =========================================================
// CONTACT HERO COMPONENT
// =========================================================

const ContactHero = () => {
  return (
    <section
      className="contact-hero"
      style={{
        backgroundImage: `url(${contacthero})`,
      }}
      aria-labelledby="contact-hero-title"
    >

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="contact-hero-overlay"></div>


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="contact-hero-content">

        {/* =================================================
            PAGE TITLE
        ================================================= */}

        <h1
          id="contact-hero-title"
          className="contact-hero-title"
        >
          Contact
        </h1>


        {/* =================================================
            FUNCTIONAL BREADCRUMB
        ================================================= */}

        <nav
          className="contact-hero-breadcrumb"
          aria-label="Breadcrumb"
        >

          <NavLink
            to="/"
            className={({ isActive }) =>
              `contact-hero-breadcrumb-link ${
                isActive
                  ? "contact-hero-breadcrumb-active"
                  : ""
              }`
            }
          >
            Home
          </NavLink>


          <span
            className="contact-hero-breadcrumb-separator"
            aria-hidden="true"
          >
            /
          </span>


          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `contact-hero-breadcrumb-link ${
                isActive
                  ? "contact-hero-breadcrumb-active"
                  : ""
              }`
            }
          >
            Contact
          </NavLink>

        </nav>

      </div>

    </section>
  );
};

export default ContactHero;