import React, { useState } from "react";
import './Modal.css';
import closeButton from "../icons/x-regular-24.png";
import leftArrow from "../icons/chevron-left-regular-24.png";
import rightArrow from "../icons/chevron-right-regular-24.png";

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

    const handleLeft = () => {

        if (selectedIndex !== 0) {
            setSelectedIndex(selectedIndex - 1);
        } else if (selectedIndex === 0) {
            setSelectedIndex(photosData.length-1);
        }
        setSelectedPhoto(photosData[selectedIndex]);
    }

    const handleRight = () => {
        
        if (selectedIndex !== photosData.length-1) {
            setSelectedIndex(selectedIndex + 1);
        } else if (selectedIndex === photosData.length-1) {
            setSelectedIndex(0);
        }
        setSelectedPhoto(photosData[selectedIndex]);
    }

    return (<div className="backdrop" onClick={handleClick}>
        <div className="lightbox">
            <img className='close-button' src={closeButton} onClick={handleClose}></img>
            <div className='photo-container'>
                <img className='arrow left-arrow' src={leftArrow} onClick={handleLeft}></img>
                <img className='arrow right-arrow' src={rightArrow} onClick={handleRight}></img>
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