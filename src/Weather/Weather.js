import React, { useState, useEffect } from 'react';

import DailyWeather from './DailyWeather';

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
            setWeatherData(data)
        })
        .catch(err => console.log(err))
    }, [])

    if(weatherData) console.log(weatherData);

  return (
    <div>
        <h1>Weather</h1>
        {weatherData ? 
            weatherData.daily.slice(0, 5).map((day, i) => {
                return <DailyWeather key={i} 
                    dateNum={day.dt}
                    dayIcon={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    tempHigh={day.temp.max}
                    tempLow={day.temp.min}
                    />
            })
        : <h2>Loading...</h2>
        }
        
    </div>
  )
}

export default Weather