import React, { useMemo } from "react";
import "./tourguide.css";

const translations = {
  en: {
    bold: "Nova",
    text: "– your campus buddy!",
    subtext:
      "Here to show you around, crack a joke, and help you discover the coolest spots at NHL Stenden.",
  },
  nl: {
    bold: "Nova",
    text: "– jouw campus buddy!",
    subtext:
      "Hier om je rond te leiden, een grapje te maken en je te helpen de coolste plekken van NHL Stenden te ontdekken.",
  },
};

export default function TourGuideStatic({ lang = "en" }) {
  const t = useMemo(() => translations[lang] ?? translations.en, [lang]);

  return (
    <div className="tour-guide-fixed">
      <section className="tour-guide-section">
        <img
          className="guide"
          src="/icons/talking_man.svg"
          alt="Tour Guide"
        />

        <div className="speech-wrapper">
          <div className="speech-bubble">
            <p className="speech-text">
              🎒 Meet <strong>{t.bold}</strong> {t.text}
              <br />
              {t.subtext}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
