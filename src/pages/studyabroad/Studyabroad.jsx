import React, {useMemo} from 'react';
import './studyabroad.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

const translations = {
    en: {
        title: "Study Abroad",
        subtitle: "Grand Tour, Exchange, RUN-EU and internship abroad",
        description1: "Prepare for an international and ever-changing world through global study and mobility opportunities. Study at a European University in an international environment with over 80 nationalities. Join the RUN-EU mobility programmes, take part in the Grand Tour to Indonesia, South Africa, or Thailand, or complete an internship abroad. With access to 150 partner universities worldwide, you can tailor your third-year curriculum to build professional skills, personal growth, and an international network.",
        description2: "You can learn more about all these opportunities at Student Info, where you'll find a stand with flyers and lists of countries available for internships. If you still have any questions, you can also contact them via email or visit the official NHL Stenden website for more details.",
        link: "Click here",
        moveNext: "Move Next"
    },
    nl: {
        title: "Studeren in het buitenland",
        subtitle: "Grand Tour, Exchange, RUN-EU en stage in het buitenland",
        description1: "Bereid je voor op een internationale en steeds veranderende wereld door middel van wereldwijde studie- en mobiliteitsmogelijkheden. Studeren aan een Europese universiteit in een internationale omgeving met meer dan 80 nationaliteiten. Doe mee aan de RUN-EU mobiliteitsprogramma's, neem deel aan de Grand Tour naar Indonesië, Zuid-Afrika of Thailand, of loop stage in het buitenland. Met toegang tot 150 partneruniversiteiten wereldwijd, kun je je derdejaars curriculum op maat maken om professionele vaardigheden, persoonlijke groei en een internationaal netwerk op te bouwen.",
        description2: "Je kunt meer te weten komen over al deze mogelijkheden bij Student Info, waar je een stand vindt met flyers en lijsten van landen die beschikbaar zijn voor stages. Als je nog vragen hebt, kun je ook contact met hen opnemen via e-mail of de officiële NHL Stenden-website bezoeken voor meer details.",
        link: "Klik hier",
        moveNext: "Volgende"
    }
};

export default function Studyabroad({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translated = useMemo(() => translations[lang], [lang]);

    return (
        <section className="studyabroad-container">
            <div className="studyabroad-header">
                <h1>{translated.title}</h1>
            </div>
            <main className="studyabroad-main-content">
                <img src="/photos/studyAbroadDesk.JPG" alt="Where to find information about studying abroad" className="techAndDesign"/>
                <h3>{translated.subtitle}</h3>
                <p>{translated.description1}</p>
                <p>{translated.description2} <a href ="https://www.nhlstenden.com/en/practical-information/grand-tour-exchange-run-eu-and-internship-abroad">{translated.link}</a></p>
                <TourGuide lang={lang} />
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translated.moveNext}</button>
            </div>
        </section>
    )
}