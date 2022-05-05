import React, { useState, useEffect } from "react";
import GalleryCard from "./components/GalleryCard";
import './Gallery.css';


const Gallery = () => {
    const [photosData, setPhotosData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY')
        .then(res => res.json())
        .then(resData => {
            setPhotosData(resData.photos);
            setIsLoading(false);
            console.log(resData.photos);
        })
    }, []);

    return <div className="gallery-page-container">
        <h2 className="gallery-page-title">Gallery</h2>
        <p className="gallery-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="gallery-container">  
            { photosData.map((item, index) => <GalleryCard key={index} photosData={item}/>) }
            
            
        </div>
    
    </div>
}


export default Gallery;