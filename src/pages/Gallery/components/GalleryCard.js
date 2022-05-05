import React, { useState } from "react";
import './GalleryCard.css';

const GalleryCard = ( { photosData } ) => {
    const [photo, setPhoto] = useState(photosData);

    return (
        <div className="gallery-card">
            <img src={photo.img_src} alt="" className="gallery-card-photo"/>
            <div className="gallery-card-footer">
                <p><span>Sol:</span> {photo.sol}</p>
                <p><span>Earth date:</span> {photo.earth_date}</p>
                <p><span>Rover:</span> {photo.rover.name}</p>
                <p><span>Camera:</span> {photo.camera.full_name}</p>
            </div>
        </div>)
}

export default GalleryCard;