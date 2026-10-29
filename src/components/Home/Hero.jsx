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

import P1412673 from "../../assets/image/P1412673.JPG";
import P1412687 from "../../assets/image/P1412687.JPG";
import P1412708 from "../../assets/image/P1412708.JPG";
import P1412721 from "../../assets/image/P1412721.JPG";
import P1412727 from "../../assets/image/P1412727.JPG";
import P1412740 from "../../assets/image/P1412740.JPG";
import P1412761 from "../../assets/image/P1412761.JPG";
import P1412771 from "../../assets/image/P1412771.JPG";
import P1412783 from "../../assets/image/P1412783.JPG";
import P1412842 from "../../assets/image/P1412842.JPG";
import P1412809 from "../../assets/image/P1412809.JPG";
import P1412815 from "../../assets/image/P1412815.JPG";

// Existing room booking form
import Availability from "../../Pages/Availability";

const heroImages = [
  P1412673,
  P1412687,
  P1412708,
  P1412721,
  P1412727,
  P1412740,
  P1412761,
  P1412771,
  P1412783,
  P1412842,
  P1412809,
  P1412815,
];

const initialBookingData = {
  adults: "0",
  children: "0",
  rooms: "0",
};

const pricingRules = [
  {
    room: "1–11",
    roomType: "Non-AC",
    perNight: 1500,
    twentyFourHours: 2500,
  },
  {
    room: "1–11",
    roomType: "AC",
    perNight: 1800,
    twentyFourHours: 3000,
  },
  {
    room: "12",
    roomType: "Non-AC",
    perNight: 1200,
    twentyFourHours: 1500,
  },
  {
    room: "12",
    roomType: "AC",
    perNight: 1500,
    twentyFourHours: 2000,
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

const ADMIN_WHATSAPP_NUMBER = "917972823773";

const Hero = () => {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);
  const [bookingData, setBookingData] = useState(initialBookingData);

  const openAvailability = () => {
    setIsAvailabilityOpen(true);
  };

  const closeAvailability = () => {
    setIsAvailabilityOpen(false);
  };

  // Book Now opens the existing Availability booking form.
  const openBookNow = () => {
    setIsAvailabilityOpen(false);
    setIsBookNowOpen(true);
  };

  const closeBookNow = () => {
    setIsBookNowOpen(false);
  };

  const handleBookingChange = (event) => {
    const { name, value } = event.target;

    setBookingData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleAvailabilitySubmit = (event) => {
    event.preventDefault();

    const cleanWhatsAppNumber = ADMIN_WHATSAPP_NUMBER.replace(/\D/g, "");

    if (!/^\d{8,15}$/.test(cleanWhatsAppNumber)) {
      window.alert("Please configure a valid hotel WhatsApp number.");
      return;
    }

    const pricingMessage = pricingRules.map(
      (rule) =>
        `Room ${rule.room} | ${rule.roomType} | Per Night: ${formatPrice(
          rule.perNight
        )} | 24 Hours: ${formatPrice(rule.twentyFourHours)}`
    );

    const enquiryMessage = [
      "SLEEP N EAT — AVAILABILITY ENQUIRY",
      "",
      "Hello Sleep N Eat Team,",
      "I would like to enquire about room availability.",
      "",
      "Check-In Time: Anytime",
      "Check-Out Time: Anytime",
      `Adults: ${bookingData.adults}`,
      `Children: ${bookingData.children}`,
      `Rooms Required: ${bookingData.rooms}`,
      "",
      "ROOM PRICING",
      ...pricingMessage,
      "",
      "Please confirm room availability and share the booking details.",
      "",
      "Thank you!",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
      enquiryMessage
    )}`;

    const newWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (!newWindow) {
      window.alert(
        "WhatsApp could not be opened. Please allow pop-ups and try again."
      );
      return;
    }

    closeAvailability();
  };

  // Close the Check Availability modal with Escape.
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

  // Prevent background scrolling while the Book Now form is open.
  useEffect(() => {
    if (!isBookNowOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeBookNow();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isBookNowOpen]);

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

      {/* CHECK AVAILABILITY MODAL */}
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
            onMouseDown={(event) => event.stopPropagation()}
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

              <h2 id="hero-availability-title">Check Availability</h2>

              <p>
                Explore our room rates and choose the accommodation that
                suits your stay.
              </p>
            </div>

            {/* ROOM PRICING TABLE */}
            <div className="hero-pricing-section">
              <h3 className="hero-pricing-title">Room Pricing</h3>

              <div className="hero-pricing-table-wrap">
                <table className="hero-pricing-table">
                  <thead>
                    <tr>
                      <th scope="col">Room</th>
                      <th scope="col">Room Type</th>
                      <th scope="col">Per Night</th>
                      <th scope="col">24 Hours</th>
                    </tr>
                  </thead>

                  <tbody>
                    {pricingRules.map((rule) => (
                      <tr key={`${rule.room}-${rule.roomType}`}>
                        <td>{rule.room}</td>
                        <td>
                          <span
                            className={`hero-room-type-badge ${
                              rule.roomType === "AC"
                                ? "hero-room-type-badge--ac"
                                : "hero-room-type-badge--non-ac"
                            }`}
                          >
                            {rule.roomType}
                          </span>
                        </td>
                        <td className="hero-pricing-amount">
                          {formatPrice(rule.perNight)}
                        </td>
                        <td className="hero-pricing-amount">
                          {formatPrice(rule.twentyFourHours)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="hero-pricing-note">
                Prices are shown in Indian Rupees (INR). Final room
                availability and applicable charges must be confirmed by the
                hotel.
              </p>
            </div>

            <form
              className="hero-availability-form"
              onSubmit={handleAvailabilitySubmit}
            >
              <div className="hero-modal-field">
                <label htmlFor="hero-check-in">Check-In Time</label>

                <div className="hero-modal-input hero-anytime-input">
                  <FaCalendarAlt aria-hidden="true" />
                  <span id="hero-check-in">Anytime</span>
                </div>
              </div>

              <div className="hero-modal-field">
                <label htmlFor="hero-check-out">Check-Out Time</label>

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
                <label htmlFor="hero-rooms">Rooms Required</label>

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

                    {Array.from({ length: 12 }, (_, index) => index + 1).map(
                      (count) => (
                        <option key={count} value={String(count)}>
                          {count} {count === 1 ? "Room" : "Rooms"}
                        </option>
                      )
                    )}
                  </select>

                  <FaChevronDown
                    className="hero-select-arrow"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <button type="submit" className="hero-modal-submit">
                Search Availability on WhatsApp
              </button>

              <p className="hero-modal-note">
                Your enquiry and the room pricing table will be sent to the
                hotel through WhatsApp.
              </p>
            </form>
          </section>
        </div>
      )}

      {/* BOOK NOW OPENS THE EXISTING AVAILABILITY FORM */}
      {isBookNowOpen && (
        <Availability room={null} onClose={closeBookNow} />
      )}
    </>
  );
};

export default Hero;