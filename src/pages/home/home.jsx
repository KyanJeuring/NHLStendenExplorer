import React from 'react'
import './home.css'

export default function Home() {
    return (
        <section className="home">
            <h1>Home</h1>
            <p>Welcome</p>
            <div className="logos">
                <img src="/logos/NHLStendenENLogo.svg" alt="NHL Stenden EN Logo" className="logo"/>
                <img src="/logos/NHLStendenNLLogo.svg" alt="NHL Stenden NL Logo" className="logo"/>
            </div>
        </section>
    )
}
