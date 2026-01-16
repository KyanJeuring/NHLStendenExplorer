import React, { useMemo, useState, useEffect } from 'react'
import './home.css'
import {Link}  from 'react-router-dom'
import Carousel from '../../components/carousel/Carousel'

const translations = {
    en: {
        welcome: "Welcome to NHL Stenden Emmen",
        address: "Address: Van Schaikweg 94",
        postalCode: "Postal Code: 7811 KL Emmen",
        description: "The Emmen branch is the second-largest branch after Leeuwarden, with a large, centrally located campus. Emmen offers a range of Associate and Bachelor degrees. The campus facilities have been completely refurbished and include a media centre, a library, a cafeteria and a pool table.",
        startTour: "Start Campus Tour",
        explanationToButton: "Explore our campus at your own pace. Discover facilities, study programs, and key locations.",
        hiddenGemsTitle: "✨ Hidden Gems of Our Campus — The Most Fascinating Places You Might Overlook",
        hiddenGemsInfo: "Explore the corners of NHL Stenden that often go unnoticed — but hold the most inspiring stories, innovation, and creativity."
    },
    nl: {
        welcome: "Welkom bij NHL Stenden Emmen",
        address: "Adres : Van Schaikweg 94",
        postalCode: "Postcode: 7811 KL Emmen",
        description: "De vestiging Emmen is de op een na grootste vestiging na Leeuwarden, met een grote, centraal gelegen campus. Emmen biedt een scala aan Associate- en Bacheloropleidingen. De campusfaciliteiten zijn volledig gerenoveerd en omvatten een mediacentrum, een bibliotheek, een cafetaria en een pooltafel.",
        startTour: "Start Campus Tour",
        explanationToButton: "Verken onze campus in uw eigen tempo. Ontdek faciliteiten, studieprogramma's en belangrijke locaties.",
        hiddenGemsTitle: "✨ Verborgen pareltjes van onze campus — de meest fascinerende plekken die je misschien over het hoofd ziet",
        hiddenGemsInfo: "Verken de hoeken van NHL Stenden die vaak onopgemerkt blijven — maar de meest inspirerende verhalen, innovatie en creativiteit bevatten."
    }
}

export default function Home({ lang, toggleLang }) {
    const translated = useMemo(() => translations[lang] || translations.en, [lang]);
    const [carouselItems, setCarouselItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

    useEffect(() => {
        let mounted = true;
        const apiLang = lang === 'en' ? 'en' : 'nl';

        setLoading(true);
        setError(null);

        fetch(`${API_URL}/api/carousel/${apiLang}`)
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((data) => {
                if (mounted) setCarouselItems(data);
            })
            .catch((err) => {
                console.error('Failed to fetch carousel items', err);
                if (mounted) setError(err.message);
            })
            .finally(() => mounted && setLoading(false));

        return () => {
            mounted = false;
        };
    }, [API_URL, lang]);

    const OnClick = () => {
        useNavigate('/page1');
    }
    
    return (
        <section className="home">
            <h1>{translated.welcome}</h1>
            <p className="address">{translated.address}</p>       
            <p className="postal-code">{translated.postalCode}</p>
            <p className="description">{translated.description}</p>
            <img src="/photos/campus-emmen-photo.webp" alt="NHL Stenden Emmen Campus" className="campus-image"/>
            <Link to="/explore" className="button-pulse"><svg className="play-arrow"  viewBox="0 0 24 24"><path d="M8 19V5L19 12L8 19Z" /></svg>{translated.startTour}</Link>
            <p className="explanation-to-button">{translated.explanationToButton}</p>
            <div className="combination-for-home-page">
                <img src="/pixels/group-selection-home-page.svg" alt="Group of Pixels" className="pixels-home-page"/>
                <div className="description-for-combination-home-page">
                    <h2>{translated.hiddenGemsTitle}</h2>
                </div>
            </div>
            <p className="info">{translated.hiddenGemsInfo}</p>
            <div className='carousel-section'>
               <Carousel items={carouselItems} />
            </div>
        </section>
    )
}