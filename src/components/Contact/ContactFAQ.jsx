import React, { useState } from "react";
import "./ContactFAQ.css";

// =========================================================
// FAQ DATA
// Backend-ready structure
// =========================================================

const faqItems = [
  {
    id: "faq-001",
    question: "What is included?",
    answer:
      "Our stay includes a comfortable room, complimentary Wi-Fi, room service, housekeeping, access to available hotel facilities, and a relaxing hospitality experience.",
  },
  {
    id: "faq-002",
    question: "How do I make a payment for my booking?",
    answer:
      "You can complete your booking payment through the available payment options during the reservation process. Once the payment is confirmed, your booking details will be shared with you.",
  },
  {
    id: "faq-003",
    question: "How can I customize my tour itinerary?",
    answer:
      "Our team can help you customize your itinerary based on your preferred destinations, duration, activities, dining preferences, and travel requirements.",
  },
  {
    id: "faq-004",
    question: "Do you offer adventure trips?",
    answer:
      "Yes. We can help guests explore nearby activities and experiences depending on availability, season, location, and individual preferences.",
  },
  {
    id: "faq-005",
    question: "What are the top things to do in Osaka?",
    answer:
      "Popular experiences include exploring Osaka Castle, visiting Dotonbori, enjoying local cuisine, discovering traditional markets, and exploring the city's shopping and entertainment areas.",
  },
  {
    id: "faq-006",
    question: "What are the for families in Osaka?",
    answer:
      "Families can enjoy attractions such as Osaka Castle, Universal Studios Japan, aquariums, parks, shopping areas, and family-friendly dining experiences.",
  },
  {
    id: "faq-007",
    question: "How can I customize my tour itinerary?",
    answer:
      "You can discuss your preferred schedule, destinations, activities, and budget with our team, and we can help create an itinerary suited to your travel plans.",
  },
  {
    id: "faq-008",
    question: "Do you offer adventure trips?",
    answer:
      "Adventure experiences can be arranged based on the destination and available activities. Contact our team to discuss the experience you are interested in.",
  },
];


// =========================================================
// CONTACT FAQ COMPONENT
// =========================================================

const ContactFAQ = () => {
  const [openFaqId, setOpenFaqId] = useState("faq-001");

  // =======================================================
  // TOGGLE FAQ
  // =======================================================

  const handleFaqToggle = (faqId) => {
    setOpenFaqId((currentId) =>
      currentId === faqId ? null : faqId
    );
  };

  return (
    <section
      className="contact-faq-section"
      aria-labelledby="contact-faq-title"
    >
      <div className="contact-faq-container">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <div className="contact-faq-header">
          <h2
            id="contact-faq-title"
            className="contact-faq-title"
          >
            Frequently Asked Questions
          </h2>
        </div>


        {/* =================================================
            FAQ GRID
        ================================================= */}

        <div className="contact-faq-grid">

          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="contact-faq-column">

            {faqItems
              .filter((_, index) => index < 4)
              .map((faq) => {
                const isOpen = openFaqId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`contact-faq-item ${
                      isOpen
                        ? "contact-faq-item-open"
                        : ""
                    }`}
                  >

                    {/* QUESTION */}

                    <button
                      type="button"
                      className="contact-faq-question"
                      onClick={() =>
                        handleFaqToggle(faq.id)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`${faq.id}-answer`}
                    >

                      <span className="contact-faq-icon">
                        {isOpen ? "−" : "+"}
                      </span>

                      <span className="contact-faq-question-text">
                        {faq.question}
                      </span>

                    </button>


                    {/* ANSWER */}

                    <div
                      id={`${faq.id}-answer`}
                      className="contact-faq-answer-wrapper"
                      aria-hidden={!isOpen}
                    >
                      <div className="contact-faq-answer">
                        {faq.answer}
                      </div>
                    </div>

                  </div>
                );
              })}

          </div>


          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <div className="contact-faq-column">

            {faqItems
              .filter((_, index) => index >= 4)
              .map((faq) => {
                const isOpen = openFaqId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`contact-faq-item ${
                      isOpen
                        ? "contact-faq-item-open"
                        : ""
                    }`}
                  >

                    {/* QUESTION */}

                    <button
                      type="button"
                      className="contact-faq-question"
                      onClick={() =>
                        handleFaqToggle(faq.id)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`${faq.id}-answer`}
                    >

                      <span className="contact-faq-icon">
                        {isOpen ? "−" : "+"}
                      </span>

                      <span className="contact-faq-question-text">
                        {faq.question}
                      </span>

                    </button>


                    {/* ANSWER */}

                    <div
                      id={`${faq.id}-answer`}
                      className="contact-faq-answer-wrapper"
                      aria-hidden={!isOpen}
                    >
                      <div className="contact-faq-answer">
                        {faq.answer}
                      </div>
                    </div>

                  </div>
                );
              })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFAQ;