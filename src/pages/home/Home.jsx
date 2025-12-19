import React, { useState } from 'react'
import './home.css'
import {Link}  from 'react-router-dom'
import Carousel from '../../components/carousel/Carousel'

export default function Home() {

    const [lorem ,setLorem] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae architecto, molestias temporibus dicta veniam perspiciatis nulla facere saepe excepturi, quasi quidem atque quas ipsum, consequatur quia magnam neque? Voluptatum, quae?')
    const [carouselItems, setCarouselItems] = useState([
    {title: "Did you know?", description: lorem },
    { title: "Did you know?", description: lorem },
    { title: "Did you know? ", description: lorem },
    { title: "Did you know?", description: lorem }])
    
    return (
        <section className="home">
            <h1>Welcome to NHL Stenden Emmen</h1>
            <p className="address">Address: Van Schaikweg 94</p>       
            <p className="postal-code">Postal Code: 7811 KL Emmen</p>
            <p className="description">The Emmen branch is the second-largest branch after Leeuwarden, with a large, centrally located campus. Emmen offers a range of <u className="link"><a href="https://www.nhlstenden.com/en/courses?f%5B0%5D=degree-level%3A28&f%5B1%5D=location%3A3">Associate</a></u> and <u className="link"><a href="https://www.nhlstenden.com/en/courses?f%5B0%5D=degree-level%3A27&f%5B1%5D=location%3A3">Bachelor</a></u> degrees. The campus facilities have been completely refurbished and include a media centre, a library, a cafeteria and a pool table.</p>
            <img src="/photos/campus-emmen-photo.webp" alt="NHL Stenden Emmen Campus" className="campus-image"/>
            <Link to="/explore" className="button-pulse"><svg className="play-arrow"  viewBox="0 0 24 24"><path d="M8 19V5L19 12L8 19Z" /></svg>Start Campus Tour</Link>
            <p className="explanation-to-button">Explore our campus at your own pace. Discover facilities, study programs, and key locations.</p>
            <div className="combination-for-home-page">
                <img src="/pixels/group-selection-home-page.svg" alt="Group of Pixels" className="pixels-home-page"/>
                    <div className="description-for-combination-home-page">
                        <h2>✨ Hidden Gems of Our Campus — The Most Fascinating Places You Might Overlook</h2>
                        <p className="info">Explore the corners of NHL Stenden that often go unnoticed — but hold the most inspiring stories, innovation, and creativity.</p>
                    </div>
            </div>
            <div className='carousel-section'>
               <Carousel items={carouselItems} />
            </div>
        </section>
    )
}