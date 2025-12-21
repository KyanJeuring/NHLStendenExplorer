import React from 'react';
import './games.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

export default function Games() {
    const navigate = useNavigate();

    return (
        <section className="gamesPage-container">
            <div className="games-header">
                <h1>Games</h1>
            </div>

            <main className="games-main-content">
                <img
                    src="https://lipsum.app/1920x1080"
                    alt="Games area"
                    className="techAndDesign"
                />

                <h3>Welcome to the Games Area</h3>

                <p>
                    Around the campus you can relax and have fun in the games area.
                    Here you’ll find games like <strong>ping pong</strong> and <strong>foosball</strong>
                    that students can freely use during breaks or after classes.
                </p>

                <p>
                    All game equipment is available to students. To get access, you simply
                    need to hand in your <strong>student card</strong> along with your
                    student information at the desk.
                </p>

                <p>How it works:</p>

                <ol>
                    <li>Go to the games desk with your student card.</li>
                    <li>Hand in your student card and provide your student details.</li>
                    <li>Receive the game equipment (ping pong paddles, balls, etc.).</li>
                    <li>Enjoy the game with friends.</li>
                    <li>Return the equipment and get your student card back.</li>
                </ol>

                <TourGuide />
            </main>

            <div className="buttonToNextPage">
                <button onClick={() => navigate('/learnMore')} className="moveNext">
                    Move Next
                </button>
            </div>
        </section>
    );
}
