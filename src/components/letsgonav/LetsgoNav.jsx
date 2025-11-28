import React from "react";
import "./letsgonav.css";

export default function LetsgoNav({ src, location, description }) {
    return (
        <article className="letsgonav-container">
            <div className="letsgonav-block">
                
                {/* Left side: icon + text */}
                <section className="letsgonav-info">
                    
                    <figure className="letsgonav-icon-wrapper">
                        <div className="letsgonav-icon-bg">
                            <img 
                                src={src}
                                alt={location}
                                className="letsgonav-icon"
                            />  
                        </div>
                    </figure>


                    <header className="letsgonav-text">
                        <h3>{location}</h3>
                        <p>{description}</p>
                    </header>

                </section>

                {/* Right side: arrow */}
                <img 
                    src="/pixels/blackArrow.svg" 
                    alt="Navigate"
                    className="letsgonav-arrow" 
                />
            </div>
        </article>
    );
}