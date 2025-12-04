import React from "react";
import { useNavigate } from "react-router-dom";
import "./letsgofooter.css";

export default function LetsgoFooter() {
    const navigate = useNavigate(); // ❗ THIS is required

    return (
        <section className="letsgofooter">
            <h1 onClick={() => navigate('/faq')} className="footer-h1">FAQ</h1>

            <img 
                src="/icons/button_home.svg" 
                alt="home button" 
                onClick={() => navigate('/home')}
                className="footer-image"
            />
        </section>
    );
}
