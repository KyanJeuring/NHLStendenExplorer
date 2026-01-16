import React, {useMemo} from 'react';
import './kennispoort.css';
import { useNavigate } from 'react-router-dom';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

import TourGuide from '../../components/tourguide/Tourguide';

const translations = {
    en: {
        title: "Kennispoort",
        welcomeMessage: "Welcome to Kennispoort",
        bodyP1: "Kennispoort is a location within the university.",
        points: [
            "It houses hospitality, health and welfare, as well as the IoT lab.",
            "The auditorium downstairs is where some lectures and events are held, as well as graduation ceremonies and Think Wireless general assemblies.",
            "It is a sponsor of FC Emmen.",
            "The seats on the stairs are real stadium chairs from the Emmen stadium.",
            "The center of entrepreneurship is here (check the website for more information)."
        ]
    },
    nl: {
        title: "Kennispoort",
        welcomeMessage: "Welkom bij Kennispoort",
        bodyP1: "Kennispoort is een locatie binnen de universiteit.",
        points: [
            "Het huisvest horeca, gezondheid en welzijn, evenals het IoT-lab.",
            "Het auditorium beneden is waar sommige colleges en evenementen worden gehouden, evenals diploma-uitreikingen en Think Wireless algemene vergaderingen.",
            "Het is een sponsor van FC Emmen.",
            "De stoelen op de trap zijn echte stadionstoelen uit het Emmen stadion.",
            "Het centrum voor ondernemerschap is hier (bekijk de website voor meer informatie)."
        ]
    }
};

export default function Kennispoort({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translation = useMemo(() => translations[lang] || translations.en, [lang]);
    const photoSphereRef = React.createRef();

    return (
        <section className="kennispoortPage-container">
            <div className="kennispoort-header">
                <h1>{translation.title}</h1>
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
            <main className="kennispoort-main-content">
                <ReactPhotoSphereViewer
                    ref={photoSphereRef}
                    src="/360photos/image00009.jpg"
                    littlePlanet={false}
                    hideNavbarButton={true}
                    height={"500px"}
                    width={"60%"}
                />
                <h3>{translation.welcomeMessage}</h3>
                <p>{translation.bodyP1}</p>
                <ul>
                    {translation.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                <TourGuide lang={lang} />
            </main>
        </section>
    )
}