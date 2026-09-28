import React from "react";

import { NavLink } from "react-router-dom";

import "./GalleryHero.css";

import roomherobg from "../../assets/roomherobg.png";
import gallerytwo from "../../assets/gallerytwo.png";

// =========================================================
// GALLERY HERO COMPONENT
// =========================================================

const GalleryHero = () => {
  return (
    <section
      className="gallery-hero"
      style={{
        backgroundImage: `url(${gallerytwo})`,
      }}
      aria-labelledby="gallery-hero-title"
    >
      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="gallery-hero-overlay"></div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="gallery-hero-content">

        {/* =================================================
            PAGE TITLE
        ================================================= */}

        <h1
          id="gallery-hero-title"
          className="gallery-hero-title"
        >
          Gallery
        </h1>

        {/* =================================================
            FUNCTIONAL BREADCRUMB
        ================================================= */}

        <nav
          className="gallery-hero-breadcrumb"
          aria-label="Breadcrumb"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `gallery-hero-breadcrumb-link ${
                isActive
                  ? "gallery-hero-breadcrumb-active"
                  : ""
              }`
            }
          >
            Home
          </NavLink>

          <span
            className="gallery-hero-breadcrumb-separator"
            aria-hidden="true"
          >
            /
          </span>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `gallery-hero-breadcrumb-link ${
                isActive
                  ? "gallery-hero-breadcrumb-active"
                  : ""
              }`
            }
          >
            Gallery
          </NavLink>
        </nav>

      </div>
    </section>
  );
};

export default GalleryHero;