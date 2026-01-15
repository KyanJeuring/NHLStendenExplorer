import React from 'react';
import './studentinfo.css';
import { useNavigate } from 'react-router-dom';
import TourGuide from '../../components/tourguide/TourGuide';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

export default function StudentInfo() {
    const navigate = useNavigate();
    const photoSphereRef = React.createRef();

    return (
        <section className="studylandscapePage-container">
            <div className="studylandscape-header">
                <h1>Student Info</h1>
                <img src="/pixels/combinationOfPixelsForLocations.svg" alt="Pixels Combination" className="pixelsCombination"/>
            </div>
            <main className="studylandcape-main-content">
                <ReactPhotoSphereViewer
                    ref={photoSphereRef}
                    src="/360photos/image00014.jpeg"
                    littlePlanet={false}
                    hideNavbarButton={true}
                    height={"400px"}
                    width={"30%"}
                />
                <TourGuide />
            </main>
            <div className="buttonToNextPage">                
                <button onClick={() => navigate('/learnMore')} className="moveNext">Move Next</button>
            </div>
        </section>
    )
}