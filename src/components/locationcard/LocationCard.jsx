import React from 'react';
import './locationcard.css';

export default function LocationCard({ image, title, description }) {

    return (
        <div className="location-card">
            <img src={image} alt="image" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}