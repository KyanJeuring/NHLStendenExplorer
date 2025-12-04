import React from "react";
import "./carouselcard.css";

export default function CarouselCard({ title, description }) {
  return (
    <div className="carousel-card">
      <h3 className="carousel-card-title">{title}</h3>
      <p className="carousel-card-description">{description}</p>
    </div>
  );
}
