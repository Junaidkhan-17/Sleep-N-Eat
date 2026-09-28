import React from "react";

import "./ContactMap.css";


// =========================================================
// GOOGLE MAP LOCATION
// =========================================================

const GOOGLE_MAP_URL =
  "https://www.google.com/maps/place/Sleep+N+Eat/@21.0839592,79.1676868,813m/data=!3m2!1e3!4b1!4m9!3m8!1s0x3bd4b90038bade0b:0x1b6461c952c2d0f0!5m2!4m1!1i2!8m2!3d21.0839592!4d79.1676868!16s%2Fg%2F11v_4j0791!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D";


// =========================================================
// CONTACT MAP COMPONENT
// =========================================================

const ContactMap = () => {
  const handleMapClick = () => {
    window.open(
      GOOGLE_MAP_URL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="contact-map-section"
      aria-label="Sleep N Eat location"
    >

      <div
        className="contact-map-card"
        onClick={handleMapClick}
        role="link"
        tabIndex={0}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault(); 
            handleMapClick();
          }
        }}
        aria-label="Open Sleep N Eat location in Google Maps"
      >

        <iframe
          className="contact-map-iframe"
          title="Sleep N Eat Google Maps Location"
          src="https://www.google.com/maps?q=21.0839592,79.1676868&z=16&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="contact-map-overlay">
          <span className="contact-map-overlay-text">
            View Location on Google Maps
          </span>
        </div>

      </div>

    </section>
  );
};

export default ContactMap;