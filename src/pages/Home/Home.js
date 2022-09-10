import React, { useState , useEffect } from "react";
import './Home.css';

const Home = () => {
    const [todaysDateUnix, setTodaysDateUnix] = useState(Math.round(Date.now()/1000));
    const [nextLaunchTime, setNextLaunchTime] = useState(null);
    const [nextLaunchInfo, setNextLaunchInfo] = useState(null);
    const [timeDifference, setTimeDifference] = useState(0);
    const [updateNextLaunch, setUpdateNextLaunch] = useState(false);

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
                setNextLaunchTime(resData.date_unix);
                setUpdateNextLaunch(false);
                console.log("fetched data: " + resData.date_utc);
                console.log("fetched data: " + resData.date_unix);
                console.log('today unix '+ todaysDateUnix);
            }).catch( err => {
                console.log(err);
            });


    }, [ , updateNextLaunch]);

    useEffect(() => {
        setTimeDifference(nextLaunchTime-todaysDateUnix);
    }, [nextLaunchTime]);

    const formatCountdownTime = (sec) => {
        let formatedTime = "";
        let days = Math.floor(sec / 86400);
        let hours = Math.floor((sec % 86400) / 3600);
        let minutes = Math.floor(((sec % 86400) % 3600) / 60);
        let seconds = (((sec % 86400) % 3600) % 60);

        formatedTime = `${days} : ${hours} : ${minutes} :  ${seconds}`;
        return formatedTime;
    }

    useEffect(() => {
        const countdownIntervalID = setInterval(() => {
            setTimeDifference(prevTimeDifference => prevTimeDifference - 1)
            }, 1000);

            if (timeDifference===0) {
                setUpdateNextLaunch(true);
            }
        
            return () => {
                clearInterval(countdownIntervalID);
            }

            
    }, [timeDifference]);

    return <div className="launch-container">
        <div className="hero-container">
            <h1> Welcome Space Rangers!</h1>
            <p>This is a place where you can find some interesting information about space-related topics.
            You can read the latest news, see some photos taken by Mars rovers and check the next SpaceX Launch info. Enjoy! </p>
        </div>
        <div className="countdown-container">
            <h2 className="launch-header">Next SpaceX Launch is planned on:</h2>
            <p className='launch-countdown-time'>{formatCountdownTime(timeDifference)}</p>
            <p className='launch-countdown-label'>days : hours : minutes : seconds</p>
        </div>
        
    </div>

}

export default Home;