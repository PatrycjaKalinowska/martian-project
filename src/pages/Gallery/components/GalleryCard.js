import React from "react";
import './GalleryCard.css';

const GalleryCard = ( { item, setSelectedPhoto } ) => {

    const handleClick = () => {
        setSelectedPhoto(item);       
    }

    return (
        <div className="gallery-card" onClick={handleClick}>
            <img src={item.img_src} alt="" className="gallery-card-photo" onClick={handleClick}/>
            <div className="gallery-card-footer" onClick={handleClick}>
                <p><span>Sol:</span> {item.sol}</p>
                <p><span>Earth date:</span> {item.earth_date}</p>
                <p><span>Rover:</span> {item.rover.name}</p>
                <p><span>Camera:</span> {item.camera.full_name}</p>
            </div>
        </div>)
}

export default GalleryCard;