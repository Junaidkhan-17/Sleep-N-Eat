import React, { useEffect, useRef, useState } from "react";
import "./GalleryExplore.css";

import aboutbook1 from "../../assets/aboutbook1.png";
import aboutbook2 from "../../assets/aboutbook2.png";
import aboutbook3 from "../../assets/aboutbook3.png";

import homehero1 from "../../assets/homehero1.png";
import homehero2 from "../../assets/homehero2.png";
import homehero3 from "../../assets/homehero3.png";


// =========================================================
// GALLERY IMAGE DATA
// =========================================================

const galleryImages = [
  {
    id: "gallery-001",
    title: "Hotel Celebration",
    category: "Events",
    image: aboutbook1,
  },

  {
    id: "gallery-002",
    title: "Grand Event Hall",
    category: "Events",
    image: aboutbook2,
  },

  {
    id: "gallery-003",
    title: "Guest Experience",
    category: "Hospitality",
    image: aboutbook3,
  },

  {
    id: "gallery-004",
    title: "Luxury Stay",
    category: "Rooms",
    image: homehero1,
  },

  {
    id: "gallery-005",
    title: "Hotel Interior",
    category: "Interior",
    image: homehero2,
  },

  {
    id: "gallery-006",
    title: "Premium Hospitality",
    category: "Hospitality",
    image: homehero3,
  },

  {
    id: "gallery-007",
    title: "Elegant Dining",
    category: "Dining",
    image: aboutbook1,
  },

  {
    id: "gallery-008",
    title: "Relaxing Stay",
    category: "Rooms",
    image: aboutbook2,
  },

  {
    id: "gallery-009",
    title: "Beautiful Interiors",
    category: "Interior",
    image: aboutbook3,
  },

  {
    id: "gallery-010",
    title: "Guest Moments",
    category: "Hospitality",
    image: homehero1,
  },
];


// =========================================================
// UPPER SLIDER DATA
//
// Position 2 and Position 4 are the ONLY images
// that will occasionally change/fade.
//
// type:
// "box"        = square/portrait style
// "horizontal" = wide horizontal style
// =========================================================

const initialUpperSlider = [
  {
    slot: 1,
    type: "box",
    imageIndex: 0,
  },

  {
    slot: 2,
    type: "horizontal",
    imageIndex: 1,
  },

  {
    slot: 3,
    type: "box",
    imageIndex: 2,
  },

  {
    slot: 4,
    type: "horizontal",
    imageIndex: 3,
  },

  {
    slot: 5,
    type: "box",
    imageIndex: 4,
  },

  {
    slot: 6,
    type: "horizontal",
    imageIndex: 5,
  },
];


// =========================================================
// LOWER SLIDER DATA
//
// Position 6 and Position 8 are the ONLY images
// that will occasionally change/fade.
// =========================================================

const initialLowerSlider = [
  {
    slot: 6,
    type: "horizontal",
    imageIndex: 5,
  },

  {
    slot: 7,
    type: "box",
    imageIndex: 6,
  },

  {
    slot: 8,
    type: "horizontal",
    imageIndex: 7,
  },

  {
    slot: 9,
    type: "box",
    imageIndex: 8,
  },

  {
    slot: 10,
    type: "horizontal",
    imageIndex: 9,
  },

  {
    slot: 11,
    type: "box",
    imageIndex: 0,
  },
];


// =========================================================
// GALLERY EXPLORE COMPONENT
// =========================================================

const GalleryExplore = () => {

  // =======================================================
  // HOVER / PAUSE STATE
  // =======================================================

  const [isHovered, setIsHovered] = useState(false);


  // =======================================================
  // UPPER SLIDER STATE
  // =======================================================

  const [upperSlider, setUpperSlider] = useState(
    initialUpperSlider
  );


  // =======================================================
  // LOWER SLIDER STATE
  // =======================================================

  const [lowerSlider, setLowerSlider] = useState(
    initialLowerSlider
  );


  // =======================================================
  // FADE STATES
  //
  // Only selected slots use these.
  // =======================================================

  const [upperFadeSlots, setUpperFadeSlots] =
    useState({});

  const [lowerFadeSlots, setLowerFadeSlots] =
    useState({});


  // =======================================================
  // IMAGE POINTERS
  //
  // These keep track of which image should be used
  // next for each changing slot.
  // =======================================================

  const upperSlot2Pointer = useRef(4);

  const upperSlot4Pointer = useRef(5);

  const lowerSlot6Pointer = useRef(0);

  const lowerSlot8Pointer = useRef(1);


  // =======================================================
  // GET NEXT DIFFERENT IMAGE
  // =======================================================

  const getNextImageIndex = (
    currentIndex,
    pointerRef
  ) => {

    let nextIndex =
      pointerRef.current %
      galleryImages.length;


    /*
     * Make sure the new image is not the
     * same as the currently displayed image.
     */

    if (nextIndex === currentIndex) {
      pointerRef.current += 1;

      nextIndex =
        pointerRef.current %
        galleryImages.length;
    }


    pointerRef.current += 1;

    return nextIndex;
  };


  // =======================================================
  // UPPER SLOT 2
  //
  // Slowly changes only slot 2.
  // =======================================================

  useEffect(() => {

    if (isHovered) {
      return;
    }

    const interval = setInterval(() => {

      setUpperFadeSlots((previous) => ({
        ...previous,
        2: "gallery-explore-fade-out",
      }));


      setTimeout(() => {

        setUpperSlider((previous) =>
          previous.map((item) => {

            if (item.slot !== 2) {
              return item;
            }

            const nextImageIndex =
              getNextImageIndex(
                item.imageIndex,
                upperSlot2Pointer
              );

            return {
              ...item,
              imageIndex: nextImageIndex,
            };
          })
        );


        setUpperFadeSlots((previous) => ({
          ...previous,
          2: "gallery-explore-fade-in",
        }));


        setTimeout(() => {

          setUpperFadeSlots((previous) => ({
            ...previous,
            2: "",
          }));

        }, 1500);

      }, 700);

    }, 6500);


    return () => {
      clearInterval(interval);
    };

  }, [isHovered]);


  // =======================================================
  // UPPER SLOT 4
  //
  // Slowly changes only slot 4.
  // =======================================================

  useEffect(() => {

    if (isHovered) {
      return;
    }

    const interval = setInterval(() => {

      setUpperFadeSlots((previous) => ({
        ...previous,
        4: "gallery-explore-fade-out",
      }));


      setTimeout(() => {

        setUpperSlider((previous) =>
          previous.map((item) => {

            if (item.slot !== 4) {
              return item;
            }

            const nextImageIndex =
              getNextImageIndex(
                item.imageIndex,
                upperSlot4Pointer
              );

            return {
              ...item,
              imageIndex: nextImageIndex,
            };
          })
        );


        setUpperFadeSlots((previous) => ({
          ...previous,
          4: "gallery-explore-fade-in",
        }));


        setTimeout(() => {

          setUpperFadeSlots((previous) => ({
            ...previous,
            4: "",
          }));

        }, 1500);

      }, 700);

    }, 8500);


    return () => {
      clearInterval(interval);
    };

  }, [isHovered]);


  // =======================================================
  // LOWER SLOT 6
  //
  // Slowly changes only slot 6.
  // =======================================================

  useEffect(() => {

    if (isHovered) {
      return;
    }

    const interval = setInterval(() => {

      setLowerFadeSlots((previous) => ({
        ...previous,
        6: "gallery-explore-fade-out",
      }));


      setTimeout(() => {

        setLowerSlider((previous) =>
          previous.map((item) => {

            if (item.slot !== 6) {
              return item;
            }

            const nextImageIndex =
              getNextImageIndex(
                item.imageIndex,
                lowerSlot6Pointer
              );

            return {
              ...item,
              imageIndex: nextImageIndex,
            };
          })
        );


        setLowerFadeSlots((previous) => ({
          ...previous,
          6: "gallery-explore-fade-in",
        }));


        setTimeout(() => {

          setLowerFadeSlots((previous) => ({
            ...previous,
            6: "",
          }));

        }, 1500);

      }, 700);

    }, 7200);


    return () => {
      clearInterval(interval);
    };

  }, [isHovered]);


  // =======================================================
  // LOWER SLOT 8
  //
  // Slowly changes only slot 8.
  // =======================================================

  useEffect(() => {

    if (isHovered) {
      return;
    }

    const interval = setInterval(() => {

      setLowerFadeSlots((previous) => ({
        ...previous,
        8: "gallery-explore-fade-out",
      }));


      setTimeout(() => {

        setLowerSlider((previous) =>
          previous.map((item) => {

            if (item.slot !== 8) {
              return item;
            }

            const nextImageIndex =
              getNextImageIndex(
                item.imageIndex,
                lowerSlot8Pointer
              );

            return {
              ...item,
              imageIndex: nextImageIndex,
            };
          })
        );


        setLowerFadeSlots((previous) => ({
          ...previous,
          8: "gallery-explore-fade-in",
        }));


        setTimeout(() => {

          setLowerFadeSlots((previous) => ({
            ...previous,
            8: "",
          }));

        }, 1500);

      }, 700);

    }, 9300);


    return () => {
      clearInterval(interval);
    };

  }, [isHovered]);


  // =======================================================
  // RENDER IMAGE CARD
  // =======================================================

  const renderGalleryCard = (
    item,
    row,
    index
  ) => {

    const image =
      galleryImages[item.imageIndex];


    const fadeClass =
      row === "upper"
        ? upperFadeSlots[item.slot] || ""
        : lowerFadeSlots[item.slot] || "";


    return (
      <div
        key={`${row}-${item.slot}-${index}`}
        className={`
          gallery-explore-image-card
          gallery-explore-image-${item.type}
          ${fadeClass}
        `}
      >

        <img
          src={image.image}
          alt={image.title}
          className="gallery-explore-image"
          loading="lazy"
        />


        {/* =================================================
            IMAGE OVERLAY
        ================================================= */}

        <div className="gallery-explore-image-overlay">

          <span className="gallery-explore-image-category">
            {image.category}
          </span>

          <span className="gallery-explore-image-title">
            {image.title}
          </span>

        </div>

      </div>
    );
  };


  // =======================================================
  // DUPLICATE SLIDES FOR INFINITE LOOP
  // =======================================================

  const upperLoop = [
    ...upperSlider,
    ...upperSlider,
  ];


  const lowerLoop = [
    ...lowerSlider,
    ...lowerSlider,
  ];


  // =======================================================
  // JSX
  // =======================================================

  return (
    <section
      className="gallery-explore-section"

      aria-labelledby="gallery-explore-title"

      /*
       * Hover anywhere inside the complete section
       * to pause both sliders and image changes.
       */

      onMouseEnter={() => {
        setIsHovered(true);
      }}

      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >


      {/* =================================================
          SECTION HEADER
      ================================================= */}

      <div className="gallery-explore-header">

        <span className="gallery-explore-label">
          Explore Us
        </span>


        <h2
          id="gallery-explore-title"
          className="gallery-explore-title"
        >
          A truly exceptional experience
        </h2>

      </div>


      {/* =================================================
          TWO SLIDERS
      ================================================= */}

      <div className="gallery-explore-sliders">


        {/* =================================================
            UPPER SLIDER
            RIGHT → LEFT
        ================================================= */}

        <div className="gallery-explore-slider-wrapper">

          <div className="gallery-explore-slider">

            <div
              className={`
                gallery-explore-track
                gallery-explore-track-left
                ${
                  isHovered
                    ? "gallery-explore-track-paused"
                    : ""
                }
              `}
            >

              {upperLoop.map(
                (item, index) =>
                  renderGalleryCard(
                    item,
                    "upper",
                    index
                  )
              )}

            </div>

          </div>

        </div>


        {/* =================================================
            LOWER SLIDER
            LEFT → RIGHT
        ================================================= */}

        <div className="gallery-explore-slider-wrapper">

          <div className="gallery-explore-slider">

            <div
              className={`
                gallery-explore-track
                gallery-explore-track-right
                ${
                  isHovered
                    ? "gallery-explore-track-paused"
                    : ""
                }
              `}
            >

              {lowerLoop.map(
                (item, index) =>
                  renderGalleryCard(
                    item,
                    "lower",
                    index
                  )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default GalleryExplore;