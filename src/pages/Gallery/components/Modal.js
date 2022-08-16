import React from "react";
import './Modal.css';

const Modal = ( { selectedPhoto, setSelectedPhoto } ) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedPhoto(null);
        }
        
    }

    return (<div className="backdrop" onClick={handleClick}>
        <div className="lightbox">
            <img className="photo" src={selectedPhoto.img_src} alt="enlarged"/>
            <div className="photo-footer">
                    <p><span>Sol:</span> {selectedPhoto.sol}</p>
                    <p><span>Earth date:</span> {selectedPhoto.earth_date}</p>
                    <p><span>Rover:</span> {selectedPhoto.rover.name}</p>
                    <p><span>Camera:</span> {selectedPhoto.camera.full_name}</p>
            </div>
        </div>
    </div>        
    )
}

export default Modal;