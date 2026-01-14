import React, {useMemo} from 'react';
import './lockers.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

const translations = {
    en: {
        title: "Lockers",
        subtitle: "Lockers",
        welcome: "Welcome to the lockers",
        description: "Around the campus you can find lockers for students and teachers to store their belongings securely. Inside the lockers you can charge your devices safely so that when you take out your devices they are fully charged. Instructions on how to use a locker are located on the side of the locker block. But in short: 1. Put your myCard on the scanner to unlock a locker. 2. (Optional) Press on the \"Stay\" button if you want to keep the locker for the whole day. Normally when you obtain a locker it is an one-time use. When pressed on \"Stay\" you keep the same locker for the whole day. 3. Place your belongings inside the locker. 4. Close the locker door and it will lock automatically. 5. To open the locker again, simply put your myCard on the scanner again.",
        inShort: "But in short:",
        listitems: [
            "Put your myCard on the scanner to unlock a locker.",
            "(Optional) Press on the \"Stay\" button if you want to keep the locker for the whole day. Normally when you obtain a locker it is an one-time use. When pressed on \"Stay\" you keep the same locker for the whole day.",
            "Place your belongings inside the locker.",
            "Close the locker door and it will lock automatically.",
            "To open the locker again, simply put your myCard on the scanner again."
        ],
        moveNext: "Move Next"
    },
    nl: {
        title: "Lockers",
        subtitle: "Lockers",
        welcome: "Welkom bij de lockers",
        description: "Rondom de campus vind je lockers voor studenten en docenten om hun bezittingen veilig op te bergen. In de lockers kun je je apparaten veilig opladen, zodat wanneer je je apparaten eruit haalt, ze volledig zijn opgeladen. Instructies over hoe je een locker gebruikt, staan aan de zijkant van het lockerblok. Maar in het kort: 1. Houd je myCard tegen de scanner om een locker te openen. 2. (Optioneel) Druk op de knop \"Blijven\" als je de locker de hele dag wilt behouden. Normaal gesproken is het verkrijgen van een locker eenmalig gebruik. Wanneer je op \"Blijven\" drukt, behoud je dezelfde locker voor de hele dag. 3. Plaats je bezittingen in de locker. 4. Sluit de deur van de locker en deze vergrendelt automatisch. 5. Om de locker weer te openen, houd je gewoon je myCard opnieuw tegen de scanner.",
        inShort: "Maar in het kort:",
        listitems: [
            "Houd je myCard tegen de scanner om een locker te openen.",
            "(Optioneel) Druk op de knop \"Blijven\" als je de locker de hele dag wilt behouden. Normaal gesproken is het verkrijgen van een locker eenmalig gebruik. Wanneer je op \"Blijven\" drukt, behoud je dezelfde locker voor de hele dag.",
            "Plaats je bezittingen in de locker.",
            "Sluit de deur van de locker en deze vergrendelt automatisch.",
            "Om de locker weer te openen, houd je gewoon je myCard opnieuw tegen de scanner."
        ],
        moveNext: "Volgende"
    },
};

export default function Lockers({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translate = useMemo(() => translations[lang], [lang]);

    return (
        <section className="lockersPage-container">
            <div className="lockers-header">
                <h1>{translate.title}</h1>
            </div>
            <main className="lockers-main-content">
                <img src="https://lipsum.app/1920x1080" alt="Lockers building" className="techAndDesign"/>
                <h3>{translate.welcome}</h3>
                <p>{translate.description}</p>
                <p>{translate.inShort}</p>
                <ol>
                    {translate.listitems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
                <TourGuide />
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translate.moveNext}</button>
            </div>
        </section>
    )
}