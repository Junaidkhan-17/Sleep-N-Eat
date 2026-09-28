import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  FiArrowLeft,
  FiArrowRight,
  FiMaximize2,
  FiUsers,
  FiDroplet,
} from "react-icons/fi";

import "./PerfectStay.css";

import aboutbook1 from "../../assets/aboutbook1.png";
import aboutbook2 from "../../assets/aboutbook2.png";
import aboutbook3 from "../../assets/aboutbook3.png";


// =========================================================
// PERFECT STAY ROOM DATA
// Backend-ready structure
// =========================================================

const roomData = [
  {
    _id: "room-001",

    name: "Deluxe Contrast Room",

    slug: "deluxe-contrast-room",

    description:
      "A comfortable and beautifully designed room for a relaxing stay.",

    image: aboutbook1,

    roomSize: "70 sqm",

    beds: "2 Bed",

    bathrooms: "1 Bathroom",

    rating: 4.5,

    reviewsCount: 24,

    pricing: {
      amount: 1800,
      currency: "₹",
      unit: "Night",
      roomType: "AC Room",
    },

    status: "available",
  },

  {
    _id: "room-002",

    name: "Luxury Twin Room",

    slug: "luxury-twin-room",

    description:
      "Enjoy a spacious twin room designed for comfort and convenience.",

    image: aboutbook2,

    roomSize: "70 sqm",

    beds: "2 Bed",

    bathrooms: "1 Bathroom",

    rating: 4.5,

    reviewsCount: 31,

    pricing: {
      amount: 1500,
      currency: "₹",
      unit: "Night",
      roomType: "Non-AC Room",
    },

    status: "available",
  },

  {
    _id: "room-003",

    name: "Single Contrast Room",

    slug: "single-contrast-room",

    description:
      "A stylish and peaceful room perfect for solo travelers and short stays.",

    image: aboutbook3,

    roomSize: "70 sqm",

    beds: "2 Bed",

    bathrooms: "1 Bathroom",

    rating: 4.5,

    reviewsCount: 18,

    pricing: {
      amount: 2500,
      currency: "₹",
      unit: "24 Hours",
      roomType: "AC Room",
    },

    status: "available",
  },

  {
    _id: "room-004",

    name: "Executive Deluxe Room",

    slug: "executive-deluxe-room",

    description:
      "An elegant executive room offering extra space and a premium stay experience.",

    image: aboutbook1,

    roomSize: "85 sqm",

    beds: "1 King Bed",

    bathrooms: "1 Bathroom",

    rating: 4.8,

    reviewsCount: 42,

    pricing: {
      amount: 3200,
      currency: "₹",
      unit: "Night",
      roomType: "Premium AC Room",
    },

    status: "available",
  },
];


// =========================================================
// PERFECT STAY COMPONENT
// =========================================================

const PerfectStay = () => {
  const sliderRef = useRef(null);

  const autoplayRef = useRef(null);

  const resizeTimeoutRef = useRef(null);

  const [visibleCards, setVisibleCards] = useState(3);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isTransitioning, setIsTransitioning] =
    useState(true);

  const [isHovered, setIsHovered] = useState(false);


  // =======================================================
  // RESPONSIVE CARD COUNT
  // =======================================================

  const updateVisibleCards = useCallback(() => {
    const width = window.innerWidth;

    if (width <= 576) {
      setVisibleCards(1);
    } else if (width <= 991) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  }, []);


  useEffect(() => {
    updateVisibleCards();

    const handleResize = () => {
      clearTimeout(resizeTimeoutRef.current);

      resizeTimeoutRef.current = setTimeout(() => {
        updateVisibleCards();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      clearTimeout(resizeTimeoutRef.current);
    };
  }, [updateVisibleCards]);


  // =======================================================
  // CLONED SLIDES
  // Creates an infinite loop.
  // =======================================================

  const sliderItems = useMemo(() => {
    const cloneCount = Math.min(
      visibleCards,
      roomData.length
    );

    const beforeClones = roomData.slice(
      roomData.length - cloneCount
    );

    const afterClones = roomData.slice(
      0,
      cloneCount
    );

    return [
      ...beforeClones,
      ...roomData,
      ...afterClones,
    ];
  }, [visibleCards]);


  const cloneCount = Math.min(
    visibleCards,
    roomData.length
  );


  // =======================================================
  // RESET POSITION AFTER LOOP
  // =======================================================

  const handleTransitionEnd = () => {
    const totalRooms = roomData.length;

    /*
      Moved beyond the last real room.
    */
    if (
      currentIndex >=
      cloneCount + totalRooms
    ) {
      setIsTransitioning(false);

      setCurrentIndex(cloneCount);

      /*
        Re-enable transition on the next frame.
      */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }


    /*
      Moved before the first real room.
    */
    if (currentIndex < cloneCount) {
      setIsTransitioning(false);

      setCurrentIndex(
        cloneCount + totalRooms - 1
      );

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };


  // =======================================================
  // NEXT SLIDE
  // =======================================================

  const handleNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
    }

    setCurrentIndex((previousIndex) => {
      return previousIndex + 1;
    });
  }, [isTransitioning]);


  // =======================================================
  // PREVIOUS SLIDE
  // =======================================================

  const handlePrevious = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
    }

    setCurrentIndex((previousIndex) => {
      return previousIndex - 1;
    });
  }, [isTransitioning]);


  // =======================================================
  // AUTOPLAY
  // =======================================================

  useEffect(() => {
    if (isHovered) {
      return;
    }

    autoplayRef.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      clearInterval(autoplayRef.current);
    };
  }, [handleNext, isHovered]);


  // =======================================================
  // KEYBOARD CONTROL
  // =======================================================

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      handleNext();
    }

    if (event.key === "ArrowLeft") {
      handlePrevious();
    }
  };


  // =======================================================
  // CARD RENDER
  // =======================================================

  const renderRoomCard = (room, index) => {
    return (
      <article
        key={`${room._id}-${index}`}
        className="perfect-stay-card"
        aria-label={`${room.name} room`}
      >

        {/* =================================================
            IMAGE
        ================================================= */}

        <Link
          to={`/rooms/${room.slug}`}
          className="perfect-stay-image-link"
          aria-label={`View ${room.name}`}
        >

          <div className="perfect-stay-image-wrapper">

            <img
              src={room.image}
              alt={room.name}
              className="perfect-stay-image"
              loading="lazy"
            />

          </div>

        </Link>


        {/* =================================================
            ROOM CONTENT
        ================================================= */}

        <div className="perfect-stay-card-content">

          {/* Room Name */}

          <Link
            to={`/rooms/${room.slug}`}
            className="perfect-stay-room-title"
          >
            {room.name}
          </Link>


          {/* =================================================
              ROOM DETAILS
          ================================================= */}

          <div className="perfect-stay-room-details">

            <span className="perfect-stay-detail">

              <FiMaximize2
                aria-hidden="true"
              />

              <span>
                {room.roomSize}
              </span>

            </span>


            <span className="perfect-stay-detail">

              <FiUsers
                aria-hidden="true"
              />

              <span>
                {room.beds}
              </span>

            </span>


            <span className="perfect-stay-detail">

              <FiDroplet
                aria-hidden="true"
              />

              <span>
                {room.bathrooms}
              </span>

            </span>

          </div>


          {/* =================================================
              RATING
          ================================================= */}

          <div className="perfect-stay-rating">

            <div
              className="perfect-stay-stars"
              aria-label={`Rated ${room.rating} out of 5`}
            >

              {Array.from(
                { length: 5 },
                (_, starIndex) => {

                  const isFilled =
                    starIndex <
                    Math.floor(room.rating);

                  return (
                    <span
                      key={starIndex}
                      className={
                        isFilled
                          ? "perfect-stay-star perfect-stay-star-filled"
                          : "perfect-stay-star"
                      }
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  );
                }
              )}

            </div>

            <span className="perfect-stay-rating-value">
              {room.rating}
            </span>

          </div>


          {/* =================================================
              PRICE
          ================================================= */}

          <div className="perfect-stay-price-row">

            <span className="perfect-stay-price">

              <span className="perfect-stay-currency">
                {room.pricing.currency}
              </span>

              {room.pricing.amount}

            </span>


            <span className="perfect-stay-price-meta">
              / {room.pricing.unit}
            </span>


            <span className="perfect-stay-room-type">
              / {room.pricing.roomType}
            </span>

          </div>

        </div>

      </article>
    );
  };


  // =======================================================
  // JSX
  // =======================================================

  return (
    <section
      className="perfect-stay-section"
      aria-labelledby="perfect-stay-title"
    >

      <div className="perfect-stay-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="perfect-stay-header">

          <div className="perfect-stay-heading-area">

            <h2
              id="perfect-stay-title"
              className="perfect-stay-title"
            >
              Choose Your Perfect Stay
            </h2>

            <p className="perfect-stay-description">
              Discover our comfortable and well-designed
              rooms, thoughtfully equipped with modern
              amenities to ensure a relaxing stay for every
              guest.
            </p>

          </div>


          {/* =================================================
              VIEW ALL
          ================================================= */}

          <Link
            to="/rooms"
            className="perfect-stay-view-all"
          >
            View All
          </Link>

        </div>


        {/* =================================================
            SLIDER
        ================================================= */}

        <div
          className="perfect-stay-slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onKeyDown={handleKeyDown}
          tabIndex="0"
          aria-label="Room slider"
        >

          {/* =================================================
              PREVIOUS BUTTON
          ================================================= */}

          <button
            type="button"
            className="perfect-stay-arrow perfect-stay-arrow-prev"
            onClick={handlePrevious}
            aria-label="Previous rooms"
          >
            <FiArrowLeft />
          </button>


          {/* =================================================
              TRACK
          ================================================= */}

          <div
            ref={sliderRef}
            className="perfect-stay-slider"
          >

            <div
              className={`perfect-stay-track ${
                isTransitioning
                  ? "perfect-stay-track-transition"
                  : ""
              }`}
              style={{
                "--perfect-stay-visible":
                  visibleCards,

                "--perfect-stay-index":
                  currentIndex,
              }}
              onTransitionEnd={
                handleTransitionEnd
              }
            >

              {sliderItems.map(
                (room, index) =>
                  renderRoomCard(room, index)
              )}

            </div>

          </div>


          {/* =================================================
              NEXT BUTTON
          ================================================= */}

          <button
            type="button"
            className="perfect-stay-arrow perfect-stay-arrow-next"
            onClick={handleNext}
            aria-label="Next rooms"
          >
            <FiArrowRight />
          </button>

        </div>

      </div>

    </section>
  );
};

export default PerfectStay;