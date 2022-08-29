import React from "react";
import './GalleryCard.css';

const GalleryCard = ( { index, photosData, item, selectedPhoto, setSelectedPhoto, selectedIndex, setSelectedIndex } ) => {

    const handleClick = () => {
        // setSelectedIndex(index);
        setSelectedPhoto(item);
        // setSelectedIndex(index)
        // setSelectedIndex(photosData.indexOf(selectedPhoto));
        
        // console.log("selectedIndex: " + selectedIndex);
        // console.log(index);

        
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