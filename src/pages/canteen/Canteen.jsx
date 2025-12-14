import React from 'react';
import './canteen.css';
import { useNavigate } from 'react-router-dom';

export default function Canteen() {
    const navigate = useNavigate();

    return (
        <section className="studylandscapePage-container">
            <div className="studylandscape-header">
                <h1>Canteen</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-content">
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="techAndDesign"/>
                <h3>Welcome to the Canteen🥪</h3>
                <p>This is the perfect spot to recharge between classes. Here you’ll find fresh sandwiches, warm meals, snacks, and plenty of space to relax or catch up with friends. Whether you’re grabbing a quick bite or settling in with your study group, the canteen is designed to fuel both your body and your day. Let’s explore what’s on the menu!</p>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}