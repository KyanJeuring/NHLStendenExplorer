import React, {useMemo} from 'react';
import './emergency.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

const translations = {
    en: {
        title: "Emergency",
        subtitle: "Here's what you need to know in case of emergency situations in our campus.",
        bodyP1: "If you're hearing slow whoop sound alarm, that means there's evacuation in the building. In that case head towards the parking area through the closest emergency doors(you can find the closest one on the maps around the building) and find a pole with a green sign on top, designating the meeting point. Wait there for further instructions.",
        bodyP2: "In case of injuries, first aid kits can be found on the corridors, they're easily recognisable by bright ogange color.",
        moveNext: "Move Next"
    },
    nl: {
        title: "Kantine",
        subtitle: "Welkom bij de Kantine 🥪",
        bodyP1: "Dit is de perfecte plek om tussen de lessen door op te laden. Hier vind je verse broodjes, warme maaltijden, snacks en voldoende ruimte om te ontspannen of bij te praten met vrienden. Of je nu snel iets wilt eten of je wilt settelen met je studiegroep, de mensa is ontworpen om zowel je lichaam als je dag van brandstof te voorzien. Laten we eens kijken wat er op het menu staat!",
        moveNext: "Volgende"
    }
}

export default function Emergency({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translate = useMemo(() => translations[lang] || translations.en, [lang]);

    return (
        <section className="emergency-container">
            <div className="emergency-header">
                <h1>{translate.title}</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="emergency-content">
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="imagePlaceholder"/>
                <h3>{translate.subtitle}</h3>
                <p>{translate.bodyP1}</p>
                <p>{translate.bodyP2}</p>
                <TourGuide />
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translate.moveNext}</button>
            </div>
        </section>
    )
}