import React, { useState, useEffect, useMemo } from "react";
import "./tourguide.css";

const translations = {
  en: {
    message1: {
      bold: "Nova",
      text: "– your campus buddy!",
      subtext: "Here to show you around, crack a joke, and help you discover the coolest spots at NHL Stenden."
    },
    message2: {
      bold: "The Disco Toilet",
      text: "Yes, it's real. Lights, music, and pure chaos."
    },
    message3: {
      bold: "The Canteen",
      text: "The main refuel spot between classes — snacks to full meals."
    }
  },
  nl: {
    message1: {
      bold: "Nova",
      text: "– jouw campus buddy!",
      subtext: "Hier om je rond te leiden, een grapje te maken en je te helpen de coolste plekken van NHL Stenden te ontdekken."
    },
    message2: {
      bold: "De Disco Toilet",
      text: "Ja, het is echt. Lichten, muziek en pure chaos."
    },
    message3: {
      bold: "De Kantine",
      text: "Dé plek om op te laden tussen de lessen door — van snacks tot complete maaltijden."
    }
  }
};

export default function TourGuide({ lang }) {
  const translated = useMemo(() => translations[lang], [lang]);
  
  const messages = [
    {
      text: (
        <>
          👋 <strong>{translated.message1.bold}</strong> {translated.message1.text} <br />
          {translated.message1.subtext}
        </>
      ),
    },
    {
      text: (
        <>
          🕺 <strong>{translated.message2.bold}</strong> <br />
          {translated.message2.text}
        </>
      ),
    },
    {
      text: (
        <>
          🍽️ <strong>{translated.message3.bold}</strong> <br />
          {translated.message3.text}
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
  }, [messages.length]);


  
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