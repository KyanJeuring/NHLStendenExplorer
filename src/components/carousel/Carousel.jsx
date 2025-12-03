import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CarouselCard from "../carouselcard/CarouselCard";
import "./carousel.css";

export default function Carousel() {
  const items = [
    {
      id: 1,
      title: "Need a break? Clear your head in our legendary Disco Toilet!",
      description:
        "Step into a flash of lights, colors, and music - because even your bathroom break should be an experience at NHL Stenden.",
    },
    {
      id: 2,
      title: "Need a break? Clear your head in our legendary Disco Toilet!",
      description:
        "Step into a flash of lights, colors, and music - because even your bathroom break should be an experience at NHL Stenden.",
    },
    {
      id: 3,
      title: "Need a break? Clear your head in our legendary Disco Toilet!",
      description:
        "Step into a flash of lights, colors, and music - because even your bathroom break should be an experience at NHL Stenden.",
    },
    {
      id: 4,
      title: "Need a break? Clear your head in our legendary Disco Toilet!",
      description:
        "Step into a flash of lights, colors, and music - because even your bathroom break should be an experience at NHL Stenden.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % items.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + items.length) % items.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir === 1 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir === 1 ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <div className="carousel-container">
      <button className="side-btn left" onClick={prev}>‹</button>

      <div className="carousel-window">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={items[index].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            <CarouselCard
              title={items[index].title}
              description={items[index].description}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="side-btn right" onClick={next}>›</button>
    </div>
  );
}
