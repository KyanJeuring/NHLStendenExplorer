import React, {useMemo} from 'react';
import './myConceptLab.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

const translations = {
    en: {
        title: "MyConcept Lab",
        welcome: "Welcome to MyConcept Lab",
        bodyP1: "MyConcept Lab is a location within the university.",
        bodyP2: "At MyConceptLab, students have access to 3D printers, a factory model, and various other prototypes used in their projects. There are also monitors, keyboards, and mice available, providing students with a comfortable workspace where they can design, research, and develop their projects with ease. Additionally, the Green Chemistry course provides students with a fully equipped lab, where they can conduct experiments and gain hands-on experience in a real-world setting.",
        moveNext: "Move Next"
    },
    nl: {
        title: "MyConcept Lab",
        welcome: "Welkom bij MyConcept Lab",
        bodyP1: "MyConcept Lab is een locatie binnen de universiteit.",
        bodyP2: "Bij MyConceptLab hebben studenten toegang tot 3D-printers, een fabrieksmodel en verschillende andere prototypes die in hun projecten worden gebruikt. Er zijn ook monitoren, toetsenborden en muizen beschikbaar, waardoor studenten een comfortabele werkruimte hebben waar ze hun projecten kunnen ontwerpen, onderzoeken en ontwikkelen met gemak. Daarnaast biedt de cursus Green Chemistry studenten een volledig uitgeruste lab-ruimte, waar ze experimenten kunnen uitvoeren en praktijkervaring kunnen opdoen in een realistische omgeving.",
        moveNext: "Ga verder"
    }
};

export default function MyConceptLab({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translation = useMemo(() => translations[lang] || translations.en, [lang]);

    return (
        <section className="myConceptLabPage-container">
            <div className="myConceptLab-header">
                <h1>{translation.title}</h1>
            </div>
            <main className="myConceptLab-main-content">
                <img src="https://lipsum.app/1920x1080" alt="MyConcept Lab" className="techAndDesign"/>
                <h3>{translation.welcome}</h3>
                <p>{translation.bodyP1}</p>
                <p>{translation.bodyP2}</p>
                <TourGuide />   
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translation.moveNext}</button>
            </div>
        </section>
    )
}