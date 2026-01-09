import React from 'react';
import './studylandscapeit.css';
import { useNavigate } from 'react-router-dom';

export default function Studylandscape() {
    const navigate = useNavigate();

    return (
        <section className="studylandscapePage-container-it">
            <div className="studylandscape-header-it">
                <h1>Study Areas</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-content-it">
                <h2>Study Landscape in Tech & Design department</h2>
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="techAndDesign"/>
                <h3>Shaping the Future with IT</h3>
                <p className="textForIT">🌿📚It's the perfect spot to team up and tackle projects together. You'll find comfy chairs, spacious tables, and plenty of sockets to keep your laptop charged and ideas flowing!</p>
                <p className="descriptionForIT">If you need a quiet and peaceful place to focus, the building offers several silent booths located throughout the area. These booths are perfect for important online calls or for concentrating when the surroundings feel too noisy, helping you work without distractions.</p>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}