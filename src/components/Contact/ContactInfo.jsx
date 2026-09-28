import React from "react";
import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Users,
} from "lucide-react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import aboutbook1 from "../../assets/aboutbook1.png";
import aboutbook2 from "../../assets/aboutbook2.png";
import aboutbook3 from "../../assets/aboutbook3.png";

import "./ContactInfo.css";


// =========================================================
// CONTACT CONFIGURATION
// Backend-ready structure
// =========================================================

const contactConfig = {
  phone: "+91 70707 07261",
  phoneRaw: "917070707261",

  email: "info@sleepneat.com",

  address:
    "Sleep N Eat, Vhiraon, Nagpur, Maharashtra 440034",

  whatsappNumber: "917070707261",
};


// =========================================================
// CONTACT INFO COMPONENT
// =========================================================

const ContactInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onTouched",
  });


  // =======================================================
  // WHATSAPP ENQUIRY SUBMISSION
  // =======================================================

  const handleEnquirySubmit = (data) => {
    const whatsappMessage = `
Hello Sleep N Eat,

I would like to make an enquiry.

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

Thank you.
    `.trim();


    const whatsappUrl =
      `https://wa.me/${contactConfig.whatsappNumber}` +
      `?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );


    reset();
  };


  return (
    <section
      className="contact-info-section"
      aria-labelledby="contact-info-title"
    >

      <div className="contact-info-container">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="contact-info-left">

          <span className="contact-info-eyebrow">
            GET TO KNOW US
          </span>


          <h2
            id="contact-info-title"
            className="contact-info-heading"
          >
            Lets talk our Expert Travel Guides
          </h2>


          <p className="contact-info-description">
            Our expert travel guides bring every destination
            to life with local knowledge passion and care.
            They ensure safe authentic.
          </p>


          {/* =================================================
              TEAM
          ================================================= */}

          <div className="contact-team">

            <div className="contact-team-heading">
              <Users size={27} />
              <span>5+ Expert team member</span>
            </div>


            <div className="contact-team-avatars">

  <AvatarGroup
    max={4}
    className="contact-avatar-group"
  >

    <Avatar
      alt="Sleep N Eat Team Member"
      src={aboutbook1}
    />

    <Avatar
      alt="Sleep N Eat Team Member"
      src={aboutbook2}
    />

    <Avatar
      alt="Sleep N Eat Team Member"
      src={aboutbook3}
    />

    <Avatar
      alt="Sleep N Eat Team Member"
      src={aboutbook1}
    />

  </AvatarGroup>

</div>

          </div>


          <div className="contact-info-divider"></div>


          {/* =================================================
              CONTACT DETAILS
          ================================================= */}

          <div className="contact-details-grid">

            {/* PHONE */}

            <a
              href={`tel:${contactConfig.phoneRaw}`}
              className="contact-detail-item"
            >

              <span className="contact-detail-icon">
                <Phone size={18} />
              </span>

              <span className="contact-detail-content">

                <span className="contact-detail-label">
                  Call Us Directly
                </span>

                <span className="contact-detail-value">
                  {contactConfig.phone}
                </span>

              </span>

            </a>


            {/* EMAIL */}

            <a
              href={`mailto:${contactConfig.email}`}
              className="contact-detail-item"
            >

              <span className="contact-detail-icon">
                <Mail size={18} />
              </span>

              <span className="contact-detail-content">

                <span className="contact-detail-label">
                  Need Support?
                </span>

                <span className="contact-detail-value">
                  {contactConfig.email}
                </span>

              </span>

            </a>


            {/* ADDRESS */}

            <div className="contact-detail-item">

              <span className="contact-detail-icon">
                <MapPin size={18} />
              </span>

              <span className="contact-detail-content">

                <span className="contact-detail-label">
                  Address
                </span>

                <span className="contact-detail-value">
                  {contactConfig.address}
                </span>

              </span>

            </div>


            {/* START CHAT */}

            <a
              href={`https://wa.me/${contactConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-item"
            >

              <span className="contact-detail-icon">
                <MessageCircle size={18} />
              </span>

              <span className="contact-detail-content">

                <span className="contact-detail-label">
                  Start Chat
                </span>

                <span className="contact-detail-value">
                  WhatsApp Support
                </span>

              </span>

            </a>

          </div>


          <a
            href="/faq"
            className="contact-faq-link"
          >
            See our Refund Policies or FAQ
          </a>


          <div className="contact-info-divider"></div>


          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <div className="contact-social-section">

            <h3 className="contact-social-title">
              Follow Us
            </h3>


            <div className="contact-social-links">

             <a
  href="#facebook"
  className="contact-social-link"
  aria-label="Facebook"
>
  f
</a>


              <a
                href="#twitter"
                className="contact-social-link"
                aria-label="Twitter / X"
              >
                X
              </a>


              <a
  href="#linkedin"
  className="contact-social-link"
  aria-label="LinkedIn"
>
  in
</a>


<a
  href="#instagram"
  className="contact-social-link"
  aria-label="Instagram"
>
  ◎
</a>

            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT SIDE — ENQUIRY FORM
        ================================================= */}

        <div className="contact-form-wrapper">

          <span className="contact-form-eyebrow">
            SEND A MESSAGE
          </span>


          <h2 className="contact-form-heading">
            Looking For Any Help
          </h2>


          <form
            className="contact-form"
            onSubmit={handleSubmit(handleEnquirySubmit)}
            noValidate
          >

            {/* =================================================
                NAME
            ================================================= */}

            <div className="contact-form-field">

              <label htmlFor="contact-name">
                Name <span>*</span>
              </label>

              <input
                id="contact-name"
                type="text"
                placeholder="Your Name..."
                autoComplete="name"
                {...register("name", {
                  required: "Name is required.",
                  minLength: {
                    value: 2,
                    message:
                      "Name must contain at least 2 characters.",
                  },
                })}
              />

              {errors.name && (
                <small className="contact-form-error">
                  {errors.name.message}
                </small>
              )}

            </div>


            {/* =================================================
                EMAIL
            ================================================= */}

            <div className="contact-form-field">

              <label htmlFor="contact-email">
                Email <span>*</span>
              </label>

              <input
                id="contact-email"
                type="email"
                placeholder="Your Email..."
                autoComplete="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value:
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:
                      "Please enter a valid email address.",
                  },
                })}
              />

              {errors.email && (
                <small className="contact-form-error">
                  {errors.email.message}
                </small>
              )}

            </div>


            {/* =================================================
                SUBJECT
            ================================================= */}

            <div className="contact-form-field">

              <label htmlFor="contact-subject">
                Subject <span>*</span>
              </label>

              <input
                id="contact-subject"
                type="text"
                placeholder="Your Subject"
                {...register("subject", {
                  required: "Subject is required.",
                  minLength: {
                    value: 3,
                    message:
                      "Subject must contain at least 3 characters.",
                  },
                })}
              />

              {errors.subject && (
                <small className="contact-form-error">
                  {errors.subject.message}
                </small>
              )}

            </div>


            {/* =================================================
                MESSAGE
            ================================================= */}

            <div className="contact-form-field">

              <label htmlFor="contact-message">
                Message <span>*</span>
              </label>

              <textarea
                id="contact-message"
                rows="6"
                placeholder="Write your message"
                {...register("message", {
                  required: "Message is required.",
                  minLength: {
                    value: 10,
                    message:
                      "Message must contain at least 10 characters.",
                  },
                })}
              />

              {errors.message && (
                <small className="contact-form-error">
                  {errors.message.message}
                </small>
              )}

            </div>


            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              className="contact-form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Preparing WhatsApp..."
                : "Submit Now"}

              <Send size={17} />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;