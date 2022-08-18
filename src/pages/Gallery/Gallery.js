import React, { useState, useEffect } from "react";
import GalleryHeader from "./components/GalleryHeader";
import GalleryCard from "./components/GalleryCard";
import Modal from "./components/Modal";
import UserInput from "./components/UserInput";
import './Gallery.css';


const Gallery = () => {
    const API_KEY = process.env.REACT_APP_NASA_API_KEY;
    const [rover, setRover] = useState("perseverance");
    const [photosData, setPhotosData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    

     //for no photos enter date 2015-04-04, for 4x photos enter date 2015-6-3
     useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=2012-10-9&api_key=${API_KEY}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                setPhotosData([]);
            }
        })
        .then(resData => {
            setPhotosData(resData.photos);
            setIsLoading(false);
            console.log(resData.photos);
        }).catch(console.log("data not found"));
    }, [ ,rover]);
   
    return <div className="gallery-page-container" >
        <GalleryHeader/>
        
        <UserInput rover={rover} setRover={setRover} />

        <div className="gallery-container">  
            { isLoading ? <p>Data is loading... ... ...</p> : photosData.map((item, index) => <GalleryCard setSelectedPhoto={setSelectedPhoto} key={index} photosData={item} setSelectedIndex={setSelectedIndex}/>) }
            { !isLoading && photosData.length === 0 && <p className="no-photos-info"><b>No photos available for given Rover and Earth date. Please change the date or the rover and try again. </b></p>}
        </div>
        {selectedPhoto && <Modal className='modal' selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} photosData={photosData} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />}
    </div>
}


export default Gallery;