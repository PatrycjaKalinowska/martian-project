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
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(new Date().getMonth()+1);
    const [year, setYear] = useState(new Date().getFullYear());    

     useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${year}-${month}-${day}&api_key=${API_KEY}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                setPhotosData([]);
                throw Error('could not fetch the data for that resource');             
            }
        })
        .then(resData => {
            setPhotosData(resData.photos);
            setIsLoading(false);
        }).catch( err => {
            console.log(err);
        });
    }, [rover, year, month, day]);
    
    return <div className="gallery-page-container" >
        <GalleryHeader/>
        
        <UserInput rover={rover} setRover={setRover} day={day} setDay={setDay}
            month={month} setMonth={setMonth} year={year} setYear={setYear} />

        <div className="gallery-container">  
            { isLoading ? <p>Data is loading... ... ...</p> : photosData.map((item, index) => <GalleryCard key={index} setSelectedPhoto={setSelectedPhoto} item={item} />) }
            { !isLoading && photosData.length === 0 && <p className="no-photos-info"><b>No photos available for given Rover and Earth date. Please change the date or the rover and try again. </b></p>}
        </div>
        {selectedPhoto && <Modal className='modal' selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>}
    </div>
}

export default Gallery;