import React, { useState, useEffect } from 'react';

import DailyWeather from './DailyWeather';

function Weather() {

    const [weatherData, setWeatherData] = useState()

    const APIKey = 'ffe63745a1e6cbad92e44b2bf6f0ea6a';

    function getWeather() {
        if(!navigator.geolocation){
            console.log('does not work');
        } else {
            navigator.geolocation.getCurrentPosition((position) => {

                const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&exclude=minutely&appid=${APIKey}`
                
                fetch(API)
                .then(res => res.json())
                .then(data => {
                    setWeatherData(data)
                })
                .catch(err => console.log(err))
            })
        }
    }

    useEffect(() => {
        getWeather()
    }, [])

    if(weatherData) console.log(weatherData);

  return (
    <div className="container">
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