import React, { useState } from "react";
import "./tourguide.css";

export default function TourGuide() {
  const messages = [
    {
      text: (
        <>
          👋 <strong>Meet Nova</strong> – your campus buddy! <br />
          Here to show you around, crack a joke, and help you discover the
          coolest spots at NHL Stenden.
        </>
      ),
    },
    {
      text: (
        <>
          🕺 <strong>The Disco Toilet</strong> <br />
          Yes, it’s real. Lights, music, and pure chaos.  
          Perfect for a legendary bathroom break.
        </>
      ),
    },
    {
      text: (
        <>
          🍽️ <strong>The Canteen</strong> <br />
          From quick snacks to full meals — this is where students refuel
          between classes.
        </>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <section className="tour-guide-section" onClick={handleClick}>
      <img
        className="guide"
        src="/icons/talking_man.svg"
        alt="Tour Guide"
      />

      <div className="speech-wrapper">
        <div className="speech-bubble">
          <p className="speech-text">{messages[currentIndex].text}</p>
        </div>
      </div>
    </section>
  );
}
