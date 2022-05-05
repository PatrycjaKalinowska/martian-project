import React, { useEffect, useState } from "react";
import WeatherBox from "./components/WeatherBox";
import './Weather.css';

const Weather = () => {
    const [initialData, setInitialData] = useState();

    useEffect(() => {
        fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
        .then(res => res.json()).then(resData => {
            return setInitialData(() => resData); 
        });
    }, []);
    
    if (!initialData) {
        return <div className="data-loading-screen">Data is loading... ... ...</div>
    } else {
        const data = Object.entries(initialData.validity_checks).filter((element, index) => index<6)
        console.log(initialData);
        return (
            <div className="weather-page-container">
               <h2 className="weather-page-title">Latest weather on Mars</h2>
               <ul>
                { data.map(item => <li key={item[0]}><WeatherBox item={item}/></li>) }
               </ul>
            </div>);
    }
    
}
    
export default Weather;