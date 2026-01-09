import React from 'react';
import './myConceptLab.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

export default function MyConceptLab() {
    const navigate = useNavigate();

    return (
        <section className="myConceptLabPage-container">
            <div className="myConceptLab-header">
                <h1>MyConcept Lab</h1>
            </div>
            <main className="myConceptLab-main-content">
                <img src="https://lipsum.app/1920x1080" alt="MyConcept Lab" className="techAndDesign"/>
                <h3>Welcome to MyConcept Lab</h3>
                <p>MyConcept Lab is a location within the university.</p>
                <p>At MyConceptLab, students have access to 3D printers, a factory model, and various other prototypes used in their projects. There are also monitors, keyboards, and mice available, providing students with a comfortable workspace where they can design, research, and develop their projects with ease. Additionally, the Green Chemistry course provides students with a fully equipped lab, where they can conduct experiments and gain hands-on experience in a real-world setting.</p>
                <TourGuide />   
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}