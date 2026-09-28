import React from "react";
import { NavLink } from "react-router-dom";

import "./LatestNews.css";

import homehero1 from "../../assets/homehero1.png";
import homehero2 from "../../assets/homehero2.png";
import homehero3 from "../../assets/homehero3.png";


// =========================================================
// LATEST NEWS DATA
// Backend-ready structure
// =========================================================

const newsItems = [
  {
    _id: "news-001",
    title: "Things You Must Need to See While You're in Dubai",
    slug: "things-you-must-need-to-see-while-in-dubai",
    category: "Travel",
    image: homehero1,
    status: "published",
    createdAt: "",
  },

  {
    _id: "news-002",
    title: "Mistakes Every Couple Makes When They Travel Together",
    slug: "mistakes-every-couple-makes-when-they-travel-together",
    category: "Travel Tips",
    image: homehero2,
    status: "published",
    createdAt: "",
  },

  {
    _id: "news-003",
    title: "Remember This 10 Things Before Booking Hotel.",
    slug: "remember-this-10-things-before-booking-hotel",
    category: "Hotel Guide",
    image: homehero3,
    status: "published",
    createdAt: "",
  },
];


// =========================================================
// LATEST NEWS COMPONENT
// =========================================================

const LatestNews = () => {
  return (
    <section
      className="gallery-latest-news-section"
      aria-labelledby="gallery-latest-news-title"
    >

      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="gallery-latest-news-header">

        <h2
          id="gallery-latest-news-title"
          className="gallery-latest-news-title"
        >
          Latest News
        </h2>

        <p className="gallery-latest-news-description">
          It is a long established fact that a reader will be
          distracted by the readable content of a page.
        </p>

      </div>


      {/* =====================================================
          NEWS GRID
      ===================================================== */}

      <div className="gallery-latest-news-grid">

        {newsItems.map((news) => (

          <article
            key={news._id}
            className="gallery-latest-news-card"
          >

            {/* =================================================
                FUNCTIONAL NEWS LINK
            ================================================= */}

            <NavLink
              to={`/blog/${news.slug}`}
              className="gallery-latest-news-card-link"
              aria-label={`Read ${news.title}`}
            >

              {/* ===============================================
                  IMAGE
              =============================================== */}

              <div className="gallery-latest-news-image-wrapper">

                <img
                  src={news.image}
                  alt={news.title}
                  className="gallery-latest-news-image"
                  loading="lazy"
                />

                {/* =============================================
                    HOVER OVERLAY
                ============================================= */}

                <div
                  className="gallery-latest-news-overlay"
                  aria-hidden="true"
                >
                  <span className="gallery-latest-news-overlay-category">
                    {news.category}
                  </span>
                </div>
 
                {/* =============================================
                    NEWS TITLE
                    Appears on hover
                ============================================= */}

                <div className="gallery-latest-news-content">

                  <h3 className="gallery-latest-news-card-title">
                    {news.title}
                  </h3>

                </div>

              </div>

            </NavLink>

          </article>

        ))}

      </div>

    </section>
  );
};

export default LatestNews;

