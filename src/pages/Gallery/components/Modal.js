import React, { useState } from "react";
import './Modal.css';
import closeButton from "../icons/x-regular-24.png";

const Modal = ( { selectedPhoto, setSelectedPhoto, photosData, selectedIndex, setSelectedIndex } ) => {
    

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedPhoto(null);
        } 
    }

    const handleClose = (e) => {
        if (e.target.classList.contains('close-button')) {
            setSelectedPhoto(null);
        }
    }

    return (<div className="backdrop" onClick={handleClick}>
        <div className="lightbox">
            <img className='close-button' src={closeButton} onClick={handleClose}></img>
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