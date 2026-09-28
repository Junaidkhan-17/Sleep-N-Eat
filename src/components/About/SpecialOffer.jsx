import React from "react";
import { Link } from "react-router-dom";
import {
  FiWifi,
  FiCoffee,
  FiTruck,
  FiStar,
  FiCheck,
} from "react-icons/fi";

import "./SpecialOffer.css";

import aboutoffer from "../../assets/aboutoffer.png";


// =========================================================
// SPECIAL OFFER DATA
// Backend-ready structure
// =========================================================

const specialOffer = {
  id: "special-offer-001",

  label: "SPECIAL OFFER",

  title: "Experience a Comfortable Stay at Sleep N Eat Hotel",

  description:
    "Enjoy a relaxing stay with comfortable rooms, delicious dining, and warm hospitality at Sleep N Eat Hotel. Conveniently located on Outer Ring Road, Nagpur, we offer everything you need for a pleasant business or leisure trip.",

  image: aboutoffer,

  imageAlt:
    "Comfortable stay at Sleep N Eat Hotel",

  stay: {
    duration: "1 Days / 2 Night",
    roomType: "Ac Room",
  },

  rating: {
    value: 4.5,
    totalStars: 5,
    reviewsCount: 0,
  },

  pricing: {
    label: "Only",
    currency: "₹",
    amount: 2500,
  },

  features: [
    {
      id: "feature-001",
      title: "Comfortable Rooms",
      icon: FiCheck,
    },

    {
      id: "feature-002",
      title: "Multi-Cuisine Restaurant",
      icon: FiCoffee,
    },

    {
      id: "feature-003",
      title: "Free Wi-Fi",
      icon: FiWifi,
    },

    {
      id: "feature-004",
      title: "Secure Parking",
      icon: FiTruck,
    },
  ],
};


// =========================================================
// SPECIAL OFFER COMPONENT
// =========================================================

const SpecialOffer = () => {
  return (
    <section
      className="special-offer-section"
      aria-labelledby="special-offer-title"
    >

      <div className="special-offer-container">

        {/* =================================================
            LEFT IMAGE
        ================================================= */}

        <div className="special-offer-image-wrapper">

          <img
            src={specialOffer.image}
            alt={specialOffer.imageAlt}
            className="special-offer-image"
            loading="lazy"
          />

        </div>


        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <div className="special-offer-content">

          {/* Label */}

          <span className="special-offer-label">
            {specialOffer.label}
          </span>


          {/* Title */}

          <h2
            id="special-offer-title"
            className="special-offer-title"
          >
            {specialOffer.title}
          </h2>


          {/* Description */}

          <p className="special-offer-description">
            {specialOffer.description}
          </p>


          {/* =================================================
              FEATURES
          ================================================= */}

          <div className="special-offer-features">

            {specialOffer.features.map((feature) => {

              const FeatureIcon = feature.icon;

              return (
                <div
                  key={feature.id}
                  className="special-offer-feature"
                >

                  <span
                    className="special-offer-feature-icon"
                    aria-hidden="true"
                  >
                    <FeatureIcon />
                  </span>

                  <span className="special-offer-feature-title">
                    {feature.title}
                  </span>

                </div>
              );
            })}

          </div>


          {/* =================================================
              BOOKING / PRICE AREA
          ================================================= */}

          <div className="special-offer-booking">

            {/* Stay Details */}

            <div className="special-offer-stay">

              <div className="special-offer-stay-title">
                {specialOffer.stay.duration}{" "}
                {specialOffer.stay.roomType}
              </div>


              {/* Rating */}

              <div className="special-offer-rating">

                <div
                  className="special-offer-stars"
                  aria-label={`Rated ${specialOffer.rating.value} out of 5`}
                >

                  {Array.from(
                    {
                      length: specialOffer.rating.totalStars,
                    },
                    (_, index) => {

                      const isHalfStar =
                        specialOffer.rating.value -
                          index >
                        0 &&
                        specialOffer.rating.value -
                          index <
                          1;

                      return (
                        <FiStar
                          key={index}
                          className={
                            isHalfStar
                              ? "special-offer-star special-offer-star-half"
                              : index <
                                Math.floor(
                                  specialOffer.rating.value
                                )
                              ? "special-offer-star special-offer-star-filled"
                              : "special-offer-star"
                          }
                          aria-hidden="true"
                        />
                      );
                    }
                  )}

                </div>

                <span className="special-offer-rating-value">
                  {specialOffer.rating.value}
                </span>

              </div>

            </div>


            {/* Vertical Divider */}

            <div
              className="special-offer-price-divider"
              aria-hidden="true"
            />


            {/* Price */}

            <div className="special-offer-price">

              <span className="special-offer-price-label">
                {specialOffer.pricing.label}
              </span>

              <span className="special-offer-price-value">
                {specialOffer.pricing.currency}{" "}
                {specialOffer.pricing.amount}
              </span>

            </div>

          </div>


          {/* =================================================
              BOOK NOW
          ================================================= */}

          <Link
            to="/rooms"
            className="special-offer-book-button"
            aria-label="Book a room at Sleep N Eat Hotel"
          >
            Book Now
          </Link>

        </div>

      </div>

    </section>
  );
};

export default SpecialOffer;