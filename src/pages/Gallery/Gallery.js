import React, { useState, useEffect } from "react";
import GalleryCard from "./components/GalleryCard";
import Modal from "./components/Modal";
import './Gallery.css';


const Gallery = () => {
    const API_KEY = process.env.REACT_APP_NASA_API_KEY;
    const [photosData, setPhotosData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

     //for no photos enter date 2015-04-04, for 4x photos enter date 2015-6-3
     useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(resData => {
            setPhotosData(resData.photos);
            setIsLoading(false);
            console.log(resData.photos);
        })
    }, []);
   
    return <div className="gallery-page-container" >
        <h2 className="gallery-page-title">Gallery</h2>
        <p className="gallery-page-text">Take a look at the surface of Mars! Here you can see some photos taken by Mars rovers. You can choose from several Mars rovers to see photos taken by your chosen one. You can also define the Earth date and see the photos taken on that day. Enjoy! </p>
        <div className="gallery-container">  
            { isLoading ? <p>Data is loading... ... ...</p> : photosData.map((item, index) => <GalleryCard setSelectedPhoto={setSelectedPhoto} key={index} photosData={item} setSelectedIndex={setSelectedIndex}/>) }
            { !isLoading && photosData.length === 0 && <p className="no-photos-info"><b>No photos available for given Rover and Earth date. Please change the date or the rover and try again. </b></p>}
        </div>
        {selectedPhoto && <Modal className='modal' selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} photosData={photosData}/>}
    </div>
}


export default Gallery;