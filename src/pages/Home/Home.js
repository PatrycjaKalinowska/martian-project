import React, { useState , useEffect } from "react";
import './Home.css';

const Home = () => {
    const [nextLaunchTime, setNextLaunchTime] = useState(null);
    const [nextLaunchInfo, setNextLaunchInfo] = useState(null);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launches/next')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    setNextLaunchTime('Sorry, the data is not available right now.')
                    throw Error('could not fetch the data for that resource');
                }           
            }).then(resData => {
                setNextLaunchTime(resData.date_utc);
                console.log("fetched data: " + resData.date_utc);
            }).catch( err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launches/next')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    setNextLaunchInfo('Sorry, the data is not available right now.')
                    throw Error('could not fetch the data for that resource');
                }           
            }).then(resData => {
                setNextLaunchInfo(resData.details);
                console.log("fetched data: " + resData.details);
            }).catch( err => {
                console.log(err);
            });
    }, []);
    
    return <div className="launch-container">
        <div className="hero-container">
                <h1> Welcome Space Rangers!</h1>
                <p>This is a place where you can find some interesting information about space-related topics.
                You can read the latest news, see some photos taken by Mars rovers and check the next SpaceX Launch info. Enjoy! </p>
            </div>
        <h2 className="launch-header">Next SpaceX Launch is planned on:</h2>
        <p className="launch-time">{nextLaunchTime}</p><br></br>
        <h3>Mission details:</h3>
        <p>{nextLaunchInfo}</p>
    </div>

}

export default Home;