import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./SubscribeSection.css";

const SubscribeSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      setSubmitError("");
      setSubmitSuccess(false);

      /*
       * =====================================================
       * BACKEND-READY SUBSCRIPTION FLOW
       * =====================================================
       *
       * Later this can be replaced with:
       *
       * await newsletterService.subscribe(data);
       *
       * The component architecture does not need to change.
       */

      await new Promise((resolve) => {
        setTimeout(resolve, 700);
      });

      console.log("Newsletter subscription:", data);

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Newsletter subscription failed:", error);

      setSubmitError(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="subscribe-section">
      {/* =====================================================
          DECORATIVE BACKGROUND ELEMENTS
      ===================================================== */}

      <div
        className="subscribe-decoration subscribe-decoration-left"
        aria-hidden="true"
      />

      <div
        className="subscribe-decoration subscribe-decoration-right"
        aria-hidden="true"
      />

      <div
        className="subscribe-decoration subscribe-decoration-bottom"
        aria-hidden="true"
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="subscribe-container">
        <div className="subscribe-content">

          {/* Heading */}

          <h2 className="subscribe-title">
            Subscribe &amp; Get Special Discount!
          </h2>

          {/* Description */}

          <p className="subscribe-description">
            Don’t Wanna Miss Somethings? Subscribe Right Now And Get
            <br className="subscribe-description-break" />
            The Special Discount And Monthly Newsletter.
          </p>

          {/* =================================================
              SUBSCRIPTION FORM
          ================================================= */}

          <form
            className="subscribe-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="subscribe-input-wrapper">
              <input
                type="email"
                className={`subscribe-input ${
                  errors.email
                    ? "subscribe-input-error"
                    : ""
                }`}
                placeholder="Enter Your Email Address..."
                autoComplete="email"
                aria-label="Email address"
                aria-invalid={
                  errors.email ? "true" : "false"
                }
                disabled={isSubmitting}
                {...register("email", {
                  required:
                    "Please enter your email address.",

                  pattern: {
                    value:
                      /^[A-Z0-9.\_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                    message:
                      "Please enter a valid email address.",
                  },
                })}
              />
            </div>

            <button
              type="submit"
              className="subscribe-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="subscribe-button-spinner"
                    aria-hidden="true"
                  />

                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>

          {/* =================================================
              VALIDATION MESSAGE
          ================================================= */}

          {errors.email && (
            <p
              className="subscribe-form-message subscribe-form-error"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}

          {/* =================================================
              SUCCESS MESSAGE
          ================================================= */}

          {submitSuccess && (
            <p
              className="subscribe-form-message subscribe-form-success"
              role="status"
            >
              Thank you! You have been subscribed successfully.
            </p>
          )}

          {/* =================================================
              ERROR MESSAGE
          ================================================= */}

          {submitError && (
            <p
              className="subscribe-form-message subscribe-form-error"
              role="alert"
            >
              {submitError}
            </p>
          )}

        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;