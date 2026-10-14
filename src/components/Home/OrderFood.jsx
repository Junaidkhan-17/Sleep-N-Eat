import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Minus, Plus, Trash2, X, MessageCircle } from "lucide-react";
import "./OrderFood.css";

const OWNER_WHATSAPP_NUMBER = "7972823773";

const getNumericPrice = (price) => {
  if (typeof price === "number" && Number.isFinite(price)) {
    return price;
  }

  const firstPrice = String(price ?? "").match(/[\d,]+(?:\.\d+)?/);
  return firstPrice ? Number(firstPrice[0].replace(/,/g, "")) : 0;
};

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

const OrderFood = ({ selectedFood, menuItems = [], onClose }) => {
  const [orderItems, setOrderItems] = useState(() =>
    selectedFood ? [{ ...selectedFood, quantity: 1 }] : []
  );
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAddFood, setSelectedAddFood] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      roomNumber: "",
      notes: "",
    },
  });

  useEffect(() => {
    setOrderItems(
      selectedFood ? [{ ...selectedFood, quantity: 1 }] : []
    );
    setSubmitError("");
    setSelectedAddFood("");
  }, [selectedFood]);

  const availableItems = useMemo(
    () =>
      menuItems.filter(
        (item) =>
          !orderItems.some((orderItem) => orderItem.id === item.id)
      ),
    [menuItems, orderItems]
  );

  const total = useMemo(
    () =>
      orderItems.reduce(
        (sum, item) =>
          sum + getNumericPrice(item.price) * item.quantity,
        0
      ),
    [orderItems]
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const updateQuantity = (id, change) => {
    setOrderItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                1,
                Math.min(99, item.quantity + change)
              ),
            }
          : item
      )
    );
  };

  const addFoodItem = (event) => {
    const itemId = event.target.value;
    setSelectedAddFood("");

    if (!itemId) return;

    const item = menuItems.find(
      (food) => String(food.id) === itemId
    );

    if (!item) return;

    setOrderItems((current) => {
      const existingItem = current.find(
        (orderItem) => orderItem.id === item.id
      );

      if (existingItem) {
        return current.map((orderItem) =>
          orderItem.id === item.id
            ? {
                ...orderItem,
                quantity: Math.min(99, orderItem.quantity + 1),
              }
            : orderItem
        );
      }

      return [...current, { ...item, quantity: 1 }];
    });
  };

  const removeFoodItem = (id) => {
    setOrderItems((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const onSubmit = (values) => {
    setSubmitError("");

    if (!orderItems.length) {
      setSubmitError(
        "Please add at least one food item to your order."
      );
      return;
    }

    const whatsappNumber = OWNER_WHATSAPP_NUMBER.replace(/\D/g, "");

    if (
      !whatsappNumber ||
      whatsappNumber === "REPLACE_WITH_OWNER_WHATSAPP_NUMBER"
    ) {
      setSubmitError(
        "Please configure the restaurant owner's WhatsApp number in OrderFood.jsx before placing orders."
      );
      return;
    }

    const itemsMessage = orderItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} (${item.category ?? "Food"}) — Qty: ${item.quantity} × ${item.price}`
      )
      .join("\n");

    const message = [
      "🍽️ *New Food Order — Sleep N Eat*",
      "",
      `*Customer:* ${values.fullName.trim()}`,
      `*Mobile:* ${values.mobile.trim()}`,
      `*Email:* ${values.email.trim()}`,
      `*Room Number:* ${values.roomNumber.trim()}`,
      "",
      "*Order Items:*",
      itemsMessage,
      `*Estimated Total:* ${formatCurrency(total)}`,
      values.notes.trim()
        ? `*Special Instructions:* ${values.notes.trim()}`
        : "",
      "",
      "Please confirm the order and availability.",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setIsSubmitting(true);

    try {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="food-order-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <section
        className="food-order-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="food-order-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="food-order-header">
          <div className="food-order-heading-content">
            <span className="food-order-eyebrow">SLEEP N EAT</span>
            <h2 className="food-order-title" id="food-order-title">
              Order Food
            </h2>
            <p className="food-order-subtitle">
              Your favourites, freshly prepared.
            </p>
            <div className="food-order-title-line" />
          </div>

          <button
            className="food-order-close"
            type="button"
            onClick={onClose}
            aria-label="Close food order form"
          >
            <X size={21} />
          </button>
        </div>

        {submitError && (
          <div className="food-order-notice" role="alert">
            {submitError}
          </div>
        )}

        <form
          className="food-order-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="food-order-customer-section">
            <div className="food-order-section-heading">
              <span className="food-order-section-number">01</span>
              <h3>Your Details</h3>
            </div>

            <div className="food-order-field">
              <label htmlFor="food-order-full-name">Full Name</label>
              <input
                id="food-order-full-name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName ? "food-order-name-error" : undefined
                }
                {...register("fullName", {
                  required: "Please enter your full name.",
                  minLength: {
                    value: 2,
                    message: "Name must contain at least 2 characters.",
                  },
                })}
              />
              {errors.fullName && (
                <p className="food-order-error" id="food-order-name-error">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="food-order-field">
              <label htmlFor="food-order-mobile">Mobile Number</label>
              <input
                id="food-order-mobile"
                type="tel"
                placeholder="Enter your mobile number"
                autoComplete="tel"
                inputMode="tel"
                aria-invalid={Boolean(errors.mobile)}
                aria-describedby={
                  errors.mobile ? "food-order-mobile-error" : undefined
                }
                {...register("mobile", {
                  required: "Please enter your mobile number.",
                  pattern: {
                    value: /^[+]?[0-9\s()-]{8,18}$/,
                    message: "Enter a valid mobile number.",
                  },
                })}
              />
              {errors.mobile && (
                <p
                  className="food-order-error"
                  id="food-order-mobile-error"
                >
                  {errors.mobile.message}
                </p>
              )}
            </div>

            <div className="food-order-field">
              <label htmlFor="food-order-email">Email Address</label>
              <input
                id="food-order-email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "food-order-email-error" : undefined
                }
                {...register("email", {
                  required: "Please enter your email address.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <p className="food-order-error" id="food-order-email-error">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="food-order-items-section">
            <div className="food-order-section-heading food-order-menu-heading">
              <div className="food-order-section-title-group">
                <span className="food-order-section-number">02</span>
                <h3>Your Selection</h3>
              </div>
              <span className="food-order-item-count">
                {orderItems.length}{" "}
                {orderItems.length === 1 ? "item" : "items"}
              </span>
            </div>

            <div className="food-order-items-list">
              {orderItems.map((item) => (
                <div className="food-order-item" key={item.id}>
                  <div className="food-order-item-name">
                    <strong>{item.name}</strong>
                    <span>
                      {item.price}
                      {item.category ? ` · ${item.category}` : ""}
                    </span>
                  </div>

                  <div
                    className="food-order-quantity"
                    role="group"
                    aria-label={`Quantity for ${item.name}`}
                  >
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <Minus size={14} />
                    </button>
                    <output aria-live="polite">{item.quantity}</output>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, 1)}
                      disabled={item.quantity >= 99}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    className="food-order-remove"
                    type="button"
                    onClick={() => removeFoodItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              ))}
            </div>

            {orderItems.length === 0 && (
              <p className="food-order-empty">
                No food items selected. Add an item below to continue.
              </p>
            )}

            <div className="food-order-field food-order-add-select">
              <label htmlFor="food-order-add-food">
                Add another dish
              </label>
              <select
                id="food-order-add-food"
                value={selectedAddFood}
                onChange={addFoodItem}
              >
                <option value="">Choose from the menu</option>
                {availableItems.map((item) => (
                  <option value={String(item.id)} key={item.id}>
                    {item.name} — {item.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="food-order-total">
              <div className="food-order-total-copy">
                <span>Estimated Total</span>
                <small>Final amount subject to confirmation</small>
              </div>
              <strong>{formatCurrency(total)}</strong>
            </div>
          </div>

          <div className="food-order-field">
            <label htmlFor="food-order-room">Room Number</label>
            <input
              id="food-order-room"
              type="text"
              placeholder="Enter your room number"
              autoComplete="off"
              aria-invalid={Boolean(errors.roomNumber)}
              aria-describedby={
                errors.roomNumber ? "food-order-room-error" : undefined
              }
              {...register("roomNumber", {
                required: "Please enter your room number.",
                maxLength: {
                  value: 20,
                  message: "Room number is too long.",
                },
              })}
            />
            {errors.roomNumber && (
              <p className="food-order-error" id="food-order-room-error">
                {errors.roomNumber.message}
              </p>
            )}
          </div>

          <div className="food-order-field">
            <label htmlFor="food-order-notes">
              Special Instructions <span>(Optional)</span>
            </label>
            <textarea
              id="food-order-notes"
              placeholder="Any preferences or instructions?"
              rows={3}
              aria-invalid={Boolean(errors.notes)}
              {...register("notes", {
                maxLength: {
                  value: 500,
                  message: "Keep instructions under 500 characters.",
                },
              })}
            />
            {errors.notes && (
              <p className="food-order-error">
                {errors.notes.message}
              </p>
            )}
          </div>

          <button
            className="food-order-submit"
            type="submit"
            disabled={isSubmitting || orderItems.length === 0}
          >
            <MessageCircle size={19} />
            <span>
              {isSubmitting ? "Opening WhatsApp…" : "Place Order on WhatsApp"}
            </span>
          </button>

          <p className="food-order-footer-note">
            Your order will be sent to the restaurant for confirmation.
          </p>
        </form>
      </section>
    </div>
  );
};

export default OrderFood;