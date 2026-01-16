import React, { useMemo } from 'react';
import './library.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

const translations = {
    en: {
        title: "Library",
        subtitle: "Welcome to the library",
        description: "This place is great to have a study session, especially when you prefer quiet surroundings. If you want to work on a bigger screen, feel free to connect to the screens in the library. Beside from calm environment our library has a wide variety of over 10 000 books, 60 000 e-books and 39 databases, perfect for learnings new things on your own and doing research. ",
        moveNext: "Move Next"
    },
    nl: {
        title: "Bibliotheek",
        subtitle: "Welkom bij de bibliotheek",
        description: "Deze plek is ideaal om een studeersessie te houden, vooral als je de voorkeur geeft aan een rustige omgeving. Als je op een groter scherm wilt werken, kun je verbinding maken met de schermen in de bibliotheek. Naast de rustige omgeving heeft onze bibliotheek een grote verscheidenheid aan meer dan 10.000 boeken, 60.000 e-books en 39 databases, perfect om zelf nieuwe dingen te leren en onderzoek te doen.",
        moveNext: "Ga verder"
    }
};

export default function Library({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translate = useMemo(() => translations[lang], [lang]);
    const photoSphereRef = React.createRef();

    return (
        <section className="library-container">
            <div className="library-header">
                <h1>{translate.title}</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-content">
                <ReactPhotoSphereViewer
                    ref={photoSphereRef}
                    src="/360photos/image00013.jpg"
                    littlePlanet={false}
                    hideNavbarButton={true}
                    height={"500px"}
                    width={"60%"}
                />
                <h3>{translate.subtitle}</h3>
                <p>{translate.description}</p>
                <TourGuide />
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translate.moveNext}</button>
            </div>
        </section>
    )
}