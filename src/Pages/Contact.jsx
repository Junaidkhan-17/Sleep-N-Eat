import React from "react";

import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactMap from "../components/Contact/ContactMap";
import ContactFAQ from "../components/Contact/ContactFAQ";

const Contact = () => {
  return (
    <main className="Contact-page">

      {/* ================= HERO ================= */}
      <ContactHero />

      {/* ================= POPULAR ROOMS ================= */}
      <ContactInfo />

      {/* ================= PROMOTIONAL OFFER ================= */}
      <ContactMap />

      <ContactFAQ />

    </main>
  );
};

export default Contact;