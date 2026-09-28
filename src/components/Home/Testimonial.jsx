import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";

import "./Testimonial.css";

import Testimonial1 from "../../assets/Testimonial1.jpg";

import Testimonial2 from "../../assets/Testimonial2.jpg";

import Testimonial3 from "../../assets/Testimonial3.jpg";

import Testimonial4 from "../../assets/Testimonial4.png";

const testimonials = [
  {
    id: "testimonial-001",
    clientName: "Nebishen Leo",
    designation: "Previous Client",
    image: Testimonial1,
    review:
      "This hotel was very neat and clean. We were travelling from Kerala to Lucknow, and we always stay here. The service was very good, and the staff were very friendly. The food was excellent. There is also very good parking space for vehicles. I highly recommend this hotel.",
  },
  {
    id: "testimonial-002",
    clientName: "Rahul Sharma",
    designation: "Previous Client",
    image: Testimonial2,
    review:
      "We had a wonderful stay at Sleep N Eat. The rooms were clean, comfortable and well maintained. The staff was polite and helpful throughout our visit. The food was delicious and the overall atmosphere was peaceful. We will definitely visit again.",
  },
  {
    id: "testimonial-003",
    clientName: "Priya Mehta",
    designation: "Previous Client",
    image: Testimonial3,
    review:
      "The hospitality here was excellent from the moment we arrived. Our room was spacious, clean and very comfortable. The service team was attentive and friendly, and the restaurant offered some really delicious food. A great place for a relaxing stay.",
  },
  {
    id: "testimonial-004",
    clientName: "Arjun Kapoor",
    designation: "Previous Client",
    image: Testimonial4,
    review:
      "Sleep N Eat provided us with a very comfortable experience. The property was clean, the rooms were beautiful and the staff made us feel welcome. Everything was well organized and the location was convenient. Highly recommended for both short and long stays.",
  },
  {
    id: "testimonial-005",
    clientName: "Sneha Patil",
    designation: "Previous Client",
    image: Testimonial1,
    review:
      "We really enjoyed our stay here. The room was comfortable, the surroundings were pleasant and the staff was extremely courteous. The food quality was also impressive. It was a smooth and relaxing experience from check-in to check-out.",
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
