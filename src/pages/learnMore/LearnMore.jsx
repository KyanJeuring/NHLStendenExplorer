import React from 'react';
import './learnMore.css';
import LetsgoNav from '../../components/letsgonav/LetsgoNav';


export default function LearnMore() {
    return (
        <section className='learn-more-container'>
            <header className="learnMorePage">
                <div className="learnMoreHeader">
                    <h2 className="tagline">Learn more about...</h2>
                    <img src="/pixels/learnMoreSvgCombination.svg" alt="" className="whiteWaves"/>
                </div> 
            </header>
            <main className='lets-go-to-links'>
                <LetsgoNav  
                    src="/icons/library_icon.svg" 
                    location="Unwind your mind" 
                    description="Play ping pon or football table." 
                    link="/games"
                />

                <LetsgoNav  
                    src="/icons/student_info_icon.svg" 
                    location="Need technical equipment?" 
                    description="Cameras, tripods, microphones and etc." 
                    link="/studentInfo"
                />

                <LetsgoNav  
                    src="/icons/emergency.svg" 
                    location="Emergency" 
                    description="Where is first aid kit? Slow whoop sound what to do?" 
                    link="/"
                />

                <LetsgoNav  
                    src="/icons/it-support.svg" 
                    location="IT Support Service" 
                    description="Have some technical issues?" 
                    link="/"
                />

                <LetsgoNav  
                    src="/icons/campus-store.svg" 
                    location="Campus Store" 
                    description="Urgently need a pen or a notebook?" 
                    link="/"
                />

                <LetsgoNav  
                    src="/icons/lockers.svg" 
                    location="Lockers" 
                    description="Place to keep your stuff." 
                    link="/lockers"
                />

                <LetsgoNav  
                    src="/icons/stones-restaurant.svg" 
                    location="Stones Restaurant" 
                    description="Visit real restaurant on campus where students get hands on experience!" 
                    link="/"
                />

                <LetsgoNav  
                    src="/icons/study-abroad.svg" 
                    location="Study Abroad" 
                    description="Want to know more about internships abroad or exchange programmes?" 
                    link="/"
                />

                <LetsgoNav  
                    src="/icons/courses_overview.svg" 
                    location="Courses Overview" 
                    description="Go grab a flyer with the course overview in Student Info." 
                    link="/"
                />
            </main>
        </section>
    );
}