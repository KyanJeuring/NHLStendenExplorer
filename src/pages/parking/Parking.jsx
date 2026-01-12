import React from 'react';
import './parking.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';

export default function Parking() {
    const navigate = useNavigate();

    return (
        <section className="parking-container">
            <div className="parking-header">
                <h1>Parking</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="parking-content">
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="imagePlaceholder"/>
                <img src="/photos/studylandscapePhotoPlaceholder.png" alt="360 Photo Placeholder" className="imagePlaceholder"/>
                <h3>Looking for a place to park your car, bike, or scooter?</h3>
                <p>
                    At NHL Stenden Emmen, parking is completely free. Many parking spaces are available for cars, bikes, and even scooters!.
                    The main parking area, located just outside the Kennispoort is the perfect area to park your car.
                    However, be careful! Parking on the grass is forbidden and will result in wheel clamps!
                </p>
                <p>
                    Parking your car on the grass is not the only thing that is forbidden. NHL Stenden is officially a "rookvrije" campus,
                    meaning that smoking on university grounds is strictly forbidden. The car parking area is also the place to go to in case of emergency evacuation. Just pay attention to the slow whoop sound alarm!
                </p>
                <p>
                    The parking area for bikes and scooters can be found on the other side of the building, facing Van Schaikweg street.
                    And don't worry, there is enough room for everyone! The bike parking area is covered, keeping your bike safe and protected against the rain.
                </p>
                <TourGuide />
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}