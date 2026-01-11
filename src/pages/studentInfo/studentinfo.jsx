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
                <h2>Studnet Info</h2>
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="techAndDesign"/>
                <h3>Welcome to the Student</h3>
                <p>Student Info is a great place to find information about different study programs, as well as opportunities they may find in our school. Near the entrance you can find many leaflets that will tell you about those opportunities like Run-EU, Grand Tour or becoming part of HBO Sports, feel free to take and read them. If you have difficulties with writing a document, you can book an appointment at the writing center where you'll get assistance. At the office you can also borrow a lot of equipment, such as laptops, filming and audio equipment, extension cords, bikes and more.</p>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}