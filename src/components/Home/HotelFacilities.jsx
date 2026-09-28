import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./HotelFacilities.css";

import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";
import food3 from "../../assets/food3.png";
import food4 from "../../assets/food4.png";

const HotelFacilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Delicious Food",
      image: food1,
    },
    {
      id: 2,
      title: "Startup Food",
      image: food2,
    },
    {
      id: 3,
      title: "Parking Area",
      image: food3,
    },
    {
      id: 4,
      title: "Swimming Pool",
      image: food4,
    },
  ];

  /*
   * Duplicate the facilities so Swiper has enough
   * slides to perform a proper infinite loop while
   * showing 4 cards at the same time.
   */
  const sliderFacilities = [...facilities, ...facilities];

  return (
    <section className="hotel-facilities-section">
      <Swiper
        modules={[Autoplay]}
        className="hotel-facilities-swiper"
        /* ================= SLIDER ================= */
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={0}
        /* ================= LOOP ================= */
        loop={true}
        loopAdditionalSlides={4}
        /* ================= AUTOPLAY ================= */
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        /* ================= TRANSITION ================= */
        speed={900}
        /* ================= TOUCH ================= */
        allowTouchMove={true}
        grabCursor={true}
        /* ================= IMPORTANT ================= */
        watchOverflow={false}
        /* ================= RESPONSIVE ================= */
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          576: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          992: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
      >
        {sliderFacilities.map((facility, index) => (
          <SwiperSlide
            key={`${facility.id}-${index}`}
            className="hotel-facility-slide"
          >
            <article className="hotel-facility-card">
              {/* ================= IMAGE ================= */}
              <img
                src={facility.image}
                alt={facility.title}
                className="hotel-facility-image"
              />

              {/* ================= OVERLAY ================= */}
              <div className="hotel-facility-overlay"></div>

              {/* ================= CONTENT ================= */}
              <div className="hotel-facility-content">
                <h3 className="hotel-facility-title">
                  {facility.title}
                </h3>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HotelFacilities;