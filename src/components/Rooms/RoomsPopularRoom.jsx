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

import "./RoomsPopularRoom.css";

import aboutbook1 from "../../assets/aboutbook1.png";
import aboutbook2 from "../../assets/aboutbook2.png";
import aboutbook3 from "../../assets/aboutbook3.png";


// =========================================================
// ROOMS DATA
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
// ROOMS POPULAR ROOM COMPONENT
// =========================================================

const RoomsPopularRoom = () => {
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

    if (
      currentIndex >=
      cloneCount + totalRooms
    ) {
      setIsTransitioning(false);

      setCurrentIndex(cloneCount);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }


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
        className="rooms-popular-card"
        aria-label={`${room.name} room`}
      >

        {/* =================================================
            IMAGE
        ================================================= */}

        <Link
          to={`/rooms/${room.slug}`}
          className="rooms-popular-image-link"
          aria-label={`View ${room.name}`}
        >

          <div className="rooms-popular-image-wrapper">

            <img
              src={room.image}
              alt={room.name}
              className="rooms-popular-image"
              loading="lazy"
            />

          </div>

        </Link>


        {/* =================================================
            ROOM CONTENT
        ================================================= */}

        <div className="rooms-popular-card-content">

          <Link
            to={`/rooms/${room.slug}`}
            className="rooms-popular-room-title"
          >
            {room.name}
          </Link>


          {/* =================================================
              ROOM DETAILS
          ================================================= */}

          <div className="rooms-popular-room-details">

            <span className="rooms-popular-detail">

              <FiMaximize2
                aria-hidden="true"
              />

              <span>
                {room.roomSize}
              </span>

            </span>


            <span className="rooms-popular-detail">

              <FiUsers
                aria-hidden="true"
              />

              <span>
                {room.beds}
              </span>

            </span>


            <span className="rooms-popular-detail">

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

          <div className="rooms-popular-rating">

            <div
              className="rooms-popular-stars"
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
                          ? "rooms-popular-star rooms-popular-star-filled"
                          : "rooms-popular-star"
                      }
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  );
                }
              )}

            </div>

            <span className="rooms-popular-rating-value">
              {room.rating}
            </span>

          </div>


          {/* =================================================
              PRICE
          ================================================= */}

          <div className="rooms-popular-price-row">

            <span className="rooms-popular-price">

              <span className="rooms-popular-currency">
                {room.pricing.currency}
              </span>

              {room.pricing.amount}

            </span>


            <span className="rooms-popular-price-meta">
              / {room.pricing.unit}
            </span>


            <span className="rooms-popular-room-type">
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
      className="rooms-popular-section"
      aria-labelledby="rooms-popular-title"
    >

      <div className="rooms-popular-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="rooms-popular-header">

          <div className="rooms-popular-heading-area">

            <h2
              id="rooms-popular-title"
              className="rooms-popular-title"
            >
              Our Most{" "}
              <span>Popular Room</span>
            </h2>

            <p className="rooms-popular-description">
              It is a long established fact that a reader
              will be distracted by the readable content of
              a page.
            </p>

          </div>

        </div>


        {/* =================================================
            SLIDER
        ================================================= */}

        <div
          className="rooms-popular-slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onKeyDown={handleKeyDown}
          tabIndex="0"
          aria-label="Popular room slider"
        >

          {/* =================================================
              PREVIOUS BUTTON
          ================================================= */}

          <button
            type="button"
            className="rooms-popular-arrow rooms-popular-arrow-prev"
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
            className="rooms-popular-slider"
          >

            <div
              className={`rooms-popular-track ${
                isTransitioning
                  ? "rooms-popular-track-transition"
                  : ""
              }`}
              style={{
                "--rooms-popular-visible":
                  visibleCards,

                "--rooms-popular-index":
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
            className="rooms-popular-arrow rooms-popular-arrow-next"
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

export default RoomsPopularRoom;