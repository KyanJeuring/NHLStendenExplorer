import React, {useMemo} from 'react';
import './learnMore.css';
import LetsgoNav from '../../components/letsgonav/LetsgoNav';

const translations = {
    en: {
        title: "Learn more about...",
    },
    nl: {
        title: "Leer meer over...",
    },
};

const lestsgoLinks = {
    en: [
        {
            src: "/icons/library_icon.svg",
            location: "Unwind your mind",
            description: "Play ping pong or football table.",
            link: "/games",
        },
        {
            src: "/icons/student_info_icon.svg",
            location: "Need technical equipment?",
            description: "Cameras, tripods, microphones and etc.",
            link: "/studentInfo",
        },
        {
            src: "/icons/emergency.svg",
            location: "Emergency",
            description: "Where is first aid kit? Slow whoop sound?",
            link: "/emergency",
        },
        {
            src: "/icons/it-support.svg",
            location: "IT Support Service",
            description: "Have any technical issues?",
            link: "/",
        },
        {
            src: "/icons/campus-store.svg",
            location: "Campus Store",
            description: "Urgently need a pen or a notebook?",
            link: "/campusStore",
        },
        {
            src: "/icons/lockers.svg",
            location: "Lockers",
            description: "The perfect place to keep your stuff.",
            link: "/lockers",
        },
        {
            src: "/icons/stones-restaurant.svg",
            location: "Stones Restaurant",
            description: "The real restaurant on campus where students get hands on experience!",
            link: "/stonesRestaurant",
        },
        {
            src: "/icons/study-abroad.svg",
            location: "Study Abroad",
            description: "Want to know more about internships abroad or exchange programmes?",
            link: "/studyabroad",
        },
        {
            src: "/icons/courses_overview.svg",
            location: "Courses Overview",
            description: "Go grab a flyer with the course overview in Student Info.",
            link: "/coursesOverview",
        }
    ],
    nl: [
        {
            src: "/icons/library_icon.svg",
            location: "Ontspan jezelf",
            description: "Speel tafeltennis of tafelvoetbal.",
            link: "/games",
        },
        {
            src: "/icons/student_info_icon.svg",
            location: "Technische apparatuur nodig?",
            description: "Camera's, statieven, microfoons, enzovoort.",
            link: "/studentInfo",
        },
        {
            src: "/icons/emergency.svg",
            location: "Noodgeval",
            description: "Waar is de EHBO-doos? Langzaam loeiend geluid?",
            link: "/emergency",
        },
        {
            src: "/icons/it-support.svg",
            location: "IT-ondersteuningsdienst",
            description: "Heb je technische problemen?",
            link: "/",
        },
        {
            src: "/icons/campus-store.svg",
            location: "Campuswinkel",
            description: "Dringend een pen of een notitieboekje nodig?",
            link: "/campusStore",
        },
        {
            src: "/icons/lockers.svg",
            location: "Kluisjes",
            description: "De perfecte plek om je spullen te bewaren.",
            link: "/lockers",
        },
        {
            src: "/icons/stones-restaurant.svg",
            location: "Stones Restaurant",
            description: "Het echte restaurant op de campus waar studenten praktijkervaring opdoen!",
            link: "/stonesRestaurant",
        },
        {
            src: "/icons/study-abroad.svg",
            location: "Studeren in het buitenland",
            description: "Wil je meer weten over stages in het buitenland of uitwisselingsprogramma's?",
            link: "/studyabroad",
        },
        {
            src: "/icons/courses_overview.svg",
            location: "Cursusoverzicht",
            description: "Haal een flyer met het cursusoverzicht in Student Info.",
            link: "/coursesOverview",
        }
    ]
};

export default function LearnMore({ lang, toggleLang }) {
    const translate = useMemo(() => translations[lang] || translations.en, [lang]);
    const letsGoItems = useMemo(() => lestsgoLinks[lang] || lestsgoLinks.en, [lang]);

    return (
        <section className='learn-more-container'>
            <header className="learnMorePage">
                <div className="learnMoreHeader">
                    <h2 className="tagline">{translate.title}</h2>
                    <img src="/pixels/learnMoreSvgCombination.svg" alt="" className="whiteWaves"/>
                </div> 
            </header>
            <main className='lets-go-to-links'>
                {letsGoItems.map((item, idx) => (
                    <LetsgoNav
                        key={`${item.location}-${idx}`}
                        src={item.src}
                        location={item.location}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </main>
        </section>
    );
}