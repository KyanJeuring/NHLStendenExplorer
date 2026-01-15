import React, {useMemo} from 'react';
import './supportIT.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

const translations = {
    en: {
        title: "IT Support Service",
        subtitle: "Having problems with your computer? Try seeking help here!",
        bodyP1: "At our IT support service you can find help regarding your computer, as well as tools and programs you will need during your studies in our university. Just stop by at any moment and someone will help you solve your problem."
    },
    nl: {
        title: "IT Ondersteuningsdienst",
        subtitle: "Heb je problemen met je computer? Probeer hier hulp te zoeken!",
        bodyP1: "Bij onze IT-ondersteuningsdienst kun je hulp vinden met betrekking tot je computer, evenals tools en programma's die je nodig hebt tijdens je studie aan onze universiteit. Loop gewoon op elk moment binnen en iemand zal je helpen je probleem op te lossen."
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
        </section>
    )
}