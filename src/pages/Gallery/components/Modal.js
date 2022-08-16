import React from "react";
import './Modal.css';

const Modal = () => {

    return (<div className="backdrop">
    <div className="lightbox">
    <img className="photo" src="https://placekeanu.com/200/200" alt="enlarged"/></div>
    </div>        
    )
}

export default Modal;