import React, { useState } from "react";
import CarouselCard from "../carouselcard/CarouselCard";
import "./carousel.css";

export default function Carousel({ items }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);
  const next = () => setActive((i) => (i + 1) % items.length);

  return (
    <div className="carousel-2d">

      {/* LEFT ARROW */}
      <img
        src="/arrows/left_arrow_icon.svg"
        className="side-arrow left-arrow"
        onClick={prev}
        alt="left"
      />

      {/* CARDS */}
      <div className="cards-wrapper">
        {items.map((item, idx) => {
          let className = "card hidden";

          if (idx === active) className = "card center";
          else if (idx === (active - 1 + items.length) % items.length)
            className = "card side left";
          else if (idx === (active + 1) % items.length)
            className = "card side right";

          return (
            <div key={idx} className={className}>
              <CarouselCard {...item} />
            </div>
          );
        })}
      </div>

      {/* RIGHT ARROW */}
      <img
        src="/arrows/right_arrow_icon.svg"
        className="side-arrow right-arrow"
        onClick={next}
        alt="right"
      />

    </div>
  );
}
