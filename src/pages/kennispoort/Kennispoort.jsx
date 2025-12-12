import React from 'react';
import './kennispoort.css';
import { useNavigate } from 'react-router-dom';

export default function Kennispoort() {
    const navigate = useNavigate();

    return (
        <section className="kennispoortPage-container">
            <div className="kennispoort-header">
                <h1>Kennispoort</h1>
            </div>
            <main className="kennispoort-main-content">
                <img src="https://lipsum.app/1920x1080" alt="Kennispoort building" className="techAndDesign"/>
                <h3>Welcome to Kennispoort</h3>
                <p>Kennispoort is a location within the university.</p>
                <ul>
                    <li>It houses hospitality, health and welfare, as well as the IoT lab.</li>
                    <li>The auditorium downstairs is where some lectures and events are held, as well as graduation ceremonies and Think Wireless general assemblies.</li>
                    <li>It is a sponsor of FC Emmen.</li>
                    <li>The seats on the stairs are real stadium chairs from the Emmen stadium.</li>
                    <li>The center of entrepreneurship is here (check the website for more information).</li>
                </ul>
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}