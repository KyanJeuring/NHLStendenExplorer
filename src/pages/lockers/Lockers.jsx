import React from 'react';
import './lockers.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

export default function Lockers() {
    const navigate = useNavigate();

    return (
        <section className="lockersPage-container">
            <div className="lockers-header">
                <h1>Lockers</h1>
            </div>
            <main className="lockers-main-content">
                <img src="https://lipsum.app/1920x1080" alt="Lockers building" className="techAndDesign"/>
                <h3>Welcome to the lockers</h3>
                <p>Around the campus you can find lockers for students and teachers to store their belongings securely.<br/>Inside the lockers you can charge your devices safely so that when you take out your devices they are fully charged.<br/>Instructions on how to use a locker are located on the side of the locker block.</p>
                <p>But in short:</p>
                <ol>
                    <li>Put your myCard on the scanner to unlock a locker.</li>
                    <li>&#40;Optional&#41; Press on the &quot;Stay&quot; button if you want to keep the locker for the whole day. Normally when you obtain a locker it is an one-time use. When pressed on &quot;Stay&quot; you keep the same locker for the whole day.</li>
                    <li>Place your belongings inside the locker.</li>
                    <li>Close the locker door and it will lock automatically.</li>
                    <li>To open the locker again, simply put your myCard on the scanner again.</li>
                </ol>
                <TourGuide />
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}