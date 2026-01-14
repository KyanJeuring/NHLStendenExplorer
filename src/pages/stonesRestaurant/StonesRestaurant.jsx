import React, {useMemo} from 'react';
import './stonesRestaurant.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

const translations = {
    en: {
        title: "Stones Restaurant",
        subtitle: "Welcome to the Stones Restaurant 🥪",
        bodyP1: "This is the perfect place to get a really fancy coffee or something that's really tasty.",
        moveNext: "Move Next"
    },
    nl: {
        title: "Stones Restaurant",
        subtitle: "Welkom bij Stones Restaurant 🥪",
        bodyP1: "Dit is de perfecte plek om een echt fancy koffie te krijgen of iets dat echt lekker is.",
        moveNext: "Volgende"
    }
}

export default function StonesRestaurant({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translate = useMemo(() => translations[lang] || translations.en, [lang]);

    return (
        <section className="stones-container">
            <div className="stones-header">
                <h1>{translate.title}</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="stones-main-content">
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="imagePlaceholder"/>
                <h3>{translate.subtitle}</h3>
                <p>{translate.bodyP1}</p>
                <TourGuide />
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translate.moveNext}</button>
            </div>
        </section>
    )
}