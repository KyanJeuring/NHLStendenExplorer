import React, {useMemo} from 'react';
import './stonesRestaurant.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/Tourguide';

const translations = {
    en: {
        title: "Stones Restaurant",
        subtitle: "Welcome to the Stones Restaurant 🥪",
        bodyP1: "This is the perfect place to get a really fancy coffee or something that's really tasty. In this restaurant you will experience a beautiful interaction and beautiful harmony with the MBO students of Drenthe College. Everything is under the guidance of professionals."
    },
    nl: {
        title: "Stones Restaurant",
        subtitle: "Welkom bij Stones Restaurant 🥪",
        bodyP1: "Dit is de perfecte plek om een echt fancy koffie te krijgen of iets dat echt lekker is. In dit restaurant ervaar je een mooie interactie en mooie harmonie met de MBO studenten van het Drenthe College. Alles staat onder begeleiding van professionals."
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
                <img src="/photos/stones-40-2.jpg" alt="Could not load immage" className="imagePlaceholder"/>
                <h3>{translate.subtitle}</h3>
                <p>{translate.bodyP1}</p>
                <TourGuide lang={lang} />
            </main>
        </section>
    )
}