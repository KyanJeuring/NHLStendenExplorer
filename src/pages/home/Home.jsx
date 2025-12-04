import React from 'react'
import './home.css'
import {Link}  from 'react-router-dom'

export default function Home() {
    const OnClick = () => {
        useNavigate('/page1');
    }
    
    return (
        <section className="home">
            <h1>Welcome to NHL Stenden Emmen</h1>
            <p className="address">Address: Van Schaikweg 94</p>       
            <p className="postalCode">Postal Code: 7811 KL Emmen</p>
            <p className="description">The Emmen branch is the second-largest branch after Leeuwarden, with a large, centrally located campus. Emmen offers a range of <u className="link"><a href="https://www.nhlstenden.com/en/courses?f%5B0%5D=degree-level%3A28&f%5B1%5D=location%3A3">Associate</a></u> and <u className="link"><a href="https://www.nhlstenden.com/en/courses?f%5B0%5D=degree-level%3A27&f%5B1%5D=location%3A3">Bachelor</a></u> degrees. The campus facilities have been completely refurbished and include a media centre, a library, a cafeteria and a pool table.</p>
            <img src="/photos/campusEmmenPhoto.webp" alt="NHL Stenden Emmen Campus" className="campusImage"/>
            <Link to="/page1" className="buttonPulse"><svg className="playArrow"  viewBox="0 0 24 24"><path d="M8 19V5L19 12L8 19Z" /></svg>Start Campus Tour</Link>
            <p className="explanationToButton">Explore our campus at your own pace. Discover facilities, study programs, and key locations.</p>
            <div className="pixelsCombinationForHomePage">
                <img src="/pixels/combinationForHomePage.svg" alt="Pixels Combination" className="pixelsCombination"/>
                <img src="/pixels/triangles.svg" alt="Pixel Triangles" className="pixelTriangles"/>
                <h2>✨ Hidden Gems of Our Campus — The Most Fascinating Places You Might Overlook</h2>
                <p className="info">Explore the corners of NHL Stenden that often go unnoticed — but hold the most inspiring stories, innovation, and creativity.</p>
            </div>
        </section>
    )
}