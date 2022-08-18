import React, { useEffect, useState } from "react";
import "./UserInput.css"

const UserInput = ( { rover, setRover } ) => {
    const [info, setInfo] = useState("");

    const getInfo = () => {
        switch(rover) {
            case 'perseverance':
                setInfo('Rover landed on Mars on February 18, 2021. Active until now.');
                break;
            case 'curiocity':
                setInfo('Rover landed on Mars on August 6, 2012. Active until now.');
                break;
            case 'opportunity':
                setInfo('Rover landed on Mars on January 25, 2004. Mission completed on February 13, 2019.');
                break;
            case 'spirit':
                setInfo('Rover landed on Mars on January 4, 2004. Mission completed on May 25, 2011.');
                break;
        }
    }
    
    useEffect( () => {getInfo()}, [ ,rover]);


    return(
        <form>
            <div className="input-container-select">
                <label className="select-label">Rover:</label>
                <select className="select" value={rover} onChange={ e => {
                    setRover(e.target.value);
                    // getInfo();
                    }
                }>
                    <option value="perseverance">Perseverance</option>
                    <option value="curiocity">Curiocity</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="spirit">Spirit</option>
                </select>
                <p className="select-info">{info}</p>
            </div>
        </form>
    )

}

export default UserInput;