import React from 'react';
import './studylandscapemain.css';
import { useNavigate } from 'react-router-dom';

export default function Studylandscape() {
    const navigate = useNavigate();

    return (
        <section className="studylandscapePage-container-main">
            <div className="studylandscape-header-main">
                <h1>Study Areas</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-content">
                <h2>Study Landscape - Your Perfect Spot to Focus, Create and Connect</h2>
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="techAndDesign"/>
                <h3>Right next to the bustling canteen at NHL Stenden Emmen lies the Study Landscape</h3>
                <p>It's a bright, welcoming space designed for students who want the best of both worlds: productivity and comfort. Whether you're diving into assignments, collaborating on projects, this area offers the ideal environment to stay focused and inspired.</p>
                <p>With comfortable seating, open tables, and a relaxed atmosphere, the Study Landscape encourages creativity, teamwork, and concentration. Need a quick break or snack? The canteen is just steps away, so you're never far from a good coffee or something tasty to recharge your energy.</p>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}