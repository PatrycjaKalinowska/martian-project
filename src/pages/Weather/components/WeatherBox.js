import React, { useState } from "react";
import './WeatherBox.css';

const WeatherBox = ( { children, item } ) => {
    const [weather, setWeather] = useState(item);
    
    console.log(weather);
    return (
        <div className="weather-box-container">
            <h3 className="weather-box-sol">Sol {weather[0]}</h3>
            <div></div>
            
        </div>
        )

}

export default WeatherBox;