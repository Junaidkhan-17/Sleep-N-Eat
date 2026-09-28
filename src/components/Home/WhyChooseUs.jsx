import React, { useEffect, useRef, useState } from "react";

import "./WhyChooseUs.css";

import homehero1 from "../../assets/homehero1.png";
import homehero2 from "../../assets/homehero2.png";
import homehero3 from "../../assets/homehero3.png";
import wave2 from "../../assets/wave2.jpg";

/* =========================================================
   WHY CHOOSE US DATA
========================================================= */

const comfortFeatures = [
  {
    id: "feature-001",
    number: "01",
    title: "In-Room Entertainment & Safety",
    description: [
      "Free High-Speed Wi-Fi",
      "LED / Smart TV",
      "In-Room Safe Locker",
      "Power Backup",
      "Daily Housekeeping",
    ],
    image: homehero1,
    theme: wave2,
  },

  {
    id: "feature-002",
    number: "02",
    title: "Bedroom & Comfort",
    description: [
      "Comfortable Bed with Fresh Linens",
      "Air Conditioning",
      "Writing Desk & Chair",
      "Wardrobe & Hangers",
      "Blackout Curtains",
    ],
    image: homehero2,
    theme: wave2,
  },

  {
    id: "feature-003",
    number: "03",
    title: "Bathroom & Personal Care",
    description: [
      "Shampoo, Conditioner & Body Wash",
      "Bath Soap & Hand Wash",
      "Fresh Bath Towels, Hand Towels & Hair Dryer",
      "Dental Kit (Toothbrush & Toothpaste)",
      "Shower cap, cotton buds, and vanity kit",
    ],
    image: homehero3,
    theme: wave2,
  },

  {
    id: "feature-004",
    number: "04",
    title: "Dining & Guest Services",
    description: [
      "In-House Restaurant",
      "Fresh Breakfast Options",
      "Room Service",
      "Flexible Dining",
      "Guest Assistance",
    ],
    image: homehero1,
    theme: wave2,
  },
];

/* =========================================================
   WHY CHOOSE US COMPONENT
========================================================= */

const WhyChooseUs = () => {
  const scrollContainerRef = useRef(null);

  /*
   * Currently visible card.
   */
  const [activeCard, setActiveCard] = useState(0);

  /*
   * Card that is entering during the animation.
   */
  const [incomingCard, setIncomingCard] = useState(null);

  /*
   * Animation direction.
   */
  const [direction, setDirection] = useState("down");

  /*
   * Prevent multiple cards from changing
   * during one wheel animation.
   */
  const isAnimatingRef = useRef(false);

  /* =======================================================
     WHEEL CONTROL
  ======================================================= */

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const handleWheel = (event) => {
      /*
       * Use normal page scrolling on mobile.
       */
      if (window.innerWidth <= 767) {
        return;
      }

      event.preventDefault();

      /*
       * Don't allow another card change while
       * the current transition is running.
       */
      if (isAnimatingRef.current) {
        return;
      }

      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;

      if (!scrollingDown && !scrollingUp) {
        return;
      }

      let nextIndex = activeCard;

      /* ================================================
         SCROLL DOWN
      ================================================ */

      if (scrollingDown) {
        /*
         * Stop at the last card.
         * No loop.
         */
        if (activeCard >= comfortFeatures.length - 1) {
          return;
        }

        nextIndex = activeCard + 1;
      }

      /* ================================================
         SCROLL UP
      ================================================ */

      if (scrollingUp) {
        /*
         * Stop at the first card.
         * No loop.
         */
        if (activeCard <= 0) {
          return;
        }

        nextIndex = activeCard - 1;
      }

      /*
       * Lock scrolling during animation.
       */
      isAnimatingRef.current = true;

      /*
       * Set animation direction.
       */
      setDirection(scrollingDown ? "down" : "up");

      /*
       * Put the new card above the old card.
       */
      setIncomingCard(nextIndex);

      /*
       * Release after the animation.
       */
      setTimeout(() => {
        setActiveCard(nextIndex);
        setIncomingCard(null);
        isAnimatingRef.current = false;
      }, 1200);
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [activeCard]);

  /* =======================================================
     CARD RENDER HELPER
  ======================================================= */

  const renderCard = (feature, cardClassName) => {
    return (
      <article
        key={feature.id}
        className={`
          why-choose-card
          ${cardClassName}
        `}
        style={{
          "--why-choose-bg-image": `url(${feature.theme})`,
        }}
      >
        {/* ===============================================
            BACKGROUND IMAGE
        =============================================== */}

        <div className="why-choose-card-background" />

        {/* ===============================================
            RIGHT IMAGE
        =============================================== */}

        <div className="why-choose-card-image">
          <img
            src={feature.image}
            alt={feature.title}
            loading="lazy"
          />
        </div>

        {/* ===============================================
            CONTENT
        =============================================== */}

        <div className="why-choose-card-content">
          <span className="why-choose-card-number">
            {feature.number}
          </span>

          <h3 className="why-choose-card-title">
            {feature.title}
          </h3>

          <ul className="why-choose-card-list">
            {feature.description.map((item, index) => (
              <li
                key={`${feature.id}-item-${index}`}
              >
                <span
                  className="why-choose-check"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  };

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="why-choose-left">
          <div className="why-choose-left-inner">

            <span className="why-choose-label">
              WHY CHOOSE US
            </span>

            <h2 className="why-choose-title">
              Everything You Need for
              <br />
              a Comfortable Stay
            </h2>

            <p className="why-choose-description">
              Enjoy a relaxing and hassle-free stay with comfortable
              rooms, modern amenities, flexible booking options, and
              attentive guest services designed to make every moment
              at Sleep N Eat comfortable.
            </p>

          </div>
        </div>

        {/* =================================================
            RIGHT CARD AREA
        ================================================= */}

        <div className="why-choose-right">
          <div
            ref={scrollContainerRef}
            className="why-choose-scroll"
          >
            <div className="why-choose-slider">

              {/* ===========================================
                  CURRENT CARD
              =========================================== */}

              {renderCard(
                comfortFeatures[activeCard],
                "why-choose-card-current"
              )}

              {/* ===========================================
                  NEW CARD
                  Only rendered while transitioning.
              =========================================== */}

              {incomingCard !== null &&
                renderCard(
                  comfortFeatures[incomingCard],
                  `
                    why-choose-card-incoming
                    why-choose-card-incoming-${direction}
                  `
                )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;