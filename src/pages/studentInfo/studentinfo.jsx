import React from 'react';
import './studentinfo.css';
import { useNavigate } from 'react-router-dom';

export default function StudentInfo() {
    const navigate = useNavigate();

    return (
        <section className="studylandscapePage-container">
            <div className="studylandscape-header">
                <h1>Student Info</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-content">
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="techAndDesign"/>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}