
import React, { useEffect, useRef, useState } from "react";
import "./GalleryExplore.css";

const galleryImageModules = import.meta.glob(
  "../../assets/image/P*.JPG",
  {
    eager: true,
    import: "default",
  }
);

const galleryImages = Object.entries(galleryImageModules)
  .map(([path, image]) => {
    const fileName = path.split("/").pop();
    const match = fileName.match(/^P(\d+)\.JPG$/);

    if (!match) return null;

    const imageNumber = Number(match[1]);

    if (imageNumber < 1412672 || imageNumber > 1413049) {
      return null;
    }

    return {
      id: `gallery-${imageNumber}`,
      title: `P${imageNumber}`,
      category: "Hotel Gallery",
      image,
      imageNumber,
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.imageNumber - b.imageNumber);

const initialUpperSlider = [
  { slot: 1, type: "box", imageIndex: 0 },
  { slot: 2, type: "horizontal", imageIndex: 1 },
  { slot: 3, type: "box", imageIndex: 2 },
  { slot: 4, type: "horizontal", imageIndex: 3 },
  { slot: 5, type: "box", imageIndex: 4 },
  { slot: 6, type: "horizontal", imageIndex: 5 },
];

const initialLowerSlider = [
  { slot: 6, type: "horizontal", imageIndex: 5 },
  { slot: 7, type: "box", imageIndex: 6 },
  { slot: 8, type: "horizontal", imageIndex: 7 },
  { slot: 9, type: "box", imageIndex: 8 },
  { slot: 10, type: "horizontal", imageIndex: 9 },
  { slot: 11, type: "box", imageIndex: 0 },
];

const GalleryExplore = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [upperSlider, setUpperSlider] = useState(initialUpperSlider);
  const [lowerSlider, setLowerSlider] = useState(initialLowerSlider);
  const [upperFadeSlots, setUpperFadeSlots] = useState({});
  const [lowerFadeSlots, setLowerFadeSlots] = useState({});

  const upperSlot2Pointer = useRef(4);
  const upperSlot4Pointer = useRef(5);
  const lowerSlot6Pointer = useRef(0);
  const lowerSlot8Pointer = useRef(1);

  const getNextImageIndex = (currentIndex, pointerRef) => {
    if (galleryImages.length <= 1) return currentIndex;

    let nextIndex = pointerRef.current % galleryImages.length;

    if (nextIndex === currentIndex) {
      pointerRef.current += 1;
      nextIndex = pointerRef.current % galleryImages.length;
    }

    pointerRef.current += 1;
    return nextIndex;
  };

  useEffect(() => {
    if (isHovered || galleryImages.length <= 1) return undefined;

    let changeTimeout;
    let resetTimeout;

    const interval = window.setInterval(() => {
      setUpperFadeSlots((previous) => ({
        ...previous,
        2: "gallery-explore-fade-out",
      }));

      changeTimeout = window.setTimeout(() => {
        setUpperSlider((previous) =>
          previous.map((item) => {
            if (item.slot !== 2) return item;

            return {
              ...item,
              imageIndex: getNextImageIndex(
                item.imageIndex,
                upperSlot2Pointer
              ),
            };
          })
        );

        setUpperFadeSlots((previous) => ({
          ...previous,
          2: "gallery-explore-fade-in",
        }));

        resetTimeout = window.setTimeout(() => {
          setUpperFadeSlots((previous) => ({
            ...previous,
            2: "",
          }));
        }, 1500);
      }, 700);
    }, 6500);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(changeTimeout);
      window.clearTimeout(resetTimeout);
    };
  }, [isHovered]);

  useEffect(() => {
    if (isHovered || galleryImages.length <= 1) return undefined;

    let changeTimeout;
    let resetTimeout;

    const interval = window.setInterval(() => {
      setUpperFadeSlots((previous) => ({
        ...previous,
        4: "gallery-explore-fade-out",
      }));

      changeTimeout = window.setTimeout(() => {
        setUpperSlider((previous) =>
          previous.map((item) => {
            if (item.slot !== 4) return item;

            return {
              ...item,
              imageIndex: getNextImageIndex(
                item.imageIndex,
                upperSlot4Pointer
              ),
            };
          })
        );

        setUpperFadeSlots((previous) => ({
          ...previous,
          4: "gallery-explore-fade-in",
        }));

        resetTimeout = window.setTimeout(() => {
          setUpperFadeSlots((previous) => ({
            ...previous,
            4: "",
          }));
        }, 1500);
      }, 700);
    }, 8500);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(changeTimeout);
      window.clearTimeout(resetTimeout);
    };
  }, [isHovered]);

  useEffect(() => {
    if (isHovered || galleryImages.length <= 1) return undefined;

    let changeTimeout;
    let resetTimeout;

    const interval = window.setInterval(() => {
      setLowerFadeSlots((previous) => ({
        ...previous,
        6: "gallery-explore-fade-out",
      }));

      changeTimeout = window.setTimeout(() => {
        setLowerSlider((previous) =>
          previous.map((item) => {
            if (item.slot !== 6) return item;

            return {
              ...item,
              imageIndex: getNextImageIndex(
                item.imageIndex,
                lowerSlot6Pointer
              ),
            };
          })
        );

        setLowerFadeSlots((previous) => ({
          ...previous,
          6: "gallery-explore-fade-in",
        }));

        resetTimeout = window.setTimeout(() => {
          setLowerFadeSlots((previous) => ({
            ...previous,
            6: "",
          }));
        }, 1500);
      }, 700);
    }, 7200);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(changeTimeout);
      window.clearTimeout(resetTimeout);
    };
  }, [isHovered]);

  useEffect(() => {
    if (isHovered || galleryImages.length <= 1) return undefined;

    let changeTimeout;
    let resetTimeout;

    const interval = window.setInterval(() => {
      setLowerFadeSlots((previous) => ({
        ...previous,
        8: "gallery-explore-fade-out",
      }));

      changeTimeout = window.setTimeout(() => {
        setLowerSlider((previous) =>
          previous.map((item) => {
            if (item.slot !== 8) return item;

            return {
              ...item,
              imageIndex: getNextImageIndex(
                item.imageIndex,
                lowerSlot8Pointer
              ),
            };
          })
        );

        setLowerFadeSlots((previous) => ({
          ...previous,
          8: "gallery-explore-fade-in",
        }));

        resetTimeout = window.setTimeout(() => {
          setLowerFadeSlots((previous) => ({
            ...previous,
            8: "",
          }));
        }, 1500);
      }, 700);
    }, 9300);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(changeTimeout);
      window.clearTimeout(resetTimeout);
    };
  }, [isHovered]);

  const renderGalleryCard = (item, row, index) => {
    const image = galleryImages[item.imageIndex];

    if (!image) return null;

    const fadeClass =
      row === "upper"
        ? upperFadeSlots[item.slot] || ""
        : lowerFadeSlots[item.slot] || "";

    return (
      <div
        key={`${row}-${item.slot}-${index}`}
        className={`gallery-explore-image-card gallery-explore-image-${item.type} ${fadeClass}`}
      >
        <img
          src={image.image}
          alt={image.title}
          className="gallery-explore-image"
          loading="lazy"
          decoding="async"
          draggable="false"
        />

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

  if (galleryImages.length === 0) {
    return null;
  }

  const upperLoop = [...upperSlider, ...upperSlider];
  const lowerLoop = [...lowerSlider, ...lowerSlider];

  return (
    <section
      className="gallery-explore-section"
      aria-labelledby="gallery-explore-title"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="gallery-explore-header">
        <span className="gallery-explore-label">Explore Us</span>

        <h2
          id="gallery-explore-title"
          className="gallery-explore-title"
        >
          A truly exceptional experience
        </h2>
      </div>

      <div className="gallery-explore-sliders">
        <div className="gallery-explore-slider-wrapper">
          <div className="gallery-explore-slider">
            <div
              className={`gallery-explore-track gallery-explore-track-left ${
                isHovered ? "gallery-explore-track-paused" : ""
              }`}
            >
              {upperLoop.map((item, index) =>
                renderGalleryCard(item, "upper", index)
              )}
            </div>
          </div>
        </div>

        <div className="gallery-explore-slider-wrapper">
          <div className="gallery-explore-slider">
            <div
              className={`gallery-explore-track gallery-explore-track-right ${
                isHovered ? "gallery-explore-track-paused" : ""
              }`}
            >
              {lowerLoop.map((item, index) =>
                renderGalleryCard(item, "lower", index)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryExplore;
