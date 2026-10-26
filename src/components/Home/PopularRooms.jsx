import React, { useEffect, useState } from "react";
import "./PopularRooms.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaExpandArrowsAlt, FaBed, FaBath, FaStar } from "react-icons/fa";
import Availability from "../../Pages/Availability";
import roomOne from "../../assets/popular1.png";
import P1412698 from "../../assets/image/P1412698.JPG";
import P1412699 from "../../assets/image/P1412699.JPG";
import P1412700 from "../../assets/image/P1412700.JPG";
import P1412701 from "../../assets/image/P1412701.JPG";
import P1412702 from "../../assets/image/P1412702.JPG";
import P1412703 from "../../assets/image/P1412703.JPG";
import P1412704 from "../../assets/image/P1412704.JPG";
import P1412705 from "../../assets/image/P1412705.JPG";
import P1412706 from "../../assets/image/P1412706.JPG";
import P1412707 from "../../assets/image/P1412707.JPG";
import P1412708 from "../../assets/image/P1412708.JPG";
import P1412709 from "../../assets/image/P1412709.JPG";
import P1412710 from "../../assets/image/P1412710.JPG";
import P1412711 from "../../assets/image/P1412711.JPG";
import P1412712 from "../../assets/image/P1412712.JPG";
import P1412713 from "../../assets/image/P1412713.JPG";
import P1412714 from "../../assets/image/P1412714.JPG";
import P1412715 from "../../assets/image/P1412715.JPG";
import P1412716 from "../../assets/image/P1412716.JPG";
import P1412717 from "../../assets/image/P1412717.JPG";
import P1412718 from "../../assets/image/P1412718.JPG";
import P1412675 from "../../assets/image/P1412675.JPG";
import P1412676 from "../../assets/image/P1412676.JPG";
import P1412677 from "../../assets/image/P1412677.JPG";
import P1412678 from "../../assets/image/P1412678.JPG";
import P1412679 from "../../assets/image/P1412679.JPG";
import P1412680 from "../../assets/image/P1412680.JPG";
import P1412681 from "../../assets/image/P1412681.JPG";
import P1412682 from "../../assets/image/P1412682.JPG";
import P1412683 from "../../assets/image/P1412683.JPG";
import P1412684 from "../../assets/image/P1412684.JPG";
import P1412686 from "../../assets/image/P1412686.JPG";
import P1412687 from "../../assets/image/P1412687.JPG";
import P1412688 from "../../assets/image/P1412688.JPG";
import P1412689 from "../../assets/image/P1412689.JPG";
import P1412690 from "../../assets/image/P1412690.JPG";
import P1412691 from "../../assets/image/P1412691.JPG";
import P1412692 from "../../assets/image/P1412692.JPG";
import P1412693 from "../../assets/image/P1412693.JPG";
import P1412694 from "../../assets/image/P1412694.JPG";
import P1412695 from "../../assets/image/P1412695.JPG";
import P1412696 from "../../assets/image/P1412696.JPG";
import P1412697 from "../../assets/image/P1412697.JPG";
import P1412814 from "../../assets/image/P1412814.JPG";
import P1412815 from "../../assets/image/P1412815.JPG";
import P1412816 from "../../assets/image/P1412816.JPG";
import P1412818 from "../../assets/image/P1412818.JPG";
import P1412819 from "../../assets/image/P1412819.JPG";
import P1412822 from "../../assets/image/P1412822.JPG";
import P1412825 from "../../assets/image/P1412825.JPG";
import P1412829 from "../../assets/image/P1412829.JPG";
import P1412830 from "../../assets/image/P1412830.JPG";
import P1412832 from "../../assets/image/P1412832.JPG";
import P1412833 from "../../assets/image/P1412833.JPG";
import P1412834 from "../../assets/image/P1412834.JPG";
import P1412835 from "../../assets/image/P1412835.JPG";
import P1412836 from "../../assets/image/P1412836.JPG";
import P1412840 from "../../assets/image/P1412840.JPG";
import P1412841 from "../../assets/image/P1412841.JPG";
import P1412758 from "../../assets/image/P1412758.JPG";
import P1412759 from "../../assets/image/P1412759.JPG";
import P1412760 from "../../assets/image/P1412760.JPG";
import P1412761 from "../../assets/image/P1412761.JPG";
import P1412762 from "../../assets/image/P1412762.JPG";
import P1412763 from "../../assets/image/P1412763.JPG";
import P1412764 from "../../assets/image/P1412764.JPG";
import P1412765 from "../../assets/image/P1412765.JPG";
import P1412766 from "../../assets/image/P1412766.JPG";
import P1412767 from "../../assets/image/P1412767.JPG";
import P1412769 from "../../assets/image/P1412769.JPG";
import P1412770 from "../../assets/image/P1412770.JPG";
import P1412771 from "../../assets/image/P1412771.JPG";
import P1412772 from "../../assets/image/P1412772.JPG";
import P1412773 from "../../assets/image/P1412773.JPG";
import P1412774 from "../../assets/image/P1412774.JPG";
import P1412775 from "../../assets/image/P1412775.JPG";
import P1412776 from "../../assets/image/P1412776.JPG";
import P1412777 from "../../assets/image/P1412777.JPG";
import P1412778 from "../../assets/image/P1412778.JPG";
import P1412779 from "../../assets/image/P1412779.JPG";
import P1412780 from "../../assets/image/P1412780.JPG";
import P1412781 from "../../assets/image/P1412781.JPG";

import P1412737 from "../../assets/image/P1412737.JPG";
import P1412738 from "../../assets/image/P1412738.JPG";
import P1412739 from "../../assets/image/P1412739.JPG";
import P1412740 from "../../assets/image/P1412740.JPG";
import P1412741 from "../../assets/image/P1412741.JPG";
import P1412742 from "../../assets/image/P1412742.JPG";
import P1412743 from "../../assets/image/P1412743.JPG";
import P1412744 from "../../assets/image/P1412744.JPG";
import P1412745 from "../../assets/image/P1412745.JPG";
import P1412746 from "../../assets/image/P1412746.JPG";
import P1412747 from "../../assets/image/P1412747.JPG";
import P1412748 from "../../assets/image/P1412748.JPG";
import P1412749 from "../../assets/image/P1412749.JPG";
import P1412750 from "../../assets/image/P1412750.JPG";
import P1412751 from "../../assets/image/P1412751.JPG";
import P1412752 from "../../assets/image/P1412752.JPG";
import P1412753 from "../../assets/image/P1412753.JPG";
import P1412754 from "../../assets/image/P1412754.JPG";
import P1412755 from "../../assets/image/P1412755.JPG";
import P1412756 from "../../assets/image/P1412756.JPG";
import P1412757 from "../../assets/image/P1412757.JPG";

import P1412792 from "../../assets/image/P1412792.JPG";
import P1412793 from "../../assets/image/P1412793.JPG";
import P1412794 from "../../assets/image/P1412794.JPG";
import P1412795 from "../../assets/image/P1412795.JPG";
import P1412796 from "../../assets/image/P1412796.JPG";
import P1412797 from "../../assets/image/P1412797.JPG";
import P1412798 from "../../assets/image/P1412798.JPG";
import P1412799 from "../../assets/image/P1412799.JPG";
import P1412800 from "../../assets/image/P1412800.JPG";
import P1412801 from "../../assets/image/P1412801.JPG";
import P1412802 from "../../assets/image/P1412802.JPG";
import P1412803 from "../../assets/image/P1412803.JPG";
import P1412804 from "../../assets/image/P1412804.JPG";
import P1412805 from "../../assets/image/P1412805.JPG";
import P1412806 from "../../assets/image/P1412806.JPG";
import P1412807 from "../../assets/image/P1412807.JPG";
import P1412808 from "../../assets/image/P1412808.JPG";
import P1412809 from "../../assets/image/P1412809.JPG";
import P1412810 from "../../assets/image/P1412810.JPG";
import P1412811 from "../../assets/image/P1412811.JPG";
import P1412812 from "../../assets/image/P1412812.JPG";
import P1412813 from "../../assets/image/P1412813.JPG";

import P1412782 from "../../assets/image/P1412782.JPG";
import P1412783 from "../../assets/image/P1412783.JPG";
import P1412784 from "../../assets/image/P1412784.JPG";
import P1412785 from "../../assets/image/P1412785.JPG";
import P1412786 from "../../assets/image/P1412786.JPG";
import P1412787 from "../../assets/image/P1412787.JPG";
import P1412788 from "../../assets/image/P1412788.JPG";
import P1412789 from "../../assets/image/P1412789.JPG";
import P1412790 from "../../assets/image/P1412790.JPG";
import P1412791 from "../../assets/image/P1412791.JPG";

import P1412719 from "../../assets/image/P1412719.JPG";
import P1412720 from "../../assets/image/P1412720.JPG";
import P1412721 from "../../assets/image/P1412721.JPG";
import P1412722 from "../../assets/image/P1412722.JPG";
import P1412723 from "../../assets/image/P1412723.JPG";
import P1412724 from "../../assets/image/P1412724.JPG";

const ROOM_IMAGE_DISPLAY_TIME = 6500;
const ROOM_IMAGE_FADE_TIME = 2200;

const getRoomPricing = (roomId, roomType) => {
  const isAC = String(roomType).toLowerCase().includes("ac") &&
    !String(roomType).toLowerCase().includes("non");

  if (Number(roomId) === 12) {
    return isAC
      ? { perNight: 1500, twentyFourHours: 2000 }
      : { perNight: 1200, twentyFourHours: 1500 };
  }

  return isAC
    ? { perNight: 1800, twentyFourHours: 3000 }
    : { perNight: 1500, twentyFourHours: 2500 };
};

const PopularRooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,

      images: [
        roomOne,

        P1412698,

        P1412699,

        P1412700,

        P1412701,

        P1412702,

        P1412703,

        P1412704,

        P1412705,

        P1412706,

        P1412707,

        P1412708,

        P1412709,

        P1412710,

        P1412711,

        P1412712,

        P1412713,

        P1412714,

        P1412715,

        P1412716,

        P1412717,

        P1412718,
      ],

      name: "Room 01",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "12 Reviews",

      price: "1800",

      duration: "Night",

      roomType: "AC Room",
    },

    {
      id: 2,

      images: [
        P1412675,

        P1412676,

        P1412677,

        P1412678,

        P1412679,

        P1412680,

        P1412681,

        P1412682,

        P1412683,

        P1412684,

        P1412686,
      ],

      name: "Room 02",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "18 Reviews",

      price: "1500",

      duration: "Night",

      roomType: "AC Room",
    },

    {
      id: 3,

      images: [
        P1412687,

        P1412688,

        P1412689,

        P1412690,

        P1412691,

        P1412692,

        P1412693,

        P1412694,

        P1412695,

        P1412696,

        P1412697,
      ],

      name: "Room 03",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "14 Reviews",

      price: "2500",

      duration: "24 Hours",

      roomType: "AC Room",
    },

    {
      id: 4,

      images: [
        P1412814,

        P1412815,

        P1412816,

        P1412818,

        P1412819,

        P1412822,

        P1412825,

        P1412829,

        P1412832,

        P1412833,

        P1412834,

        P1412835,

        P1412836,

        P1412840,

        P1412841,
      ],

      name: "Room 04",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "10 Reviews",

      price: "2000",

      duration: "24 Hours",

      roomType: "AC Room",
    },

    {
      id: 5,

      images: [
        P1412758,

        P1412759,

        P1412760,

        P1412761,

        P1412762,

        P1412763,

        P1412764,

        P1412765,

        P1412766,

        P1412767,
      ],

      name: "Room 05",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "12 Reviews",

      price: "1800",

      duration: "Night",

      roomType: "AC Room",
    },

    {
      id: 6,

      images: [
        P1412769,

        P1412770,

        P1412771,

        P1412772,

        P1412773,

        P1412774,

        P1412775,

        P1412776,

        P1412777,

        P1412778,

        P1412779,

        P1412780,

        P1412781,
      ],

      name: "Room 06",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "18 Reviews",

      price: "1500",

      duration: "Night",

      roomType: "AC Room",
    },

    {
      id: 7,

      images: [
        P1412737,
        P1412738,
        P1412739,
        P1412740,
        P1412741,
        P1412742,
        P1412743,
        P1412744,
        P1412745,
        P1412746,
        P1412747,
        P1412748,
        P1412749,
        P1412750,
        P1412751,
        P1412752,
        P1412753,
        P1412754,
        P1412755,
        P1412756,
        P1412757,
      ],

      name: "Room 07",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "12 Reviews",

      price: "1800",

      duration: "Night",

      roomType: "AC Room",
    },

    {
      id: 8,

      images: [
        P1412792,
        P1412793,
        P1412794,
        P1412795,
        P1412796,
        P1412797,
        P1412798,
        P1412799,
        P1412800,
        P1412801,
        P1412802,
        P1412803,
        P1412804,
        P1412805,
        P1412806,
        P1412807,
        P1412808,
        P1412809,
        P1412810,
        P1412811,
        P1412812,
        P1412813,
      ],

      name: "Room 08",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "18 Reviews",

      price: "1500",

      duration: "Night",

      roomType: "AC Room",
    },

    {
      id: 9,

      images: [
        P1412782,
        P1412783,
        P1412784,
        P1412785,
        P1412786,
        P1412787,
        P1412788,
        P1412789,
        P1412790,
        P1412791,
      ],

      name: "Room 09",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "14 Reviews",

      price: "2500",

      duration: "24 Hours",

      roomType: "AC Room",
    },

    {
      id: 10,

      images: [P1412719, P1412720, P1412721, P1412722, P1412723, P1412724],

      name: "Room 10",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "10 Reviews",

      price: "2000",

      duration: "24 Hours",

      roomType: "AC Room",
    },

    {
      id: 11,

      images: [
        P1412758,

        P1412759,

        P1412760,

        P1412761,

        P1412762,

        P1412763,

        P1412764,

        P1412765,

        P1412766,

        P1412767,
      ],

      name: "Room 11",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "12 Reviews",

      price: "1800",

      duration: "Night",

      roomType: "AC Room",
    },

    {
      id: 12,

      images: [
        P1412769,

        P1412770,

        P1412771,

        P1412772,

        P1412773,

        P1412774,

        P1412775,

        P1412776,

        P1412777,

        P1412778,

        P1412779,

        P1412780,

        P1412781,
      ],

      name: "Room 12",

      size: "70 sqm",

      beds: "1 Bed",

      bathroom: "1 Bathroom",

      rating: "4.5",

      reviews: "18 Reviews",

      price: "1500",

      duration: "Night",

      roomType: "Non-AC Room",
    },
  ];

  return (
    <section className="popular-rooms-section">
      <div className="popular-rooms-container">
        <div className="popular-rooms-heading">
          <h2>Our Most Popular Rooms</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the
            <br className="popular-rooms-description-break" />
            readable content of a page.
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={16}
          loop={true}
          speed={500}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 15 },
            576: { slidesPerView: 1, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 18 },
            992: { slidesPerView: 3, spaceBetween: 16 },
          }}
          className="popular-rooms-slider"
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id}>
              <RoomCard room={room} onSelectRoom={setSelectedRoom} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {selectedRoom && (
        <Availability
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </section>
  );
};

const RoomCard = ({ room, onSelectRoom }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!room.images || room.images.length <= 1) return undefined;
    let displayTimer;
    let fadeTimer;
    let isMounted = true;

    const startImageTransition = () => {
      if (!isMounted) return;
      setIsFading(true);
      fadeTimer = window.setTimeout(() => {
        if (!isMounted) return;
        setActiveImage(
          (currentIndex) => (currentIndex + 1) % room.images.length,
        );
        setIsFading(false);
        displayTimer = window.setTimeout(
          startImageTransition,
          ROOM_IMAGE_DISPLAY_TIME,
        );
      }, ROOM_IMAGE_FADE_TIME);
    };

    displayTimer = window.setTimeout(
      startImageTransition,
      ROOM_IMAGE_DISPLAY_TIME,
    );
    return () => {
      isMounted = false;
      window.clearTimeout(displayTimer);
      window.clearTimeout(fadeTimer);
    };
  }, [room.images]);

  if (!room.images || room.images.length === 0) return null;

  const nextImage = room.images[(activeImage + 1) % room.images.length];
  const currentImage = room.images[activeImage];

  const handleCardKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelectRoom(room);
    }
  };

  return (
    <article
      className="room-card"
      onClick={() => onSelectRoom(room)}
      onKeyDown={handleCardKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Check availability for ${room.name}`}
    >
      <div className="room-image-wrapper">
        <img
          src={currentImage}
          alt={`${room.name} view ${activeImage + 1}`}
          className={`room-image room-image-current ${isFading ? "room-image-fading-out" : "room-image-visible"}`}
          loading="eager"
          decoding="async"
        />
        <img
          src={nextImage}
          alt=""
          className={`room-image room-image-next ${isFading ? "room-image-fading-in" : "room-image-hidden"}`}
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />
      </div>
      <div className="room-content">
        <h3 className="room-name">{room.name}</h3>
        <div className="room-details">
          <div className="room-detail-item">
            <FaExpandArrowsAlt />
            <span>{room.size}</span>
          </div>
          <div className="room-detail-item">
            <FaBed />
            <span>{room.beds}</span>
          </div>
          <div className="room-detail-item">
            <FaBath />
            <span>{room.bathroom}</span>
          </div>
        </div>
        <div className="room-rating">
          <div className="room-stars">
            {[1, 2, 3, 4].map((star) => (
              <FaStar key={star} />
            ))}
            <FaStar className="empty-star" />
          </div>
          <span className="room-rating-value">{room.rating}</span>
        </div>
<div className="room-price">
  {(() => {
    const pricing = getRoomPricing(room.id, room.roomType);

    return (
      <div className="room-price-options">
        <div className="room-price-option">
          <span className="price-details">Per Night</span>
          <span className="price-value">
            ₹{pricing.perNight.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="room-price-option">
          <span className="price-details">24 Hours</span>
          <span className="price-value">
            ₹{pricing.twentyFourHours.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    );
  })()}
</div>
        <button
          type="button"
          className="room-card-availability-button"
          onClick={(event) => {
            event.stopPropagation();
            onSelectRoom(room);
          }}
        >
          Check Availability
        </button>
      </div>
    </article>
  );
};

export default PopularRooms;
