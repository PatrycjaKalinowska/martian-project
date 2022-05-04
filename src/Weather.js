import React, { useEffect, useState } from "react";
import WeatherBox from "./WeatherBox";
import './Weather.css';

const Weather = () => {
    const [weather, setWeather] = useState();
    // const [solKeys, setSolKeys] = useState();
    // const [isLoadingWeather, setIsLoadingWeather] = useState('true');

    useEffect(() => {
        fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
        .then(res => res.json()).then(resData => {
            return setWeather(() => resData); 
        });
    }, []);

    console.log(weather);
    
    if (!weather) {
        return <div className="data-loading-screen">Data is loading... ... ...</div>
    } else {
        // const data = [];
        // for (let key in weather.validity_checks) {
        //     data.push(weather.validity_checks[key]);
        // }
        let data = Object.entries(weather.validity_checks);

        console.log(data);
        return (
            <div className="weather-content">
               <h2 className="weather-header">Latest weather on Mars</h2>
               <ul>
                { weather.validity_checks.sols_checked.map( (item) => <li key={item}>
                <WeatherBox weather={weather}>{item}</WeatherBox>
                </li>) }
               </ul>
            </div>);
    }
    
}
    

export default Weather;