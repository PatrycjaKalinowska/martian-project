import React from "react";

const Modal = ( { selectedPhoto } ) => {

    return(
        <div className="backdrop">
            <img className="photo" src={selectedPhoto} alt="enlarged"/>
        </div>
    )
}

export default Modal;