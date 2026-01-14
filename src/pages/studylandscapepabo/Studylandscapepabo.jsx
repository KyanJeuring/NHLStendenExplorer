import React, {useMemo} from 'react';
import './studylandscapepabo.css';
import { useNavigate } from 'react-router-dom';

const translations = {
    en: {
        studyArea: "Study Areas",
        title: "Study Landscape in Education department",
        subtitle: "Where Future Teachers Grow",
        bodyP1: "It is a very creative and hands-on learning space. There are 3D printers, sand, drawing materials, games, and other creative tools. Because of this, you may sometimes see primary school children on campus. Students practice teaching real lessons, which helps them gain valuable real-life classroom experience.",
        bodyP2: "The department also features a special classroom. There students use pianos and other musical instruments, create their own music, and take part in drama classes.",
        moveNext: "Move Next",
    },
    nl: {
        studyArea: "Studiegebieden",
        title: "Studielandschap in de Pabo afdeling",
        subtitle: "Waar Toekomstige Leraren Groeien",
        bodyP1: "Het is een zeer creatieve en praktische leeromgeving. Er zijn 3D-printers, zand, tekenmaterialen, spelletjes en andere creatieve hulpmiddelen. Hierdoor zie je soms ook basisschoolkinderen op de campus. Studenten oefenen met het geven van echte lessen, wat hen waardevolle praktijkervaring in de klas oplevert.",
        bodyP2: "De afdeling beschikt ook over een speciale klaslokaal. Daar gebruiken studenten piano's en andere muziekinstrumenten, maken ze hun eigen muziek en nemen ze deel aan dramalessen.",
        moveNext: "Volgende",
    },
};

export default function Studylandscape({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translated = useMemo(() => translations[lang], [lang]);

    return (
        <section className="studylandscapePage-container-pabo">
            <div className="studylandscape-header-pabo">
                <h1>{translated.studyArea}</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-pabo">
                <h2>{translated.title}</h2>
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="techAndDesign"/>
                <h3>{translated.subtitle}</h3>
                <p className="text">{translated.bodyP1}</p>
                <p className="fact">{translated.bodyP2}</p>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translated.moveNext}</button>
            </div>
        </section>
    )
}