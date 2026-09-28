import React from "react";
import { NavLink } from "react-router-dom";

import "./RoomsHero.css";

import roomherobg from "../../assets/roomherobg.png";


// =========================================================
// ROOMS HERO COMPONENT
// =========================================================

const RoomsHero = () => {
  return (
    <section
      className="rooms-hero"
      style={{
        backgroundImage: `url(${roomherobg})`,
      }}
      aria-labelledby="rooms-hero-title"
    >

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="rooms-hero-overlay"></div>


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