import React, {useMemo} from 'react';
import './studentInfo.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

const translations = {
    en: {
        title: "Student Info",
        subtitle: "Student Info",
        welcome: "Welcome to the Student Info",
        description: "Student Info is a great place to find information about different study programs, as well as opportunities they may find in our school. Near the entrance you can find many leaflets that will tell you about those opportunities like Run-EU, Grand Tour or becoming part of HBO Sports, feel free to take and read them. If you have difficulties with writing a document, you can book an appointment at the writing center where you'll get assistance. At the office you can also borrow a lot of equipment, such as laptops, filming and audio equipment, extension cords, bikes and more.",
        moveNext: "Move Next"
    },
    nl: {
        title: "Student Info",
        subtitle: "Student Info",
        welcome: "Welkom bij Student Info",
        description: "Student Info is een geweldige plek om informatie te vinden over verschillende studieprogramma's, evenals kansen die ze op onze school kunnen vinden. Bij de ingang vind je veel folders die je vertellen over die kansen zoals Run-EU, Grand Tour of lid worden van HBO Sports, voel je vrij om ze mee te nemen en te lezen. Als je moeite hebt met het schrijven van een document, kun je een afspraak maken bij het schrijfcentrum waar je hulp krijgt. Bij het kantoor kun je ook veel apparatuur lenen, zoals laptops, film- en audioapparatuur, verlengsnoeren, fietsen en meer.",
        moveNext: "Ga verder"
    }
};

export default function StudentInfo({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translate = useMemo(() => translations[lang], [lang]);
    const photoSphereRef = React.createRef();

    return (
        <section className="studentInfo-container">
            <div className="studentInfo-header">
                <h1>{translate.title}</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studentInfo-main-content">
                <ReactPhotoSphereViewer
                    ref={photoSphereRef}
                    src="/360photos/image00014.jpg"
                    littlePlanet={false}
                    hideNavbarButton={true}
                    height={"500px"}
                    width={"60%"}
                />
                <TourGuide />
                <h2>{translate.subtitle}</h2>
                <h3>{translate.welcome}</h3>
                <p>{translate.description}</p>

            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translate.moveNext}</button>
            </div>
        </section>
    )
}