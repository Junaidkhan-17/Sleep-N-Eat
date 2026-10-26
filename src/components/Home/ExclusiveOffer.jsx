import React, { useEffect, useRef, useState } from "react";

import "./ExclusiveOffer.css";

import NumberFlow, { continuous } from "@number-flow/react";

import P1412719 from "../../assets/image/P1412719.JPG";

import P1412673 from "../../assets/image/P1412673.JPG";
import P1412687 from "../../assets/image/P1412687.JPG";
import P1412708 from "../../assets/image/P1412708.JPG";
import P1412721 from "../../assets/image/P1412721.JPG";
import P1412727 from "../../assets/image/P1412727.JPG";
import P1412740 from "../../assets/image/P1412740.JPG";
import P1412761 from "../../assets/image/P1412761.JPG";
import P1412771 from "../../assets/image/P1412771.JPG";
import P1412783 from "../../assets/image/P1412783.JPG";

import { FaStar, FaRegStar } from "react-icons/fa";

const ExclusiveOffer = () => {
  const offerRef = useRef(null);

  const [priceVisible, setPriceVisible] = useState(false);
  const [activeBackground, setActiveBackground] = useState(0);

  // =========================================================
  // EXCLUSIVE OFFER BACKGROUND IMAGES
  // Temporary existing project images.
  // Replace these later with your actual offer images.
  // =========================================================

  const backgroundImages = [
    P1412719,
    P1412673,
    P1412687,
    P1412708,
    P1412721,
    P1412727,
    P1412740,
    P1412761,
    P1412771,
    P1412783,
  ];

  // =========================================================
  // PRICE REVEAL
  // =========================================================

  useEffect(() => {
    const sectionElement = offerRef.current;

    if (!sectionElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setPriceVisible(true);

          observer.unobserve(sectionElement);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  // =========================================================
  // BACKGROUND IMAGE SLIDER
  // =========================================================

  useEffect(() => {
    if (backgroundImages.length <= 1) {
      return undefined;
    }

    const backgroundInterval = window.setInterval(() => {
      setActiveBackground((currentImage) => {
        return (currentImage + 1) % backgroundImages.length;
      });
    }, 5000);

    return () => {
      window.clearInterval(backgroundInterval);
    };
  }, [backgroundImages.length]);

  // =========================================================
  // BOOK NOW
  // =========================================================

  const handleBookNow = () => {
    console.log("Exclusive Offer: Book Now clicked");
  };

  return (
    <section
      ref={offerRef}
      className="exclusive-offer-section"
    >
      {/* =====================================================
          BACKGROUND IMAGE SLIDER
      ===================================================== */}

      <div
        className="exclusive-offer-background-slider"
        aria-hidden="true"
      >
        {backgroundImages.map((image, index) => (
          <div
            key={`exclusive-offer-background-${index}`}
            className={`exclusive-offer-background-image ${
              index === activeBackground
                ? "exclusive-offer-background-image-active"
                : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          OFFER CONTENT
      ===================================================== */}

      <div className="exclusive-offer-container">
        <div className="exclusive-offer-card">

          {/* =================================================
              OFFER LABEL
          ================================================= */}

          <span className="exclusive-offer-label">
            EXCLUSIVE OFFER
          </span>

          {/* =================================================
              OFFER TITLE
          ================================================= */}

          <h2 className="exclusive-offer-title">
            Enjoy Your Dream Vacation
            <br />
            In Nagpur.
          </h2>

          {/* =================================================
              OFFER INFORMATION
          ================================================= */}

          <div className="exclusive-offer-bottom">

            {/* =================================================
                OFFER INFO
            ================================================= */}

            <div className="exclusive-offer-info">

              <div className="exclusive-offer-stay">
                <span>
                  1 Days / 2 Night Ac Room
                </span>
              </div>

              {/* =================================================
                  RATING
              ================================================= */}

              <div className="exclusive-offer-rating">

                <div className="exclusive-offer-stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>

                <span className="exclusive-offer-rating-value">
                  4.5
                </span>

              </div>
            </div>

            {/* =================================================
                PRICE + ACTION
            ================================================= */}

            <div className="exclusive-offer-action">

              {/* PRICE */}

              <div className="exclusive-offer-price">

                <span className="exclusive-offer-price-label">
                  Only
                </span>

                <span className="exclusive-offer-price-value">
                  ₹{" "}
                  <NumberFlow
                    plugins={[continuous]}
                    value={priceVisible ? 2500 : 0}
                  />
                </span>

              </div>

              {/* BOOK NOW */}

              <button
                type="button"
                className="exclusive-offer-button"
                onClick={handleBookNow}
              >
                Book Now
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOffer;