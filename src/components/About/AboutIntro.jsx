import React, { useState } from "react";
import "./AboutIntro.css";

import aboutsmall1 from "../../assets/aboutsmall1.png";
import aboutsmall2 from "../../assets/aboutsmall2.png";
import aboutsmall3 from "../../assets/aboutsmall3.png";
import aboutsmall4 from "../../assets/aboutsmall4.png";
import aboutsmall5 from "../../assets/aboutsmall5.png";

// =========================================================
// ABOUT INTRO GALLERY DATA
// =========================================================

const aboutGallery = [
  {
    id: "about-gallery-001",
    image: aboutsmall1,
    alt: "Luxury Sleep N Eat hotel bedroom",
  },
  {
    id: "about-gallery-002",
    image: aboutsmall2,
    alt: "Comfortable hotel room interior",
  },
  {
    id: "about-gallery-003",
    image: aboutsmall3,
    alt: "Premium hotel bedroom",
  },
  {
    id: "about-gallery-004",
    image: aboutsmall4,
    alt: "Luxury hotel workspace",
  },
  {
    id: "about-gallery-005",
    image: aboutsmall5,
    alt: "Elegant Sleep N Eat hotel room",
  },
];

// =========================================================
// ABOUT INTRO FEATURES
// =========================================================

const aboutFeatures = [
  {
    id: "about-feature-001",
    icon: "▣",
    title: "Comfortable Rooms",
  },
  {
    id: "about-feature-002",
    icon: "♨",
    title: "Multi-Cuisine Restaurant",
  },
  {
    id: "about-feature-003",
    icon: "⌁",
    title: "Free Wi-Fi & Room Service",
  },
  {
    id: "about-feature-004",
    icon: "▦",
    title: "Secure Parking",
  },
];

// =========================================================
// ABOUT INTRO COMPONENT
// =========================================================

const AboutIntro = () => {
  const [activeImage, setActiveImage] = useState(aboutGallery[0]);

  return (
    <section className="about-intro-section">
      <div className="about-intro-container">
        {/* =================================================
            LEFT IMAGE GALLERY
        ================================================= */}

        <div className="about-intro-gallery">
          {/* Decorative red block */}

          <div className="about-intro-gallery-decoration" aria-hidden="true" />

          {/* =================================================
              MAIN IMAGE
          ================================================= */}

          <div className="about-intro-main-image-wrapper">
            <img
              key={activeImage.id}
              src={activeImage.image}
              alt={activeImage.alt}
              className="about-intro-main-image"
            />
          </div>

          {/* =================================================
              THUMBNAILS
          ================================================= */}

          <div
            className="about-intro-thumbnails"
            role="list"
            aria-label="About hotel gallery"
          >
            {aboutGallery.map((galleryImage) => {
              const isActive = activeImage.id === galleryImage.id;

              return (
                <button
                  key={galleryImage.id}
                  type="button"
                  className={`about-intro-thumbnail ${
                    isActive ? "about-intro-thumbnail-active" : ""
                  }`}
                  onClick={() => setActiveImage(galleryImage)}
                  aria-label={`View ${galleryImage.alt}`}
                  aria-pressed={isActive}
                >
                  <img src={galleryImage.image} alt="" loading="lazy" />
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <div className="about-intro-content">
          {/* Small Label */}

          <span className="about-intro-label">ABOUT SLEEP N EAT</span>

          {/* Heading */}

          <h2 className="about-intro-title">
            Welcome To Our Best luxury
            <br />
            stay <span>in the city.</span>
          </h2>

          {/* Description */}

          <p className="about-intro-description">
            Welcome to Sleep N Eat Hotel, your ideal destination for a
            comfortable and affordable stay in Nagpur. Conveniently located on
            Outer Ring Road near Vanam 24, our hotel offers clean and spacious
            rooms, delicious dining, and modern amenities.
          </p>

          {/* =================================================
              FEATURES
          ================================================= */}

          <div className="about-intro-features">
            {aboutFeatures.map((feature) => (
              <div key={feature.id} className="about-intro-feature">
                <span className="about-intro-feature-icon" aria-hidden="true">
                  {feature.icon}
                </span>

                <span className="about-intro-feature-title">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
