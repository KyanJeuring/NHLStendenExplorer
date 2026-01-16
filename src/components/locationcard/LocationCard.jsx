import React, { useMemo } from 'react';
import './locationcard.css';
import {useNavigate} from 'react-router-dom';

const translations = {
    en: {
        moreInfo: 'More information',
    },
    nl: {
        moreInfo: 'Meer informatie',
    },
}

export default function LocationCard({ image, title, description, link, lang = 'en' }) {
    const navigate = useNavigate();
    const translation = useMemo(() => translations[lang] || translations.en, [lang]);

    return (
        <div className="location-card" onClick={() => navigate(link)}>
            <img src={image} alt="image" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="more-info">{translation.moreInfo}</p>
        </div>
    )
}