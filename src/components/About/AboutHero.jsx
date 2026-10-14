import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AboutHero.css";

import P1413044 from "../../assets/image/P1413044.JPG";
import P1413049 from "../../assets/image/P1413049.JPG";
import P1412865 from "../../assets/image/P1412865.JPG";
import P1412848 from "../../assets/image/P1412848.JPG";

// =========================================================
// ABOUT HERO COMPONENT
// =========================================================

const AboutHero = () => {
  // Temporary existing images.
  // Replace these later with your actual hero images.
  const heroImages = [
    P1413044,
    P1413049,
    P1412865,
    P1412848,
  ];

  const [activeImage, setActiveImage] = useState(0);

  // =========================================================
  // AUTOMATIC BACKGROUND IMAGE CHANGE
  // =========================================================

  useEffect(() => {
    if (heroImages.length <= 1) {
      return undefined;
    }

    const imageInterval = window.setInterval(() => {
      setActiveImage((currentImage) => {
        return (currentImage + 1) % heroImages.length;
      });
    }, 6000);

    return () => {
      window.clearInterval(imageInterval);
    };
  }, [heroImages.length]);

  return (
    <section className="about-hero-section">
      {/* =====================================================
          BACKGROUND IMAGE SLIDER
      ===================================================== */}

      <div
        className="about-hero-background"
        aria-hidden="true"
      >
        {heroImages.map((image, index) => (
          <div
            key={`about-hero-image-${index}`}
            className={`about-hero-background-image ${
              index === activeImage
                ? "about-hero-background-image-active"
                : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          BACKGROUND OVERLAY
      ===================================================== */}

      <div
        className="about-hero-overlay"
        aria-hidden="true"
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="about-hero-container">
        <div className="about-hero-content">
          {/* PAGE TITLE */}

          <h1 className="about-hero-title">
            About Us
          </h1>

          {/* BREADCRUMB */}

          <nav
            className="about-hero-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="about-hero-breadcrumb-link"
            >
              Home
            </Link>

            <span
              className="about-hero-breadcrumb-separator"
              aria-hidden="true"
            >
              /
            </span>

            <span
              className="about-hero-breadcrumb-current"
              aria-current="page"
            >
              About
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;