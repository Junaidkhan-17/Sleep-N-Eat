import React, { useEffect, useRef, useState } from "react";

import "./ExclusiveOffer.css";

import NumberFlow, { continuous } from "@number-flow/react";

import { FaStar, FaRegStar } from "react-icons/fa";

import homehero1 from "../../assets/homehero1.png";

const ExclusiveOffer = () => {
  const offerRef = useRef(null);
  const [priceVisible, setPriceVisible] = useState(false);

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
      },
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleBookNow = () => {
    console.log("Exclusive Offer: Book Now clicked");
  };

  return (
    <section ref={offerRef} className="exclusive-offer-section">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="exclusive-offer-background"
        style={{
          backgroundImage: `url(${homehero1})`,
        }}
        aria-hidden="true"
      />

      {/* ================= OFFER CONTENT ================= */}
      <div className="exclusive-offer-container">
        <div className="exclusive-offer-card">
          {/* ================= OFFER LABEL ================= */}
          <span className="exclusive-offer-label">EXCLUSIVE OFFER</span>

          {/* ================= OFFER TITLE ================= */}
          <h2 className="exclusive-offer-title">
            Enjoy Your Dream Vacation
            <br />
            In Pune
          </h2>

          {/* ================= OFFER INFORMATION ================= */}
          <div className="exclusive-offer-bottom">
            <div className="exclusive-offer-info">
              <div className="exclusive-offer-stay">
                <span>1 Days / 2 Night Ac Room</span>
              </div>

              <div className="exclusive-offer-rating">
                <div className="exclusive-offer-stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>

                <span className="exclusive-offer-rating-value">4.5</span>
              </div>
            </div>

            <div className="exclusive-offer-action">
              <div className="exclusive-offer-price">
                <span className="exclusive-offer-price-label">Only</span>

                <span className="exclusive-offer-price-value">
                  ₹{" "}
                  <NumberFlow
                    plugins={[continuous]}
                    value={priceVisible ? 2500 : 0}
                  />
                </span>
              </div>

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
