import React, {useMemo} from 'react';
import './supportIT.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

const translations = {
    en: {
        title: "IT Support Service",
        subtitle: "Having problems with your computer? Try seaking help here!",
        bodyP1: "At our IT support service you can find help regarding your computer, as well as tools and programs you will need during your studies in our university. Just stop by at any moment and someone will help you solve your problem.",
        moveNext: "Move Next"
    },
    nl: {
        title: "Parkeren",
        subtitle: "Op zoek naar een plek om je auto, fiets of scooter te parkeren?",
        bodyP1: "Bij NHL Stenden Emmen is parkeren helemaal gratis. Er zijn veel parkeerplaatsen beschikbaar voor auto's, fietsen en zelfs scooters!. Het hoofdparkeerterrein, gelegen net buiten de Kennispoort, is de perfecte plek om je auto te parkeren. Maar wees voorzichtig! Parkeren op het gras is verboden en zal resulteren in wielklemmen!",
        bodyP2: "Het parkeren van je auto op het gras is niet het enige dat verboden is. NHL Stenden is officieel een 'rookvrije' campus, wat betekent dat roken op het universiteitsterrein strikt verboden is. Het autoparkeerterrein is ook de plek om naartoe te gaan in geval van noodontruiming. Let gewoon op het langzame whoop-geluid alarm!",
        bodyP3: "Het parkeerterrein voor fietsen en scooters is te vinden aan de andere kant van het gebouw, aan de Van Schaikweg. En maak je geen zorgen, er is genoeg ruimte voor iedereen! Het fietsparkeerterrein is overdekt, waardoor je fiets veilig en beschermd blijft tegen de regen.",
        moveNext: "Ga verder"
    }
};

export default function SupportIT({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translate = useMemo(() => translations[lang] || translations.en, [lang]);

    return (
        <section className="supportIT-container">
            <div className="supportIT-header">
                <h1>{translate.title}</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="supportIT-content">
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="imagePlaceholder"/>
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="imagePlaceholder"/>
                <h3>{translate.subtitle}</h3>
                <p>{translate.bodyP1}</p>
                <TourGuide lang={lang} />
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translate.moveNext}</button>
            </div>
        </section>
    )
}