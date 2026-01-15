import React, {useMemo} from 'react';
import './emergency.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

const translations = {
    en: {
        title: "Emergency",
        subtitle: "Here's what you need to know in case of emergency situations in our campus.",
        bodyP1: "If you're hearing slow whoop sound alarm, that means there's evacuation in the building. In that case head towards the parking area through the closest emergency doors(you can find the closest one on the maps around the building) and find a pole with a green sign on top, designating the meeting point. Wait there for further instructions.",
        bodyP2: "In case of injuries, first aid kits can be found on the corridors, they're easily recognizable by bright orange color.",
        moveNext: "Move Next"
    },
    nl: {
        title: "Noodgevallen",
        subtitle: "Hier is wat je moet weten in geval van noodsituaties op onze campus.",
        bodyP1: "Als je een langzaam whoop-geluid alarm hoort, betekent dit dat er een ontruiming in het gebouw is. Ga in dat geval naar het parkeerterrein via de dichtstbijzijnde nooddeuren (je kunt de dichtstbijzijnde vinden op de plattegronden rond het gebouw) en zoek een paal met een groen bord bovenop, die de ontmoetingsplaats aangeeft. Wacht daar op verdere instructies.",
        bodyP2: "In geval van verwondingen zijn er EHBO-kits te vinden in de gangen, ze zijn gemakkelijk te herkennen aan de feloranje kleur.",
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
                <TourGuide lang={lang}/>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translate.moveNext}</button>
            </div>
        </section>
    )
}