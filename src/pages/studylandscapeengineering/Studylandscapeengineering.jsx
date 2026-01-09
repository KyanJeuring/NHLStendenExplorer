import React from 'react';
import './studylandscapeengineering.css';
import { useNavigate } from 'react-router-dom';

export default function Studylandscape() {
    const navigate = useNavigate();

    return (
        <section className="studylandscapePage-container-engineering">
            <div className="studylandscape-header-engineering">
                <h1>Study Areas</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-engineering">
                <h2>Study Landscape in Polymer Lab & Engineering</h2>
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="techAndDesign"/>
                <h3>Robotics & 3D Technology</h3>
                <p className="title">This place offers hands-on learning with modern equipment. Students work on real projects, design and test ideas, and develop practical skills for their future engineering careers.</p>
                <p className="explanation">Here is also located a big 3D Robotic arm that can print large complex objects and used for different projects. There is also lots of other equipment students use for designing, printing, and learning how to use smart technology in a practical way.</p>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}