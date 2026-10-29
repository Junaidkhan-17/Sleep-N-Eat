import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  UserRound,
  Phone,
  Mail,
  CalendarDays,
  ChevronDown,
  BedDouble,
  X,
  MessageCircle,
} from "lucide-react";
import "./Availability.css";

const HOTEL_WHATSAPP_NUMBER = "917972823773";

const getToday = () => {
  const date = new Date();
  const timezoneOffset = date.getTimezoneOffset();

  return new Date(date.getTime() - timezoneOffset * 60 * 1000)
    .toISOString()
    .slice(0, 10);
};

const normalizeRoomType = (value = "") => {
  const normalized = String(value).trim().toLowerCase();

  if (["ac", "a/c", "ac room", "air conditioned"].includes(normalized)) {
    return "AC";
  }

  if (
    ["non-ac", "non ac", "non-ac room", "non a/c", "nonac"].includes(
      normalized
    )
  ) {
    return "Non-AC";
  }

  return "";
};

const formatPrice = (price) => {
  if (price === undefined || price === null || price === "") {
    return "";
  }

  const numericPrice = Number(price);

  if (!Number.isFinite(numericPrice)) {
    return String(price);
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(numericPrice);
};

// Room pricing according to room number and AC / Non-AC type.
const getRoomPricing = (roomId, roomType) => {
  const isAC = String(roomType).trim().toLowerCase() === "ac";

  if (Number(roomId) === 12) {
    return isAC
      ? { perNight: 1500, twentyFourHours: 2000 }
      : { perNight: 1200, twentyFourHours: 1500 };
  }

  return isAC
    ? { perNight: 1800, twentyFourHours: 3000 }
    : { perNight: 1500, twentyFourHours: 2500 };
};

const Availability = ({ room, onClose }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const [submission, setSubmission] = useState({
    status: "idle",
    message: "",
  });

  const roomName =
    room?.name || room?.roomName || room?.title || "Selected Room";

  const roomTypeFromCard = normalizeRoomType(
    room?.roomType || room?.type || room?.category || ""
  );

  const roomImage =
    room?.image || room?.imageUrl || room?.images?.[0] || "";

  const roomDescription =
    room?.description ||
    room?.shortDescription ||
    [room?.size, room?.beds, room?.bathroom].filter(Boolean).join(" • ");

  const today = useMemo(() => getToday(), []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      emailAddress: "",
      checkInDate: "",
      checkOutDate: "",
      bookingDuration: "night",
      roomType: roomTypeFromCard,
    },
  });

  const checkInDate = watch("checkInDate");
  const selectedRoomType = watch("roomType");
  const bookingDuration = watch("bookingDuration");

  const selectedPricing = getRoomPricing(
    room?.id,
    selectedRoomType || roomTypeFromCard
  );

  const selectedPrice =
    bookingDuration === "24hours"
      ? selectedPricing.twentyFourHours
      : selectedPricing.perNight;

  useEffect(() => {
    reset({
      fullName: "",
      mobileNumber: "",
      emailAddress: "",
      checkInDate: "",
      checkOutDate: "",
      bookingDuration: "night",
      roomType: roomTypeFromCard,
    });

    setSubmission({ status: "idle", message: "" });
  }, [room?.id, roomTypeFromCard, reset]);

  // Keep the modal accessible and prevent background scrolling.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])'
        );

        const elements = Array.from(focusableElements).filter(
          (element) => element.getClientRects().length > 0
        );

        if (!elements.length) return;

        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayMouseDown = (event) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  const onSubmit = (values) => {
    setSubmission({ status: "idle", message: "" });

    const cleanWhatsAppNumber = HOTEL_WHATSAPP_NUMBER.replace(/\D/g, "");

    if (!/^\d{8,15}$/.test(cleanWhatsAppNumber)) {
      setSubmission({
        status: "error",
        message:
          "Please configure a valid hotel WhatsApp number in Availability.jsx.",
      });
      return;
    }

    // Calculate the price again from submitted values before sending.
    const submittedPricing = getRoomPricing(room?.id, values.roomType);

    const submittedPrice =
      values.bookingDuration === "24hours"
        ? submittedPricing.twentyFourHours
        : submittedPricing.perNight;

    const durationLabel =
      values.bookingDuration === "24hours" ? "24 Hours" : "Per Night";

    const bookingDetails = [
      ["Room", roomName],
      ["Room Type", values.roomType],
      ["Booking Duration", durationLabel],
      ["Selected Price", formatPrice(submittedPrice)],
      ["Price Per Night", formatPrice(submittedPricing.perNight)],
      ["Price For 24 Hours", formatPrice(submittedPricing.twentyFourHours)],
      ["Room Size", room?.size || "Not specified"],
      ["Beds", room?.beds || "Not specified"],
      ["Guest Name", values.fullName.trim()],
      ["Mobile Number", values.mobileNumber.trim()],
      ["Email Address", values.emailAddress.trim()],
      ["Check-In Date", values.checkInDate],
      ["Check-Out Date", values.checkOutDate],
    ];

    const message = [
      "SLEEP N EAT — ROOM BOOKING REQUEST",
      "",
      ...bookingDetails.map(([label, value]) => `${label}: ${value}`),
      "",
      "Please confirm room availability and booking details.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
      message
    )}`;

    const newWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (!newWindow) {
      setSubmission({
        status: "error",
        message:
          "Your browser may have blocked the WhatsApp window. Please allow pop-ups and try again, or open WhatsApp manually.",
      });
      return;
    }

    setSubmission({
      status: "success",
      message:
        "Your booking message is ready in WhatsApp. Review the details and press Send to contact the hotel.",
    });
  };

  return (
    <div
      className="availability-modal-overlay"
      role="presentation"
      onMouseDown={handleOverlayMouseDown}
    >
      <section
        className="availability-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="availability-heading"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          className="availability-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close availability popup"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="availability-panel">
          <div className="availability-intro">
            <span className="availability-eyebrow">SLEEP N EAT</span>

            <h1 id="availability-heading" className="availability-heading">
              Check Availability
            </h1>

            <p className="availability-subheading">
              Plan your stay with us. Share your details to request your
              preferred room.
            </p>

            <span
              className="availability-heading-line"
              aria-hidden="true"
            />
          </div>

          <article className="availability-room-summary">
            {roomImage ? (
              <img
                className="availability-room-image"
                src={roomImage}
                alt={roomName}
              />
            ) : (
              <div
                className="availability-room-image availability-room-image--empty"
                aria-hidden="true"
              >
                <BedDouble size={27} />
              </div>
            )}

            <div className="availability-room-details">
              <div className="availability-room-name">
                <BedDouble size={17} aria-hidden="true" />
                <h2>{roomName}</h2>
              </div>

              {roomDescription && (
                <p className="availability-room-description">
                  {roomDescription}
                </p>
              )}

              <div className="availability-room-pricing">
                <div className="availability-price-option">
                  <span>Per Night</span>
                  <strong>{formatPrice(selectedPricing.perNight)}</strong>
                </div>

                <div className="availability-price-option">
                  <span>24 Hours</span>
                  <strong>
                    {formatPrice(selectedPricing.twentyFourHours)}
                  </strong>
                </div>
              </div>

              <span className="availability-room-badge">
                {selectedRoomType || roomTypeFromCard || "Select Room Type"}
              </span>
            </div>
          </article>

          {submission.status !== "idle" && (
            <div
              className={`availability-notice availability-notice--${submission.status}`}
              role={submission.status === "error" ? "alert" : "status"}
              aria-live="polite"
            >
              {submission.message}
            </div>
          )}

          <form
            className="availability-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="availability-form-heading">
              <span>01</span>
              <h2>Guest Information</h2>
            </div>

            <div className="availability-field">
              <label htmlFor="availability-full-name">Full Name</label>

              <div className="availability-input-wrap">
                <input
                  id="availability-full-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter full name"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName
                      ? "availability-full-name-error"
                      : undefined
                  }
                  {...register("fullName", {
                    required: "Please enter your full name.",
                    minLength: {
                      value: 2,
                      message: "Name must contain at least 2 characters.",
                    },
                    maxLength: {
                      value: 100,
                      message: "Name cannot exceed 100 characters.",
                    },
                  })}
                />
                <UserRound aria-hidden="true" />
              </div>

              {errors.fullName && (
                <p
                  id="availability-full-name-error"
                  className="availability-error"
                >
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="availability-field">
              <label htmlFor="availability-mobile">Mobile Number</label>

              <div className="availability-input-wrap">
                <input
                  id="availability-mobile"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Enter mobile number"
                  aria-invalid={Boolean(errors.mobileNumber)}
                  aria-describedby={
                    errors.mobileNumber
                      ? "availability-mobile-error"
                      : undefined
                  }
                  {...register("mobileNumber", {
                    required: "Please enter your mobile number.",
                    validate: (value) =>
                      /^\+?[0-9\s()-]{7,20}$/.test(value.trim()) ||
                      "Enter a valid mobile number.",
                  })}
                />
                <Phone aria-hidden="true" />
              </div>

              {errors.mobileNumber && (
                <p
                  id="availability-mobile-error"
                  className="availability-error"
                >
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>

            <div className="availability-field">
              <label htmlFor="availability-email">Email Address</label>

              <div className="availability-input-wrap">
                <input
                  id="availability-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter email address"
                  aria-invalid={Boolean(errors.emailAddress)}
                  aria-describedby={
                    errors.emailAddress
                      ? "availability-email-error"
                      : undefined
                  }
                  {...register("emailAddress", {
                    required: "Please enter your email address.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address.",
                    },
                  })}
                />
                <Mail aria-hidden="true" />
              </div>

              {errors.emailAddress && (
                <p
                  id="availability-email-error"
                  className="availability-error"
                >
                  {errors.emailAddress.message}
                </p>
              )}
            </div>

            <div className="availability-form-heading availability-dates-heading">
              <span>02</span>
              <h2>Your Stay</h2>
            </div>

            <div className="availability-field">
              <label htmlFor="availability-check-in">Check-In Date</label>

              <div className="availability-input-wrap availability-date-wrap">
                <input
                  id="availability-check-in"
                  type="date"
                  min={today}
                  aria-invalid={Boolean(errors.checkInDate)}
                  aria-describedby={
                    errors.checkInDate
                      ? "availability-check-in-error"
                      : undefined
                  }
                  {...register("checkInDate", {
                    required: "Please select your check-in date.",
                    validate: (value) =>
                      value >= getToday() ||
                      "Check-in date cannot be in the past.",
                  })}
                />
                <CalendarDays aria-hidden="true" />
              </div>

              {errors.checkInDate && (
                <p
                  id="availability-check-in-error"
                  className="availability-error"
                >
                  {errors.checkInDate.message}
                </p>
              )}
            </div>

            <div className="availability-field">
              <label htmlFor="availability-check-out">Check-Out Date</label>

              <div className="availability-input-wrap availability-date-wrap">
                <input
                  id="availability-check-out"
                  type="date"
                  min={checkInDate || today}
                  aria-invalid={Boolean(errors.checkOutDate)}
                  aria-describedby={
                    errors.checkOutDate
                      ? "availability-check-out-error"
                      : undefined
                  }
                  {...register("checkOutDate", {
                    required: "Please select your check-out date.",
                    validate: (value) => {
                      if (!checkInDate) {
                        return "Select your check-in date first.";
                      }

                      return (
                        value > checkInDate ||
                        "Check-out must be after check-in."
                      );
                    },
                  })}
                />
                <CalendarDays aria-hidden="true" />
              </div>

              {errors.checkOutDate && (
                <p
                  id="availability-check-out-error"
                  className="availability-error"
                >
                  {errors.checkOutDate.message}
                </p>
              )}
            </div>

            {/* Booking duration selection */}
            <div className="availability-field">
              <label>Choose Booking Duration</label>

              <div
                className="availability-duration-options"
                role="radiogroup"
                aria-label="Booking duration"
              >
                <label
                  className={`availability-duration-option ${
                    bookingDuration === "night" ? "is-selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    value="night"
                    aria-label="Per Night"
                    {...register("bookingDuration", {
                      required: "Please select a booking duration.",
                    })}
                  />
                  <span className="availability-duration-copy">
                    <strong>Per Night</strong>
                    <small>{formatPrice(selectedPricing.perNight)}</small>
                  </span>
                </label>

                <label
                  className={`availability-duration-option ${
                    bookingDuration === "24hours" ? "is-selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    value="24hours"
                    aria-label="24 Hours"
                    {...register("bookingDuration", {
                      required: "Please select a booking duration.",
                    })}
                  />
                  <span className="availability-duration-copy">
                    <strong>24 Hours</strong>
                    <small>
                      {formatPrice(selectedPricing.twentyFourHours)}
                    </small>
                  </span>
                </label>
              </div>

              {errors.bookingDuration && (
                <p className="availability-error">
                  {errors.bookingDuration.message}
                </p>
              )}

              <p className="availability-selected-price">
                Selected rate: <strong>{formatPrice(selectedPrice)}</strong>
              </p>
            </div>

            <div className="availability-field">
              <label htmlFor="availability-room-type">
                Select Room Type <span>(AC / Non-AC)</span>
              </label>

              <div className="availability-input-wrap availability-select-wrap">
                <select
                  id="availability-room-type"
                  aria-invalid={Boolean(errors.roomType)}
                  aria-describedby={
                    errors.roomType
                      ? "availability-room-type-error"
                      : undefined
                  }
                  {...register("roomType", {
                    required: "Please select a room type.",
                    validate: (value) =>
                      ["AC", "Non-AC"].includes(value) ||
                      "Please select a valid room type.",
                  })}
                >
                  <option value="">Select room type</option>
                  <option value="AC">AC Room</option>
                  <option value="Non-AC">Non-AC Room</option>
                </select>

                <ChevronDown aria-hidden="true" />
              </div>

              {errors.roomType && (
                <p
                  id="availability-room-type-error"
                  className="availability-error"
                >
                  {errors.roomType.message}
                </p>
              )}
            </div>

            <button
              className="availability-submit"
              type="submit"
              disabled={isSubmitting}
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>
                {isSubmitting ? "Preparing Request..." : "Reserve Now"}
              </span>
            </button>

            <p className="availability-form-note">
              Your request will be sent to the hotel through WhatsApp. Wait
              until the hotel confirms your booking by call.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Availability;