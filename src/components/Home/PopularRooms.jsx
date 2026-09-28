import React from "react";

import "./PopularRooms.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import { FaExpandArrowsAlt, FaBed, FaBath, FaStar } from "react-icons/fa";

import roomOne from "../../assets/popular1.png";

import roomTwo from "../../assets/popular2.png";

import roomThree from "../../assets/popular3.png";

import roomFour from "../../assets/popular4.png";

import roomFive from "../../assets/popular5.png";

import roomSix from "../../assets/popular6.png";

const PopularRooms = () => {
  const rooms = [
    {
      id: 1,
      image: roomOne,
      name: "Deluxe Contrast Room",
      size: "70 sqm",
      beds: "1 Bed",
      bathroom: "1 Bathroom",
      rating: "4.5",
      reviews: "12 Reviews",
      price: "1800",
      duration: "Night",
      roomType: "AC Room",
    },
    {
      id: 2,
      image: roomTwo,
      name: "Luxury Twin Room",
      size: "70 sqm",
      beds: "1 Bed",
      bathroom: "1 Bathroom",
      rating: "4.5",
      reviews: "18 Reviews",
      price: "1500",
      duration: "Night",
      roomType: "Non-AC Room",
    },
    {
      id: 3,
      image: roomThree,
      name: "Single Contrast Room",
      size: "70 sqm",
      beds: "1 Bed",
      bathroom: "1 Bathroom",
      rating: "4.5",
      reviews: "14 Reviews",
      price: "2500",
      duration: "24 Hours",
      roomType: "AC Room",
    },
    {
      id: 4,
      image: roomFour,
      name: "Non AC Room",
      size: "70 sqm",
      beds: "1 Bed",
      bathroom: "1 Bathroom",
      rating: "4.5",
      reviews: "10 Reviews",
      price: "1200",
      duration: "Night",
      roomType: "Non-AC Room",
    },
    {
      id: 5,
      image: roomFive,
      name: "Deluxe Contrast Room",
      size: "70 sqm",
      beds: "1 Bed",
      bathroom: "1 Bathroom",
      rating: "4.5",
      reviews: "12 Reviews",
      price: "1800",
      duration: "Night",
      roomType: "AC Room",
    },
    {
      id: 6,
      image: roomSix,
      name: "Luxury Twin Room",
      size: "70 sqm",
      beds: "1 Bed",
      bathroom: "1 Bathroom",
      rating: "4.5",
      reviews: "18 Reviews",
      price: "1500",
      duration: "Night",
      roomType: "Non-AC Room",
    },
  ];

  return (
    <section className="popular-rooms-section">
      <div className="popular-rooms-container">
        {/* ================= SECTION HEADING ================= */}
        <div className="popular-rooms-heading">
          <h2>Our Most Popular Rooms</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the
            <br className="popular-rooms-description-break" />
            readable content of a page.
          </p>
        </div>

        {/* ================= ROOM SLIDER ================= */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={16}
          loop={true}
          speed={500}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
          className="popular-rooms-slider"
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id}>
              <article className="room-card">
                {/* ================= ROOM IMAGE ================= */}
                <div className="room-image-wrapper">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="room-image"
                  />
                </div>

                {/* ================= ROOM CONTENT ================= */}
                <div className="room-content">
                  <h3 className="room-name">{room.name}</h3>

                  {/* Room Information */}
                  <div className="room-details">
                    <div className="room-detail-item">
                      <FaExpandArrowsAlt />
                      <span>{room.size}</span>
                    </div>

                    <div className="room-detail-item">
                      <FaBed />
                      <span>{room.beds}</span>
                    </div>

                    <div className="room-detail-item">
                      <FaBath />
                      <span>{room.bathroom}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="room-rating">
                    <div className="room-stars">
                      {[1, 2, 3, 4].map((star) => (
                        <FaStar key={star} />
                      ))}
                      <FaStar className="empty-star" />
                    </div>

                    <span className="room-rating-value">{room.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="room-price">
                    <span className="price-value">₹ {room.price}</span>
                    <span className="price-details">
                      / {room.duration} / {room.roomType}
                    </span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularRooms;
