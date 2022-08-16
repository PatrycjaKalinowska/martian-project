import React, { useState, useEffect } from "react";
import GalleryCard from "./components/GalleryCard";
import Modal from "./components/Modal";
import './Gallery.css';


const Gallery = () => {
    const API_KEY = process.env.REACT_APP_NASA_API_KEY;
    const [photosData, setPhotosData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

     //dlaczego API_KEY nie działa?!
     useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-4-4&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(resData => {
            setPhotosData(resData.photos);
            setIsLoading(false);
            console.log(resData.photos);
        })
    }, []);

    const handleClick = () => {
        console.log("test");
        // const modal = document.getElementsByClassName("backdrop");
        // setIsOpen(true);
        // openModal(isOpen, modal);  
    }

    // const openModal = (isOpen, element) => {
    //     if (isOpen) {
    //         element.style.visibility='visible';
    //     } else {
    //         element.style.visibility='hidden';
    //     }
    // }

    // useEffect(() => {
    //     openModal
    // }, []);
   

    const placeholder = 'https://placekeanu.com/200/200';

    return <div className="gallery-page-container" >
        <h2 className="gallery-page-title">Gallery</h2>
        <p className="gallery-page-text">Take a look at the surface of Mars! Here you can see some photos taken by Mars rovers. You can choose from several Mars rovers to see photos taken by your chosen one. You can also define the Earth date and see the photos taken on that day. Enjoy! </p>
        <div className="gallery-container">  
            { isLoading ? <p>Data is loading... ... ...</p> : photosData.map((item, index) => <GalleryCard onClick={handleClick} key={index} photosData={item}/>) }
            { !isLoading && photosData.length === 0 && <p className="no-photos-info"><b>No photos available for given Rover and Earth date. Please change the date or the rover and try again. </b></p>}
        </div>
        <Modal className='modal' selectedPhoto={placeholder}/>
    </div>
}


export default Gallery;