import React from 'react';
import './myConceptLab.css';
import { useNavigate } from 'react-router-dom';

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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis illo, odio necessitatibus animi, inventore voluptate omnis cumque fugiat fuga laboriosam, officia deleniti? Sequi ut, nisi voluptatum ducimus a eveniet consectetur?</p>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}