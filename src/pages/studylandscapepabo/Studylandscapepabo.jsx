import React from 'react';
import './studylandscapepabo.css';
import { useNavigate } from 'react-router-dom';

export default function Studylandscape() {
    const navigate = useNavigate();

    return (
        <section className="studylandscapePage-container-pabo">
            <div className="studylandscape-header-pabo">
                <h1>Study Areas</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-pabo">
                <h2>Study Landscape in Education department</h2>
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="techAndDesign"/>
                <h3></h3>
                <p className="text">It is a very creative and hands-on learning space. There are 3D printers, sand, drawing materials, games, and other creative tools. Because of this, you may sometimes see primary school children on campus. Students practice teaching real lessons, which helps them gain valuable real-life classroom experience.</p>
                <p className="fact">The department also features a special classroom. There students use pianos and other musical instruments, create their own music, and take part in drama classes.</p>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}