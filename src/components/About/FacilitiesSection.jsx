import React from "react";
import { Link } from "react-router-dom";

import {
  Utensils,
  ParkingCircle,
  Waves,
  Dumbbell,
  Wifi,
  Coffee,
} from "lucide-react";

import "./FacilitiesSection.css";


// =========================================================
// FACILITIES DATA
// Backend-ready structure
// =========================================================

const facilitiesData = [
  {
    _id: "facility-001",
    name: "Delicious Food",
    slug: "delicious-food",
    description: "Fresh and delicious meals prepared for every guest.",
    icon: Utensils,
    status: "active",
    sortOrder: 1,
  },

  {
    _id: "facility-002",
    name: "Parking Area",
    slug: "parking-area",
    description: "Safe and convenient parking space for our guests.",
    icon: ParkingCircle,
    status: "active",
    sortOrder: 2,
  },

  {
    _id: "facility-003",
    name: "Swimming Pool",
    slug: "swimming-pool",
    description: "Relax and enjoy a refreshing swimming experience.",
    icon: Waves,
    status: "active",
    sortOrder: 3,
  },

  {
    _id: "facility-004",
    name: "Exercise Space",
    slug: "exercise-space",
    description: "Stay active during your stay with our exercise area.",
    icon: Dumbbell,
    status: "active",
    sortOrder: 4,
  },

  {
    _id: "facility-005",
    name: "Free Wifi",
    slug: "free-wifi",
    description: "Enjoy reliable high-speed Wi-Fi throughout your stay.",
    icon: Wifi,
    status: "active",
    sortOrder: 5,
  },

  {
    _id: "facility-006",
    name: "Breakfast",
    slug: "breakfast",
    description: "Start your day with a fresh and satisfying breakfast.",
    icon: Coffee,
    status: "active",
    sortOrder: 6,
  },
];


// =========================================================
// FACILITIES SECTION
// =========================================================

const FacilitiesSection = () => {
  /*
    Only active facilities are rendered.

    Later, this array can come directly from:
    Context API → Reducer → Service Layer → API
    without changing the UI structure.
  */

  const activeFacilities = facilitiesData
    .filter((facility) => facility.status === "active")
    .sort((a, b) => a.sortOrder - b.sortOrder);


  return (
    <section
      className="facilities-section"
      aria-labelledby="facilities-section-title"
    >

      <div className="facilities-container">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="facilities-content">

          <span className="facilities-label">
            HOTEL FACILITIES
          </span>

          <h2
            id="facilities-section-title"
            className="facilities-title"
          >
            We are Providing
            <br />
            You Our Best
            <br />
            Facilities
          </h2>

          <p className="facilities-description">
            Enjoy a comfortable and memorable stay with
            thoughtfully designed facilities and services
            created to make every moment at Sleep N Eat
            convenient and relaxing.
          </p>

          {/* =================================================
              DISCOVER MORE
          ================================================= */}

          <Link
            to="/rooms"
            className="facilities-discover-button"
            aria-label="Discover more about Sleep N Eat"
          >
            Discover More
          </Link>

        </div>


        {/* =================================================
            RIGHT FACILITIES GRID
        ================================================= */}

        <div
          className="facilities-grid"
          aria-label="Hotel facilities"
        >

          {activeFacilities.map((facility) => {

            const FacilityIcon = facility.icon;

            return (
              <Link
                key={facility._id}
                to={`/facilities/${facility.slug}`}
                className="facility-card"
                aria-label={`Learn more about ${facility.name}`}
              >

                {/* =================================================
                    ICON
                ================================================= */}

                <div className="facility-icon-wrapper">

                  <FacilityIcon
                    className="facility-icon"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                </div>


                {/* =================================================
                    FACILITY NAME
                ================================================= */}

                <h3 className="facility-name">
                  {facility.name}
                </h3>

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default FacilitiesSection;