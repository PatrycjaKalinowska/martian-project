import React, { useState, useEffect } from "react";
import GalleryCard from "./components/GalleryCard";
import Modal from "./components/Modal";
import './Gallery.css';


const Gallery = () => {
    const API_KEY = process.env.REACT_APP_NASA_API_KEY;
    const [rover, setRover] = useState("curiosity");
    const [photosData, setPhotosData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    

     //for no photos enter date 2015-04-04, for 4x photos enter date 2015-6-3
     useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=2022-1-1&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(resData => {
            setPhotosData(resData.photos);
            setIsLoading(false);
            console.log(resData.photos);
        })
    }, [ ,rover]);
   
    return <div className="gallery-page-container" >
        <h2 className="gallery-page-title">Gallery</h2>
        <p className="gallery-page-text">Take a look at the surface of Mars! Here you can see some photos taken by Mars rovers. You can choose from several Mars rovers to see photos taken by your chosen one. You can also define the Earth date and see the photos taken on that day. Enjoy! </p>
        
        <form>
            <div className="input-container-select">
                <label className="select-label">Rover:</label>
                <select value={rover} onChange={ e => setRover(e.target.value)}>
                    <option value="curiocity">Curiocity</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="perseverance">Perseverance</option>
                </select>
            </div>
        </form>

        <div className="gallery-container">  
            { isLoading ? <p>Data is loading... ... ...</p> : photosData.map((item, index) => <GalleryCard setSelectedPhoto={setSelectedPhoto} key={index} photosData={item} setSelectedIndex={setSelectedIndex}/>) }
            { !isLoading && photosData.length === 0 && <p className="no-photos-info"><b>No photos available for given Rover and Earth date. Please change the date or the rover and try again. </b></p>}
        </div>
        {selectedPhoto && <Modal className='modal' selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} photosData={photosData} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />}
    </div>
}


export default Gallery;