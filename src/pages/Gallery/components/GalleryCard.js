import React from "react";
import './GalleryCard.css';

const GalleryCard = ( { photosData, setSelectedPhoto } ) => {

    const handleClick = () => {
        console.log("test");
        setSelectedPhoto(photosData);
    }

    return (
        <div className="gallery-card" onClick={handleClick}>
            <img src={photosData.img_src} alt="" className="gallery-card-photo" onClick={handleClick}/>
            <div className="gallery-card-footer" onClick={handleClick}>
                <p><span>Sol:</span> {photosData.sol}</p>
                <p><span>Earth date:</span> {photosData.earth_date}</p>
                <p><span>Rover:</span> {photosData.rover.name}</p>
                <p><span>Camera:</span> {photosData.camera.full_name}</p>
            </div>
        </div>)
}

export default GalleryCard;