import React, { useState } from "react";
import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { FaCalendarAlt, FaUser, FaChevronDown } from "react-icons/fa";

import homehero1 from "../../assets/homehero1.png";
import homehero2 from "../../assets/homehero2.png";
import homehero3 from "../../assets/homehero3.png";

const Hero = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: "2026-06-25",
    checkOut: "2026-06-25",
    adults: "0",
    children: "0",
    rooms: "0",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setBookingData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleAvailabilityCheck = (event) => {
    event.preventDefault();

    console.log("Availability Search:", bookingData);
  };

  const handleBookNow = () => {
    console.log("Book Now clicked");
  };

  const slides = [
    {
      id: 1,
      image: homehero1,
      title: (
        <>
          Find Your Perfect Place
          <br />
          To Stay
        </>
      ),
    },
    {
      id: 2,
      image: homehero2,
      title: (
        <>
          Stay Your Way, Your
          <br />
          Comfort
        </>
      ),
    },
    {
      id: 3,
      image: homehero3,
      title: (
        <>
          Relax, Refresh & Feel at
          <br />
          Home
        </>
      ),
    },
  ];

  return (
    <section className="hotel-hero">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        slidesPerView={1}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={true}
        className="hotel-hero-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Background Overlay */}

              <div className="hero-overlay"></div>

              {/* Hero Content */}

              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
              </div>

              {/* Booking Area */}

              <div className="hero-booking-wrapper">
                <form
                  className="hero-booking-card"
                  onSubmit={handleAvailabilityCheck}
                >
                  {/* Check In */}

                  <div className="booking-field">
                    <label htmlFor="checkIn">Check In Time</label>

                    <div className="booking-input">
                      <FaCalendarAlt />

                      <input
                        id="checkIn"
                        type="date"
                        name="checkIn"
                        value={bookingData.checkIn}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Divider */}

                  <div className="booking-divider"></div>

                  {/* Check Out */}

                  <div className="booking-field">
                    <label htmlFor="checkOut">Check Out Time</label>

                    <div className="booking-input">
                      <FaCalendarAlt />

                      <input
                        id="checkOut"
                        type="date"
                        name="checkOut"
                        value={bookingData.checkOut}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Divider */}

                  <div className="booking-divider"></div>

                  {/* Capacity */}

                  <div className="booking-capacity">
                    <label>Capacity</label>

                    <div className="capacity-options">
                      {/* Adults */}

                      <div className="capacity-item">
                        <FaUser />

                        <select
                          name="adults"
                          value={bookingData.adults}
                          onChange={handleChange}
                        >
                          <option value="0">0 Adults</option>

                          <option value="1">1 Adult</option>

                          <option value="2">2 Adults</option>

                          <option value="3">3 Adults</option>

                          <option value="4">4 Adults</option>

                          <option value="5">5 Adults</option>
                        </select>
                      </div>

                      <span className="capacity-dot">•</span>

                      {/* Children */}

                      <div className="capacity-item">
                        <select
                          name="children"
                          value={bookingData.children}
                          onChange={handleChange}
                        >
                          <option value="0">0 Children</option>

                          <option value="1">1 Child</option>

                          <option value="2">2 Children</option>

                          <option value="3">3 Children</option>

                          <option value="4">4 Children</option>
                        </select>
                      </div>

                      <span className="capacity-dot">•</span>

                      {/* Rooms */}

                      <div className="capacity-item">
                        <select
                          name="rooms"
                          value={bookingData.rooms}
                          onChange={handleChange}
                        >
                          <option value="0">0 Room</option>

                          <option value="1">1 Room</option>

                          <option value="2">2 Rooms</option>

                          <option value="3">3 Rooms</option>

                          <option value="4">4 Rooms</option>
                        </select>

                        <FaChevronDown className="capacity-arrow" />
                      </div>
                    </div>
                  </div>

                  {/* Availability Button */}

                  <button type="submit" className="availability-button">
                    Check Availability
                  </button>
                </form>

                {/* Hero Book Now */}

                <button
                  type="button"
                  className="hero-book-now"
                  onClick={handleBookNow}
                >
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
