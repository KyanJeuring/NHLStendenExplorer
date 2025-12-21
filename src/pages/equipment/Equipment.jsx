import React from 'react';
import './equipment.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

export default function Equipment() {
    const navigate = useNavigate();

    return (
        <section className="equipmentPage-container">
            <div className="equipment-header">
                <h1>Equipment</h1>
            </div>

            <main className="equipment-main-content">
                <img
                    src="https://lipsum.app/1920x1080"
                    alt="Equipment counter"
                    className="techAndDesign"
                />

                <h3>Welcome to the Equipment Counter</h3>

                <p>
                    Around the campus, students can borrow various types of equipment
                    for school projects, presentations, and activities.
                </p>

                <p>
                    Available equipment includes <strong>cameras (such as GoPros)</strong>,
                    <strong> USB-C to HDMI adapters</strong>, <strong>monitors</strong>, and
                    some <strong>game-related equipment</strong>.
                </p>

                <p>
                    To borrow equipment, you need to go to <strong>Student Info</strong>
                    or speak to the <strong>responsible teachers</strong>.
                </p>

                <p>How it works:</p>

                <ol>
                    <li>Go to Student Info or the designated teacher.</li>
                    <li>Hand in your student card and provide your student details.</li>
                    <li>Request the equipment you need.</li>
                    <li>Use the equipment for your project or activity.</li>
                    <li>Return the equipment and collect your student card.</li>
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
