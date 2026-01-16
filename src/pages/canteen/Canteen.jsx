import React, {useMemo} from 'react';
import './canteen.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/Tourguide';

const translations = {
    en: {
        title: "Canteen",
        subtitle: "Welcome to the Canteen 🥪",
        bodyP1: "This is the perfect spot to recharge between classes. Here you’ll find fresh sandwiches, warm meals, snacks, and plenty of space to relax or catch up with friends. Whether you’re grabbing a quick bite or settling in with your study group, the canteen is designed to fuel both your body and your day. Let’s explore what’s on the menu!"
    },
    nl: {
        title: "Kantine",
        subtitle: "Welkom bij de Kantine 🥪",
        bodyP1: "Dit is de perfecte plek om tussen de lessen door op te laden. Hier vind je verse broodjes, warme maaltijden, snacks en voldoende ruimte om te ontspannen of bij te praten met vrienden. Of je nu snel iets wilt eten of je wilt settelen met je studiegroep, de mensa is ontworpen om zowel je lichaam als je dag van brandstof te voorzien. Laten we eens kijken wat er op het menu staat!"
    }
}

export default function Canteen({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translate = useMemo(() => translations[lang] || translations.en, [lang]);

    return (
        <section className="canteen-container">
            <div className="canteen-header">
                <h1>{translate.title}</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="canteen-content">
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="imagePlaceholder"/>
                <h3>{translate.subtitle}</h3>
                <p>{translate.bodyP1}</p>
                <TourGuide lang={lang} />
            </main>
        </section>
    )
}