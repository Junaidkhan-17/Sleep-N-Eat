import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";

import "./Testimonial.css";

import P1412687 from "../../assets/image/P1412687.JPG";
import P1412708 from "../../assets/image/P1412708.JPG";
import P1412721 from "../../assets/image/P1412721.JPG";
import P1412727 from "../../assets/image/P1412727.JPG";
import P1412740 from "../../assets/image/P1412740.JPG";

//import Testimonial1 from "../../assets/Testimonial1.jpg";

//import Testimonial2 from "../../assets/Testimonial2.jpg";

//import Testimonial3 from "../../assets/Testimonial3.jpg";

//import Testimonial4 from "../../assets/Testimonial4.png";

const testimonials = [
  {
    id: "testimonial-001",
    clientName: "Sahil Dahake",
    designation: "Previous Client",
    image: P1412687,
    review:
      "The food was excellent and the reception staff went out of their way to help. Will definitely stay again on our next trip.",
  },
  {
    id: "testimonial-002",
    clientName: "Mosaar",
    designation: "Previous Client",
    image: P1412708,
    review:
      "This hotel was very neat and clean. We were travelling from Kerala to Lucknow, and we always stay here. The service was very good, and the staff were friendly. The food was excellent. There is also very good parking space for vehicles. I highly recommend this hotel.",
  },
  {
    id: "testimonial-003",
    clientName: "Nebishen Leo",
    designation: "Previous Client",
    image: P1412721,
    review:
      "Sleep N Eat Hotel is really good. It is located near NH 44. I travel from Kerala to Lucknow for business trips, and I always stay here. The service and staff are very good. The food is excellent. There is also ample parking space for vehicles. I highly recommend this hotel.",
  },
  {
    id: "testimonial-004",
    clientName: "Anand Bawane",
    designation: "Previous Client",
    image: P1412727,
    review:
      "Had a great stay here! The rooms were clean, comfortable and well-maintained. The food was really tasty and the staff was polite and helpful. Overall, a very good experience. Definitely recommend this place for both stay and food!",
  },
  {
    id: "testimonial-005",
    clientName: "sangram khamkar",
    designation: "Previous Client",
    image: P1412740,
    review:
      "We stayed here for overnight hault. It was good clean and neat hotel. Staff was polite and it’s reasonable. Good for family.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <Swiper
          className="testimonial-swiper"
          modules={[Autoplay]}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={0}
          loop={true}
          loopAdditionalSlides={2}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          allowTouchMove={true}
          grabCursor={true}
          watchOverflow={false}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="testimonial-slide"
            >
              <article className="testimonial-card">
                <div className="testimonial-image-wrapper">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.clientName} testimonial`}
                    className="testimonial-image"
                  />
                </div>

                <div className="testimonial-content">
                  <div
                    className="testimonial-quote-icon"
                    aria-hidden="true"
                  >
                    <FaQuoteLeft />
                  </div>

                  <p className="testimonial-review">
                    {testimonial.review}
                  </p>

                  <div className="testimonial-client">
                    <h3 className="testimonial-client-name">
                      {testimonial.clientName}
                    </h3>

                    <span className="testimonial-client-designation">
                      {testimonial.designation}
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

export default Testimonial;
