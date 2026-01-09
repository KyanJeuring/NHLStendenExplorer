import React, { useState, useEffect } from "react";
import "./tourguide.css";

export default function TourGuide() {
  const messages = [
    {
      text: (
        <>
          👋 <strong>Nova</strong> – your campus buddy! <br />
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
        </>
      ),
    },
    {
      text: (
        <>
          🍽️ <strong>The Canteen</strong> <br />
          The main refuel spot between classes — snacks to full meals.
        </>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTalking, setIsTalking] = useState(false);

  
  // TEXT TIMER — every 5 seconds
useEffect(() => {
  const textInterval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  }, 3000);

  return () => clearInterval(textInterval);
}, []);


  
 // MOUTH OPENS for 2 seconds when text changes
useEffect(() => {
  setIsTalking(true);

  const mouthTimeout = setTimeout(() => {
    setIsTalking(false);
  }, 2000);

  return () => clearTimeout(mouthTimeout);
}, [currentIndex]);


  return (
    <div className="tour-guide-fixed">
      <section className="tour-guide-section">
        <img
          className="guide"
          src={
            isTalking
              ? "/icons/talking_man_open.svg"
              : "/icons/talking_man.svg"
          }
          alt="Tour Guide"
        />

        <div className="speech-wrapper">
          <div className="speech-bubble">
            <p className="speech-text">
              {messages[currentIndex].text}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
