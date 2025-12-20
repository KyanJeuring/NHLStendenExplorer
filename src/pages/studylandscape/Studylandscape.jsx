import React from 'react';
import './studylandscape.css';
import { useNavigate } from 'react-router-dom';

export default function Studylandscape() {
    const navigate = useNavigate();

    return (
        <section className="studylandscapePage-container">
            <div className="studylandscape-header">
                <h1>Study Areas</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-content">
                <h2>Study Landscape in Tech & Design department</h2>
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="techAndDesign"/>
                <h3>Welcome to the Study Landscape</h3>
                <p>🌿📚It's the perfect spot to team up and tackle projects together. You'll find comfy chairs, spacious tables, and plenty of sockets to keep your laptop charged and ideas flowing!</p>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}