import React, { useState, useEffect } from 'react';

function Weather() {

    const [weatherData, setWeatherData] = useState()

    const lon = -80.000;
    const lat = 40.000;
    const APIKey = 'ffe63745a1e6cbad92e44b2bf6f0ea6a';

    useEffect(() => {
        const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&appid=${APIKey}`
        fetch(API)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, [])

  return (
    <div>
        <h1>Weather</h1>
    </div>
  )
}

export default Weather