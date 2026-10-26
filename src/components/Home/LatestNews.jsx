import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./LatestNews.css";

import P1413046 from "../../assets/image/P1413046.JPG";
import P1413034 from "../../assets/image/P1413034.JPG";
import P1412865 from "../../assets/image/P1412865.JPG";
import P1412833 from "../../assets/image/P1412833.JPG";

/* =========================================================
   LATEST NEWS DATA
========================================================= */

const latestNews = [
  {
    id: "news-001",
    title: "Where Every Stay Feels Special",
    image: P1413046,
  },

  {
    id: "news-002",
    title: "An Experience Beyond Expectations",
    image: P1413034,
  },

  {
    id: "news-003",
    title: "Service Begins With a Smile.",
    image: P1412865,
  },

  {
    id: "news-004",
    title: "A Place to Rest, A Reason to Return",
    image: P1412833,
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