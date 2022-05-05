import React from "react";
import './WeatherBox.css';

const WeatherBox = ( { item } ) => {
    
    console.log(item);
    return (
        <div className="weather-box-container">
            <h3 className="weather-box-sol">Sol {item[0]}</h3>
            <div></div>
            
        </div>
        )

}

export default WeatherBox;