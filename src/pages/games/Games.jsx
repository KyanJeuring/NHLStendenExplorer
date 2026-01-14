import React, {useMemo} from 'react';
import './games.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

const translations = {
    en: {
        title: "Games",
        subtitle: "Welcome to the Games Area",
        bodyP1: "Around the campus you can relax and have fun in the games area. Here you will find games like <strong>ping pong</strong> and <strong>table football</strong> that students can freely use during breaks or after classes.",
        bodyP2: "All game equipment is available to students. To get access, you simply need to hand in your student card along with your student information at the desk.",
        bodyP3: "How it works:",
        listItems: [
            "Go to the games desk with your student card.",
            "Hand in your student card and provide your student details.",
            "Receive the game equipment (ping pong paddles, balls, etc.).",
            "Enjoy the game with friends.",
            "Return the equipment and get your student card back."
        ],
        moveNext: "Move Next"
    },
    nl: {
        title: "Games",
        subtitle: "Welkom bij de Game Area",
        bodyP1: "Rondom de campus kun je ontspannen en plezier hebben in de game Area. Hier vind je spellen zoals <strong>tafeltennis</strong> en <strong>tafelvoetbal</strong> die studenten vrij kunnen gebruiken tijdens pauzes of na de lessen.",
        bodyP2: "Alle spelmaterialen zijn beschikbaar voor studenten. Om toegang te krijgen, hoef je alleen maar je studentenkaart in te leveren samen met je studentgegevens bij de balie.",
        bodyP3: "Hoe het werkt:",
        listItems: [
            "Ga naar de spellenbalie met je studentenkaart.",
            "Lever je studentenkaart in en geef je studentgegevens op.",
            "Ontvang het spelmateriaal (tafeltennisbatjes, ballen, etc.).",
            "Geniet van het spel met vrienden.",
            "Lever het materiaal terug en krijg je studentenkaart terug."
        ],
        moveNext: "Volgende"
    }
}

export default function Games({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translate = useMemo(() => translations[lang] || translations.en, [lang]);

    return (
        <section className="gamesPage-container">
            <div className="games-header">
                <h1>{translate.title}</h1>
                <svg width="174" height="147" viewBox="0 0 174 147" fill="none" xmlns="http://www.w3.org/2000/svg" className="pixelsCombination">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108.85 94.2339H53V109.607H108.85V94.2339Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108.85 63.4861H53V78.8611H108.85V63.4861Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108.85 32.7342H53V48.1072H108.85V32.7342Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108.85 1.98438H53V17.3613H108.85V1.98438Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M173.976 109.613H108.85V124.986H173.976V109.613Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M173.976 78.8611H108.85V94.2339H173.976V78.8611Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M173.976 48.1072H108.85V63.4822H173.976V48.1072Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M173.976 17.3613H108.85V32.7342H173.976V17.3613Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.9913 72.1875L29.493 72.6684L24.2769 74.0626L19.413 76.2951L14.9724 79.2888L11.0217 82.9664L7.63435 87.2557L4.87701 92.0769L2.82076 97.3578L1.53675 103.022L1.09375 108.992L1.53675 114.96L2.82076 120.623L4.87701 125.904L7.63435 130.728L11.0217 135.015L14.9724 138.695L19.413 141.686L24.2769 143.918L29.493 145.313L34.9913 145.795V108.992V72.1875Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M68.8887 72.1875L63.3904 72.6684L58.1743 74.0626L53.3105 76.2951L48.8698 79.2888L44.9191 82.9664L41.5318 87.2557L38.7756 92.0769L36.7194 97.3578L35.4353 103.022L34.9912 108.992L35.4353 114.96L36.7194 120.623L38.7756 125.904L41.5318 130.728L44.9191 135.015L48.8698 138.695L53.3105 141.686L58.1743 143.918L63.3904 145.313L68.8887 145.795V72.1875Z" fill="black"/>
                </svg>
            </div>
            <main className="games-main-content">
                <img src="https://lipsum.app/1920x1080" alt="Games area" className="imagePlaceholder"/>
                <h3>{translate.welcome}</h3>
                <p dangerouslySetInnerHTML={{ __html: translate.bodyP1 }}></p>
                <p dangerouslySetInnerHTML={{ __html: translate.bodyP2 }}></p>
                <p>{translate.bodyP3}</p>
                <ol>
                    {translate.listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
                <TourGuide/>
            </main>
            <div className="buttonToNextPage">
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    );
}
