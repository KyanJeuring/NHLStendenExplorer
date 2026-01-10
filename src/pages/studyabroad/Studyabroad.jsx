import React from 'react';
import './studyabroad.css';
import { useNavigate } from 'react-router-dom';

export default function Studyabroad() {
    const navigate = useNavigate();

    return (
        <section className="studyabroad-container">
            <div className="studyabroad-header">
                <h1>Study Abroad</h1>
            </div>
            <main className="studyabroad-main-content">
                <img src="https://lipsum.app/1920x1080" alt="Where to find information about studying ab" className="techAndDesign"/>
                <h3>Grand Tour, Exchange, RUN-EU and internship abroad</h3>
                <p>Prepare for an international and ever-changing world through global study and mobility opportunities. Study at a European University in an international environment with over 80 nationalities. Join the RUN-EU mobility programmes, take part in the Grand Tour to Indonesia, South Africa, or Thailand, or complete an internship abroad. With access to 150 partner universities worldwide, you can tailor your third-year curriculum to build professional skills, personal growth, and an international network.</p>
                <p>You can learn more about all these opportunities at Student Info, where you'll find a stand with flyers and lists of countries available for internships. If you still have any questions, you can also contact them via email or visit the official NHL Stenden website for more details. <a href ="https://www.nhlstenden.com/en/practical-information/grand-tour-exchange-run-eu-and-internship-abroad">Click here</a></p>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}