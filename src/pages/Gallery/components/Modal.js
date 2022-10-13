import React from "react";
import './Modal.css';
import { FaTimes } from 'react-icons/fa';

const Modal = ( { selectedPhoto, setSelectedPhoto } ) => {
    
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedPhoto(null);
        } 
    }

    const handleClose = () => {
        setSelectedPhoto(null);
    }

    return (<div className="backdrop" onClick={handleClick}>
        <div className="lightbox">
            <FaTimes className='close-button' onClick={handleClose}></FaTimes>
            <div className='photo-container'>
                
                <img className="photo" src={selectedPhoto.img_src} alt="enlarged"/>
            </div>
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