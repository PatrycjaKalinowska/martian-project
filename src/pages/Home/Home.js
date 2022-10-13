import React, { useState, useEffect } from "react";
import './Home.css';

const Home = () => {
    const API_KEY = process.env.REACT_APP_NASA_API_KEY;
    const [apod, setApod] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw Error('could not fetch the data');
                }
            }).then(data => {
                setApod(data);
                setIsLoading(false);
            }).catch(err => 
                console.log(err))
    }, []);


    return <div className="home-container">
            <h1 className="hero-header">Astronomy Picture of the Day</h1>
        {isLoading ? <p>Loading... ... ...</p> : <div className="hero-container">
            <h2>"{apod.title}"</h2>
            <div className="hero-image-container">
                <img src={apod.url} alt="NASA APOD"></img>
            </div>
            <div className="hero-image-text-container">
            <p className="copyright"><span>Copyright:</span> {apod.copyright}</p>
            <p className="date"><span>Date:</span> {apod.date}</p>
            <p className="description">{apod.explanation}</p>
            </div>
        </div>}



    </div>

}

export default Home;