import React from "react";
import './GalleryCard.css';

const GalleryCard = ( { photosData } ) => {

    return (
        <div className="gallery-card" >
            <img src={photosData.img_src} alt="" className="gallery-card-photo"/>
            <div className="gallery-card-footer">
                <p><span>Sol:</span> {photosData.sol}</p>
                <p><span>Earth date:</span> {photosData.earth_date}</p>
                <p><span>Rover:</span> {photosData.rover.name}</p>
                <p><span>Camera:</span> {photosData.camera.full_name}</p>
            </div>
        </div>)
}

export default GalleryCard;