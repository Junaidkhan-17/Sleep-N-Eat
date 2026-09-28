import React from "react";
import { FaRupeeSign, FaBed, FaHeadset, FaShieldAlt } from "react-icons/fa";

import "./HotelFeatures.css";

const HotelFeatures = () => {
  const features = [
    {
      id: "affordable-pricing",
      icon: <FaRupeeSign />,
      title: "Affordable pricing",
      description:
        "Comfortable stays at budget-friendly prices with no hidden charges.",
    },
    {
      id: "ac-non-ac-rooms",
      icon: <FaBed />,
      title: "AC & Non-AC Rooms",
      description:
        "Choose from well-maintained AC and Non-AC rooms to suit your comfort and budget.",
    },
    {
      id: "flexible-stay-options",
      icon: <FaHeadset />,
      title: "Flexible Stay Options",
      description: "Book Per Night or 24 Hours Stay as per your travel needs.",
    },
    {
      id: "customer-support",
      icon: <FaShieldAlt />,
      title: "24×7 Customer Support",
      description:
        "Our staff is available round the clock to ensure a smooth and comfortable stay.",
    },
  ];

  return (
    <section className="hotel-features-section">
      <div className="hotel-features-container">
        <div className="row hotel-features-row">
          {features.map((feature) => (
            <div className="col-12 col-sm-6 col-lg-3" key={feature.id}>
              <article className="hotel-feature-card">
                {/* Feature Icon */}
                <div className="hotel-feature-icon">{feature.icon}</div>

                {/* Feature Content */}
                <div className="hotel-feature-content">
                  <h3 className="hotel-feature-title">{feature.title}</h3>

                  <p className="hotel-feature-description">
                    {feature.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelFeatures;
