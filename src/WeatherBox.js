import React from "react";
import './WeatherBox.css';

const WeatherBox = ( { children, weather } ) => {

    return (
        <div className="weather-box-container">
            <h3 className="weather-box-sol">Sol {children}</h3>
        </div>
        )

}

export default WeatherBox;