import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./RoomsHero.css";

import roomherobg from "../../assets/roomherobg.png";

import P1412673 from "../../assets/image/P1412673.JPG";
import P1412687 from "../../assets/image/P1412687.JPG";
import P1412708 from "../../assets/image/P1412708.JPG";
import P1412721 from "../../assets/image/P1412721.JPG";
import P1412727 from "../../assets/image/P1412727.JPG";
import P1412740 from "../../assets/image/P1412740.JPG";
import P1412761 from "../../assets/image/P1412761.JPG";
import P1412771 from "../../assets/image/P1412771.JPG";
import P1412783 from "../../assets/image/P1412783.JPG";
import P1412842 from "../../assets/image/P1412842.JPG";
import P1412809 from "../../assets/image/P1412809.JPG";
import P1412815 from "../../assets/image/P1412815.JPG";

// =========================================================
// ROOMS HERO IMAGES
// =========================================================

const roomsHeroImages = [
    P1412673,
    P1412687,
    P1412708,
    P1412721,
    P1412727,
    P1412740,
    P1412761,
    P1412771,
    P1412783,
    P1412842,
    P1412809,
    P1412815,
];

// =========================================================
// ROOMS HERO COMPONENT
// =========================================================

const RoomsHero = () => {
  const [activeImage, setActiveImage] = useState(0);

  // =========================================================
  // AUTOMATIC BACKGROUND IMAGE FADE
  // =========================================================

  useEffect(() => {
    if (roomsHeroImages.length <= 1) {
      return undefined;
    }

    const imageInterval = window.setInterval(() => {
      setActiveImage((currentImage) => {
        return (currentImage + 1) % roomsHeroImages.length;
      });
    }, 5000);

    return () => {
      window.clearInterval(imageInterval);
    };
  }, []);

  return (
    <section
      className="rooms-hero"
      aria-labelledby="rooms-hero-title"
    >
      {/* =====================================================
          BACKGROUND IMAGE SLIDER
      ===================================================== */}

      <div
        className="rooms-hero-background"
        aria-hidden="true"
      >
        {roomsHeroImages.map((image, index) => (
          <div
            key={`rooms-hero-background-${index}`}
            className={`rooms-hero-background-image ${
              index === activeImage
                ? "rooms-hero-background-image-active"
                : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div
        className="rooms-hero-overlay"
        aria-hidden="true"
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="rooms-hero-content">

        {/* =================================================
            PAGE TITLE
        ================================================= */}

        <h1
          id="rooms-hero-title"
          className="rooms-hero-title"
        >
          Rooms
        </h1>

        {/* =================================================
            FUNCTIONAL BREADCRUMB
        ================================================= */}

        <nav
          className="rooms-hero-breadcrumb"
          aria-label="Breadcrumb"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rooms-hero-breadcrumb-link ${
                isActive
                  ? "rooms-hero-breadcrumb-active"
                  : ""
              }`
            }
          >
            Home
          </NavLink>

          <span
            className="rooms-hero-breadcrumb-separator"
            aria-hidden="true"
          >
            /
          </span>

          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              `rooms-hero-breadcrumb-link ${
                isActive
                  ? "rooms-hero-breadcrumb-active"
                  : ""
              }`
            }
          >
            Rooms
          </NavLink>
        </nav>
      </div>
    </section>
  );
};

export default RoomsHero;