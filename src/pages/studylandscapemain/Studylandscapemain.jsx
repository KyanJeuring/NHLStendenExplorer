import React, {useMemo} from 'react';
import './studylandscapemain.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/Tourguide';

const translations = {
    en: {
        studyArea: "Study Areas",
        title: "Study Landscape - Your Perfect Spot to Focus, Create and Connect",
        subtitle: "Right next to the bustling canteen at NHL Stenden Emmen lies the Study Landscape.",
        bodyP1: "It's a bright, welcoming space designed for students who want the best of both worlds: productivity and comfort. Whether you're diving into assignments, collaborating on projects, this area offers the ideal environment to stay focused and inspired.",
        bodyP2: "With comfortable seating, open tables, and a relaxed atmosphere, the Study Landscape encourages creativity, teamwork, and concentration. Need a quick break or snack? The canteen is just steps away, so you're never far from a good coffee or something tasty to recharge your energy."
    },
    nl: {
        studyArea: "Studiegebieden",
        title: "Studielandschap - Jouw Perfecte Plek om te Focussen, Creëren en Verbinden",
        subtitle: "Rechts naast de gezellige kantine van NHL Stenden Emmen ligt het Studielandschap.",
        bodyP1: "Het is een lichte, uitnodigende ruimte ontworpen voor studenten die het beste van twee werelden willen: productiviteit en comfort. Of je nu aan opdrachten werkt, samenwerkt aan projecten, deze ruimte biedt de ideale omgeving om gefocust en geïnspireerd te blijven.",
        bodyP2: "Met comfortabele zitplaatsen, open tafels en een ontspannen sfeer stimuleert het Studielandschap creativiteit, teamwork en concentratie. Even een korte pauze of een snack nodig? De kantine is op slechts een paar stappen afstand, dus je bent nooit ver van een goede kop koffie of iets lekkers om je energie weer op te laden."
    },
};

export default function Studylandscape({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translated = useMemo(() => translations[lang] || translations.en, [lang]);

    return (
        <section className="studylandscapePage-container-main">
            <div className="studylandscape-header-main">
                <h1>{translated.studyArea}</h1>
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
            <main className="studylandcape-main-content">
                <h2>{translated.title}</h2>
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="imagePlaceholder"/>
                <h3>{translated.subtitle}</h3>
                <p>{translated.bodyP1}</p>
                <p>{translated.bodyP2}</p>
                <TourGuide lang={lang} />
            </main>
        </section>
    )
}