import React, {useMemo} from 'react';
import './equipment.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

const translations = {
    en: {
        title: "Equipment",
        subtitle: "Welcome to the Equipment Counter",
        bodyP1: "Around the campus, students can borrow various types of equipment for school projects, presentations, and activities.",
        bodyP2: "Available equipment includes cameras (such as GoPros), USB-C to HDMI adapters, monitors, and some game-related equipment.",
        bodyP3: "To borrow equipment, you need to go to Student Info or speak to the responsible teachers.",
        howItWorks: "How it works:",
        steps: [
            "Go to Student Info or the designated teacher.",
            "Hand in your student card and provide your student details.",
            "Request the equipment you need.",
            "Use the equipment for your project or activity.",
            "Return the equipment and collect your student card."
        ],
        moveNext: "Move Next"
    },
    nl: {
        title: "Apparatuur",
        subtitle: "Welkom bij de Apparatuur Balie",
        bodyP1: "Rondom de campus kunnen studenten verschillende soorten apparatuur lenen voor schoolprojecten, presentaties en activiteiten.",
        bodyP2: "Beschikbare apparatuur omvat camera's (zoals GoPro's), USB-C naar HDMI-adapters, monitoren en enkele game-gerelateerde apparatuur.",
        bodyP3: "Om apparatuur te lenen, moet je naar Student Info gaan of met de verantwoordelijke docenten spreken.",
        howItWorks: "Hoe het werkt:",
        steps: [
            "Ga naar Student Info of de aangewezen docent.",
            "Lever je studentenkaart in en geef je studentgegevens op.",
            "Vraag de apparatuur aan die je nodig hebt.",
            "Gebruik de apparatuur voor je project of activiteit.",
            "Retourneer de apparatuur en haal je studentenkaart op."
        ],
        moveNext: "Ga Verder"
    }
};

export default function Equipment({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translate = useMemo(() => translations[lang] || translations.en, [lang]);

    return (
        <section className="equipmentPage-container">
            <div className="equipment-header">
                <h1>{translate.title}</h1>
            </div>

            <main className="equipment-main-content">
                <img src="https://lipsum.app/1920x1080" alt="Equipment counter" className="techAndDesign"/>
                <h3>{translate.subtitle}</h3>
                <p>{translate.bodyP1}</p>
                <p>{translate.bodyP2}</p>
                <p>{translate.bodyP3}</p>
                <p>{translate.howItWorks}</p>
                <ol>
                    {translate.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
                <TourGuide/>
            </main>
            <div className="buttonToNextPage">
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translate.moveNext}</button>
            </div>
        </section>
    );
}
