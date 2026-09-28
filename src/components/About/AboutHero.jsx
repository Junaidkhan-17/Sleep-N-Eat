import React from "react";
import { Link } from "react-router-dom";

import "./AboutHero.css";

//import wave from "../../assets/wave.jpg";
import abouthero from "../../assets/abouthero.jpg";

// =========================================================
// ABOUT HERO COMPONENT
// =========================================================

const AboutHero = () => {
  return (
    <section
      className="about-hero-section"
      style={{
        backgroundImage: `url(${abouthero})`,
      }}
    >
      {/* =====================================================
          BACKGROUND OVERLAY
      ===================================================== */}

      <div className="about-hero-overlay" aria-hidden="true" />
      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="about-hero-container">
        <div className="about-hero-content">
          {/* =================================================
              PAGE TITLE
          ================================================= */}

          <h1 className="about-hero-title">About Us</h1>

          {/* =================================================
              FUNCTIONAL BREADCRUMB
          ================================================= */}

          <nav className="about-hero-breadcrumb" aria-label="Breadcrumb">
            {/* Home */}

            <Link to="/" className="about-hero-breadcrumb-link">
              Home
            </Link>

            {/* Separator */}

            <span
              className="about-hero-breadcrumb-separator"
              aria-hidden="true"
            >
              /
            </span>

            {/* Current Page */}

            <span className="about-hero-breadcrumb-current" aria-current="page">
              About
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
