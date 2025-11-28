import React from 'react';
import './learnMore.css';
import LetsgoNav from '../../components/letsgonav/LetsgoNav';


export default function LearnMore() {
    return (
        <section className='learn-more-container'>
            <header className="learnMorePage">
                <div className="learnMoreHeader">
                    <img src="/logos/NHLStendenLogo_White.svg" alt="NHL Stenden Logo" className="logo_learnMore"/>
                    <h2 className="tagline">Let's go to...</h2>
                </div>
                    <img src="/pixels/learnMoreSvgCombination.svg" alt="" className="whiteWaves"/>
            </header>
        <main className='lets-go-to-links'>
            <LetsgoNav  src="/icons/library_icon.svg" location="Library" description="Study resources & a quiet place."/>

            <LetsgoNav  src="/icons/student_info_icon.svg" location="Student info" description="Help & important information."/>

            <LetsgoNav  src="/icons/canteen_icon" location="Canteen" description="Food & Beverages."/>

            <LetsgoNav  src="/icons/parking_icon.svg" location="Parking & Bike Area" description="Vehicle $ Bicycle parking."/>

            <LetsgoNav  src="/icons/lab_icon.svg" location="MyConcept Lab" description="Step in, get hands-on, and explore the future."/>

            <LetsgoNav  src="/icons/study_landscape_icon.svg" location="Study Landscape" description="Time to study!"/>

            <LetsgoNav  src="/icons/kennispoort_icon.svg" location="Kennispoort" description="Collaboration with real companies."/>
        </main>
        

        </section>
    );
}