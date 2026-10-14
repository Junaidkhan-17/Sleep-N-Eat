import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import {
  FaCalendarAlt,
  FaUser,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";
import "./Hero.css";

import heroImage1 from "../../assets/image/P1412708.JPG";
import heroImage2 from "../../assets/image/P1412719.JPG";
import heroImage3 from "../../assets/image/P1412723.JPG";
import Availability  from "../../Pages/Availability";
const heroImages = [heroImage1, heroImage2, heroImage3];

const initialBookingData = {
  checkIn: "Anytime",
  checkOut: "Anytime",
  adults: "0",
  children: "0",
  rooms: "0",
};

const Hero = () => {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [bookingData, setBookingData] = useState(initialBookingData);
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);

  const openAvailability = () => {
    setIsAvailabilityOpen(true);
  };

  const closeAvailability = () => {
    setIsAvailabilityOpen(false);
  };

  const openBookNow = () => {
  setIsBookNowOpen(true);
};

  const handleBookingChange = (event) => {
    const { name, value } = event.target;

    setBookingData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };


  const ADMIN_WHATSAPP_NUMBER = "917972823773";

  const handleAvailabilitySubmit = (event) => {
  event.preventDefault();

  const enquiryMessage = [
    "🏨 SLEEP N EAT — AVAILABILITY ENQUIRY",
    "",
    "Hello Sleep N Eat Team,",
    "I would like to enquire about room availability.",
    "",
    "📅 Check-In Time: Anytime",
    "📅 Check-Out Time: Anytime",
    `👨‍👩‍👧 Adults: ${bookingData.adults}`,
    `🧒 Children: ${bookingData.children}`,
    `🛏️ Rooms: ${bookingData.rooms}`,
    "",
    "Please confirm room availability and share the booking details.",
    "",
    "Thank you!",
  ].join("\n");

  const whatsappUrl =
    `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=` +
    encodeURIComponent(enquiryMessage);

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  closeAvailability();
};

  useEffect(() => {
    if (!isAvailabilityOpen) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeAvailability();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isAvailabilityOpen]);

  const handleOverlayMouseDown = (event) => {
    if (event.target === event.currentTarget) {
      closeAvailability();
    }
  };

  return (
    <>
      <section className="hotel-hero">
        <Swiper
          className="hotel-hero-slider"
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={1200}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={image}>
              <div
                className="hero-slide"
                style={{ backgroundImage: `url("${image}")` }}
                role="img"
                aria-label={`Sleep N Eat hotel background ${index + 1}`}
              >
                <div className="hero-overlay" />

                <div className="hero-content">
                  <div className="hero-text">
                    <p className="hero-eyebrow">WELCOME TO SLEEP N EAT</p>

                    <h1 className="hero-title">
                      Experience Comfort,
                      <br />
                      Stay in Style
                    </h1>

                    <p className="hero-description">
                      Discover comfort, exceptional hospitality, and a
                      relaxing stay designed around you.
                    </p>

                    <div className="hero-cta-buttons">
                      <button
                        type="button"
                        className="availability-button hero-cta-button"
                        onClick={openAvailability}
                      >
                        Check Availability
                      </button>

                      <button
                        type="button"
                        className="hero-book-now hero-cta-button"
                        onClick={openBookNow}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {isAvailabilityOpen && (
        <div
          className="hero-availability-overlay"
          onMouseDown={handleOverlayMouseDown}
          role="presentation"
        >
          <section
            className="hero-availability-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="hero-availability-title"
          >
            <button
              type="button"
              className="hero-availability-close"
              onClick={closeAvailability}
              aria-label="Close availability form"
            >
              <FaTimes aria-hidden="true" />
            </button>

            <div className="hero-availability-header">
              <span className="hero-modal-eyebrow">PLAN YOUR STAY</span>

              <h2 id="hero-availability-title">
                Check Availability
              </h2>

              <p>
                Choose your guests and rooms to start planning your stay.
              </p>
            </div>

            <form
              className="hero-availability-form"
              onSubmit={handleAvailabilitySubmit}
            >
              <div className="hero-modal-field">
                <label htmlFor="hero-check-in">Check In Time</label>

                <div className="hero-modal-input hero-anytime-input">
                  <FaCalendarAlt aria-hidden="true" />

                  <span id="hero-check-in">Anytime</span>
                </div>
              </div>

              <div className="hero-modal-field">
                <label htmlFor="hero-check-out">Check Out Time</label>

                <div className="hero-modal-input hero-anytime-input">
                  <FaCalendarAlt aria-hidden="true" />

                  <span id="hero-check-out">Anytime</span>
                </div>

              </div>

              <div className="hero-modal-field">
                <label htmlFor="hero-adults">Adults</label>

                <div className="hero-modal-input">
                  <FaUser aria-hidden="true" />

                  <select
                    id="hero-adults"
                    name="adults"
                    value={bookingData.adults}
                    onChange={handleBookingChange}
                    required
                  >
                    <option value="0" disabled>
                      Select adults
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                      <option key={count} value={String(count)}>
                        {count} {count === 1 ? "Adult" : "Adults"}
                      </option>
                    ))}
                  </select>

                  <FaChevronDown
                    className="hero-select-arrow"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="hero-modal-field">
                <label htmlFor="hero-children">Children</label>

                <div className="hero-modal-input">
                  <FaUser aria-hidden="true" />

                  <select
                    id="hero-children"
                    name="children"
                    value={bookingData.children}
                    onChange={handleBookingChange}
                    required
                  >
                    {[0, 1, 2, 3, 4, 5, 6].map((count) => (
                      <option key={count} value={String(count)}>
                        {count} {count === 1 ? "Child" : "Children"}
                      </option>
                    ))}
                  </select>

                  <FaChevronDown
                    className="hero-select-arrow"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="hero-modal-field">
                <label htmlFor="hero-rooms">Rooms</label>

                <div className="hero-modal-input">
                  <FaCalendarAlt aria-hidden="true" />

                  <select
                    id="hero-rooms"
                    name="rooms"
                    value={bookingData.rooms}
                    onChange={handleBookingChange}
                    required
                  >
                    <option value="0" disabled>
                      Select rooms
                    </option>

                    {[1, 2, 3, 4, 5, 6].map((count) => (
                      <option key={count} value={String(count)}>
                        {count} {count === 1 ? "Room" : "Rooms"}
                      </option>
                    ))}
                  </select>

                  <FaChevronDown
                    className="hero-select-arrow"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="hero-modal-submit"
              >
                Search Availability
              </button>

              <p className="hero-modal-note">
                Your stay details can be confirmed with our hotel team.
              </p>
            </form>
          </section>
        </div>
      )}
      {/* Book Now - Existing Availability Component */}
    {isBookNowOpen && (
      <Availability
        room={null}
        onClose={() => setIsBookNowOpen(false)}
      />
    )}
    </>
  );
};

export default Hero;