import React from 'react';
import './studylandscapelogistics.css';
import { useNavigate } from 'react-router-dom';

export default function Studylandscape() {
    const navigate = useNavigate();

    return (
        <section className="studylandscapePage-container-logistics">
            <div className="studylandscape-header-logistics">
                <h1>Study Areas</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-content-logistics">
                <h2>Study Landscape in Logistics Management & International Business department</h2>
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="techAndDesign"/>
                <h3>🚀 Explore the World of Logistics & International Business at NHL Stenden - Emmen!</h3>
                <p>Step into a dynamic study environment where global trade meets smart logistics. At NHL Stenden in Emmen, you'll dive into real-world projects, work with international partners, and develop the skills to lead in a fast-moving global market. From supply chains to sustainable solutions — your journey starts here!</p>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}