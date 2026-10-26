import React, { useEffect, useRef, useState } from "react";

import "./WhyChooseUs.css";
import wave2 from "../../assets/wave2.jpg";
import P1412673 from "../../assets/image/P1412673.JPG";
import P1412689 from "../../assets/image/P1412689.JPG";
import P1412700 from "../../assets/image/P1412700.JPG";
import P1412835 from "../../assets/image/P1412835.JPG";

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
      "Power Backup",
      "Daily Housekeeping",
    ],
    image: P1412673,
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
    image: P1412689,
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
    image: P1412700,
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
    image: P1412835,
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
   * during one wheel/swipe animation.
   */
  const isAnimatingRef = useRef(false);

  /*
   * Mobile touch start position.
   */
  const touchStartRef = useRef({
    x: 0,
    y: 0,
  });

  /* =======================================================
     CHANGE CARD HELPER
     Shared by desktop wheel + mobile swipe.
  ======================================================= */

  const changeCard = (nextIndex, animationDirection) => {
    if (isAnimatingRef.current) {
      return;
    }

    if (
      nextIndex < 0 ||
      nextIndex > comfortFeatures.length - 1
    ) {
      return;
    }

    if (nextIndex === activeCard) {
      return;
    }

    isAnimatingRef.current = true;

    setDirection(animationDirection);

    setIncomingCard(nextIndex);

    setTimeout(() => {
      setActiveCard(nextIndex);
      setIncomingCard(null);
      isAnimatingRef.current = false;
    }, 1200);
  };

  /* =======================================================
     DESKTOP WHEEL + MOBILE TOUCH
  ======================================================= */

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    /* =====================================================
       DESKTOP WHEEL CONTROL
    ===================================================== */

    const handleWheel = (event) => {
      /*
       * Mobile uses swipe instead of wheel.
       */
      if (window.innerWidth <= 767) {
        return;
      }

      event.preventDefault();

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

      changeCard(
        nextIndex,
        scrollingDown ? "down" : "up"
      );
    };

    /* =====================================================
       MOBILE TOUCH START
    ===================================================== */

    const handleTouchStart = (event) => {
      if (window.innerWidth > 767) {
        return;
      }

      if (!event.touches || event.touches.length === 0) {
        return;
      }

      const touch = event.touches[0];

      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
      };
    };

    /* =====================================================
       MOBILE TOUCH END
    ===================================================== */

    const handleTouchEnd = (event) => {
      if (window.innerWidth > 767) {
        return;
      }

      if (isAnimatingRef.current) {
        return;
      }

      if (!event.changedTouches || event.changedTouches.length === 0) {
        return;
      }

      const touch = event.changedTouches[0];

      const startX = touchStartRef.current.x;
      const startY = touchStartRef.current.y;

      const endX = touch.clientX;
      const endY = touch.clientY;

      const deltaX = endX - startX;
      const deltaY = endY - startY;

      /*
       * Ignore very small movements.
       */
      const minimumSwipeDistance = 45;

      /*
       * Ignore horizontal gestures.
       * Only a clearly vertical swipe changes cards.
       */
      if (Math.abs(deltaY) < minimumSwipeDistance) {
        return;
      }

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        return;
      }

      /*
       * Swipe UP
       * → Next card
       */
      if (deltaY < 0) {
        if (activeCard >= comfortFeatures.length - 1) {
          return;
        }

        changeCard(activeCard + 1, "down");

        return;
      }

      /*
       * Swipe DOWN
       * → Previous card
       */
      if (deltaY > 0) {
        if (activeCard <= 0) {
          return;
        }

        changeCard(activeCard - 1, "up");
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    container.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true,
      }
    );

    container.addEventListener(
      "touchend",
      handleTouchEnd,
      {
        passive: true,
      }
    );

    return () => {
      container.removeEventListener(
        "wheel",
        handleWheel
      );

      container.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      container.removeEventListener(
        "touchend",
        handleTouchEnd
      );
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