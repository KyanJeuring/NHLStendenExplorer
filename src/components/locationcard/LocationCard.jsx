import React from 'react';
import './locationcard.css';
import {useNavigate} from 'react-router-dom';

export default function LocationCard({ image, title, description, link }) {
    const navigate = useNavigate();

    return (
        <div className="location-card" onClick={() => navigate(link)}>
            <img src={image} alt="image" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="more-info">More information</p>
        </div>
    )
}