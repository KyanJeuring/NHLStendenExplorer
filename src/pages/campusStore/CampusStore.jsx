import React from 'react';
import './campusStore.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

export default function CampusStore() {
    const navigate = useNavigate();

    return (
        <section className="campusStore-container">
            <div className="campus-store-header">
                <h1>Campus Store</h1>
                <svg width="174" height="147" viewBox="0 0 174 147" fill="none" xmlns="http://www.w3.org/2000/svg" className="pixelsCombination">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108.85 94.2339H53V109.607H108.85V94.2339Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108.85 63.4861H53V78.8611H108.85V63.4861Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108.85 32.7342H53V48.1072H108.85V32.7342Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108.85 1.98438H53V17.3613H108.85V1.98438Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M173.976 109.613H108.85V124.986H173.976V109.613Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M173.976 78.8611H108.85V94.2339H173.976V78.8611Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M173.976 48.1072H108.85V63.4822H173.976V48.1072Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M173.976 17.3613H108.85V32.7342H173.976V17.3613Z" fill="#00A7A2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.9913 72.1875L29.493 72.6684L24.2769 74.0626L19.413 76.2951L14.9724 79.2888L11.0217 82.9664L7.63435 87.2557L4.87701 92.0769L2.82076 97.3578L1.53675 103.022L1.09375 108.992L1.53675 114.96L2.82076 120.623L4.87701 125.904L7.63435 130.728L11.0217 135.015L14.9724 138.695L19.413 141.686L24.2769 143.918L29.493 145.313L34.9913 145.795V108.992V72.1875Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M68.8887 72.1875L63.3904 72.6684L58.1743 74.0626L53.3105 76.2951L48.8698 79.2888L44.9191 82.9664L41.5318 87.2557L38.7756 92.0769L36.7194 97.3578L35.4353 103.022L34.9912 108.992L35.4353 114.96L36.7194 120.623L38.7756 125.904L41.5318 130.728L44.9191 135.015L48.8698 138.695L53.3105 141.686L58.1743 143.918L63.3904 145.313L68.8887 145.795V72.1875Z" fill="black"/>
                </svg>
            </div>
            <main className="campus-store-main-content">
                <img src="https://lipsum.app/1920x1080" alt="Campus Store" className="image-placeholder"/>
                <h3>Welcome to Campus Store</h3>
                <p>
                    To the left of the Student Info desk, you will find the Campus Store. 
                    The Campus Store has a wide variety of school supplies available for purchase.
                    From basic pencils, pens, rulers, notebooks, to technological gadgets and equipment, the Campus Store has it all and for affordable prices!
                    You can even find local souvenirs from Emmen. Just drop by and have a look!
                </p>
                <p>Found something that caught your eye? Keep in mind that there is, however, a minimum purchase limit of 50 cents.</p>
                <TourGuide lang={lang} />
            </main>
            <div className="buttonToNextPage">
                <button onClick={() => navigate('/learnMore')} className="moveNext">
                    Move Next
                </button>
            </div>
        </section>
    );
}
