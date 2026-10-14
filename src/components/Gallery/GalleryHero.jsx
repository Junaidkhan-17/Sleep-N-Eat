
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./GalleryHero.css";

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

const galleryHeroImages = [
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

const GalleryHero = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((currentImage) => {
        return (currentImage + 1) % galleryHeroImages.length;
      });
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className="gallery-hero"
      aria-labelledby="gallery-hero-title"
    >
      <div
        className="gallery-hero-backgrounds"
        aria-hidden="true"
      >
        {galleryHeroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={`gallery-hero-background-image ${
              activeImage === index
                ? "gallery-hero-background-image-active"
                : ""
            }`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
          />
        ))}
      </div>

      <div className="gallery-hero-overlay" />

      <div className="gallery-hero-content">
        <h1
          id="gallery-hero-title"
          className="gallery-hero-title"
        >
          Gallery
        </h1>

        <nav
          className="gallery-hero-breadcrumb"
          aria-label="Breadcrumb"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `gallery-hero-breadcrumb-link ${
                isActive ? "gallery-hero-breadcrumb-active" : ""
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
            end
            className={({ isActive }) =>
              `gallery-hero-breadcrumb-link ${
                isActive ? "gallery-hero-breadcrumb-active" : ""
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
