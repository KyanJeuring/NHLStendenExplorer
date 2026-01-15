import React, {useMemo} from 'react';
import './parking.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

const translations = {
    en: {
        title: "Parking",
        subtitle: "Looking for a place to park your car, bike, or scooter?",
        bodyP1: "At NHL Stenden Emmen, parking is completely free. Many parking spaces are available for cars, bikes, and even scooters!. The main parking area, located just outside the Kennispoort is the perfect area to park your car. However, be careful! Parking on the grass is forbidden and will result in wheel clamps!",
        bodyP2: "Parking your car on the grass is not the only thing that is forbidden. NHL Stenden is officially a 'rookvrije' campus, meaning that smoking on university grounds is strictly forbidden. The car parking area is also the place to go to in case of emergency evacuation. Just pay attention to the slow whoop sound alarm!",
        bodyP3: "The parking area for bikes and scooters can be found on the other side of the building, facing Van Schaikweg street. And don't worry, there is enough room for everyone! The bike parking area is covered, keeping your bike safe and protected against the rain.",
        moveNext: "Move Next"
    },
    nl: {
        title: "Parkeren",
        subtitle: "Op zoek naar een plek om je auto, fiets of scooter te parkeren?",
        bodyP1: "Bij NHL Stenden Emmen is parkeren helemaal gratis. Er zijn veel parkeerplaatsen beschikbaar voor auto's, fietsen en zelfs scooters!. Het hoofdparkeerterrein, gelegen net buiten de Kennispoort, is de perfecte plek om je auto te parkeren. Maar wees voorzichtig! Parkeren op het gras is verboden en zal resulteren in wielklemmen!",
        bodyP2: "Het parkeren van je auto op het gras is niet het enige dat verboden is. NHL Stenden is officieel een 'rookvrije' campus, wat betekent dat roken op het universiteitsterrein strikt verboden is. Het autoparkeerterrein is ook de plek om naartoe te gaan in geval van noodontruiming. Let gewoon op het langzame whoop-geluid alarm!",
        bodyP3: "Het parkeerterrein voor fietsen en scooters is te vinden aan de andere kant van het gebouw, aan de Van Schaikweg. En maak je geen zorgen, er is genoeg ruimte voor iedereen! Het fietsparkeerterrein is overdekt, waardoor je fiets veilig en beschermd blijft tegen de regen.",
        moveNext: "Ga verder"
    }
};

export default function Parking({ lang, toggleLang }) {
    const navigate = useNavigate();
    const translate = useMemo(() => translations[lang] || translations.en, [lang]);
    const photoSphereRef = React.createRef();

    return (
        <section className="parking-container">
            <div className="parking-header">
                <h1>{translate.title}</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="parking-content">
                <ReactPhotoSphereViewer
                    ref={photoSphereRef}
                    src="/360photos/image00019.jpg"
                    littlePlanet={false}
                    hideNavbarButton={true}
                    height={"500px"}
                    width={"60%"}
                />
                <ReactPhotoSphereViewer
                    ref={photoSphereRef}
                    src="/360photos/image00017.jpg"
                    littlePlanet={false}
                    hideNavbarButton={true}
                    height={"500px"}
                    width={"60%"}
                />
                <h3>{translate.subtitle}</h3>
                <p>{translate.bodyP1}</p>
                <p>{translate.bodyP2}</p>
                <p>{translate.bodyP3}</p>
                <TourGuide />
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">{translate.moveNext}</button>
            </div>
        </section>
    )
}