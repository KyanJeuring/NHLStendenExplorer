import React from "react";
import "./letsgonav.css";
import { useNavigate } from 'react-router-dom';

export default function LetsgoNav({ src, location, description, link }) {
    const navigate = useNavigate();

    return (
        <article className="letsgonav-container">
            <div 
                className="letsgonav-block" 
                onClick={() => navigate(link)}
            > 
                <section className="letsgonav-info">
                    
                        <div className="letsgonav-icon-wrapper">
                            <img 
                                src={src}
                                alt={location}
                                className="letsgonav-icon"
                            />  
                            
                        </div>
                    

                    <div className="letsgonav-text">
                        <h3>{location}</h3>
                        <p>{description}</p>
                    </div>
                </section>

                <img 
                    src="/icons/nextPageArrow.svg" 
                    alt="Navigate"
                    className="letsgonav-arrow" 
                />
            </div>
        </article>
    );
}
