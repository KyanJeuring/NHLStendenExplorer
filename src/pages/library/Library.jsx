import React from 'react';
import './library.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

export default function Canteen() {
    const navigate = useNavigate();

    return (
        <section className="studylandscapePage-container">
            <div className="studylandscape-header">
                <h1>Library</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-content">
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="techAndDesign"/>
                <h3>Welcome to the library</h3>
                <p>This place is great to have a study session, especially when you prefer quiet surroundings. If you want to work on a bigger screen, feel free to connect to the screens in the library. Beside from calm environment our library has a wide variety of over 10 000 books, 60 000 e-books and 39 databases, perfect for learnings new things on your own and doing research. </p>
                <TourGuide />
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}