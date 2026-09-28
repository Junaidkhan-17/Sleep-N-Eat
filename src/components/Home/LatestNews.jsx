import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./LatestNews.css";

import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";

/* =========================================================
   LATEST NEWS DATA
========================================================= */

const latestNews = [
  {
    id: "news-001",
    title: "Things You Must Need to See While You’re In Dubai",
    image: news1,
  },

  {
    id: "news-002",
    title: "Mistakes Every Couple Makes When They Travel Together",
    image: news2,
  },

  {
    id: "news-003",
    title: "Remember This 10 Things Before Booking Hotel.",
    image: news3,
  },

  {
    id: "news-004",
    title: "How to Make Your Hotel Stay More Comfortable",
    image: news2,
  },
];

/*
 * Duplicate the data so Swiper has enough slides
 * for a stable infinite loop while showing 3 cards.
 */
const sliderNews = [
  ...latestNews,
  ...latestNews,
];

/* =========================================================
   COMPONENT
========================================================= */

const LatestNews = () => {
  return (
    <section className="latest-news-section">

      <div className="latest-news-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="latest-news-header">

          <h2 className="latest-news-title">
            Latest News
          </h2>

          <p className="latest-news-description">
            It is a long established fact that a reader will
            be distracted by the readable content of a page.
          </p>

        </div>

        {/* =================================================
            SLIDER
        ================================================= */}

        <div className="latest-news-slider-wrapper">

          <Swiper
            className="latest-news-swiper"

            modules={[Autoplay]}

            /* =============================================
               DESKTOP
            ============================================= */

            slidesPerView={3}
            slidesPerGroup={1}

            spaceBetween={16}

            /* =============================================
               LOOP
            ============================================= */

            loop={true}
            loopAdditionalSlides={4}

            /* =============================================
               AUTOPLAY
            ============================================= */

            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}

            /* =============================================
               ANIMATION
            ============================================= */

            speed={900}

            /* =============================================
               TOUCH
            ============================================= */

            allowTouchMove={true}
            grabCursor={true}

            /* =============================================
               IMPORTANT
            ============================================= */

            watchOverflow={false}

            /* =============================================
               RESPONSIVE
            ============================================= */

            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 14,
              },

              576: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 15,
              },

              768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },

              992: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
            }}
          >

            {sliderNews.map((news, index) => (
              <SwiperSlide
                key={`${news.id}-${index}`}
                className="latest-news-slide"
              >

                <article className="latest-news-card">

                  {/* =====================================
                      IMAGE
                  ===================================== */}

                  <img
                    src={news.image}
                    alt={news.title}
                    className="latest-news-image"
                  />

                  {/* =====================================
                      OVERLAY
                  ===================================== */}

                  <div className="latest-news-overlay"></div>

                  {/* =====================================
                      CONTENT
                  ===================================== */}

                  <div className="latest-news-card-content">

                    <h3 className="latest-news-card-title">
                      {news.title}
                    </h3>

                  </div>

                </article>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>
 
      </div>

    </section>
  );
};

export default LatestNews; 