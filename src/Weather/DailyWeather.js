import React from 'react'

function DailyWeather({ dateNum, dayIcon, tempHigh, tempLow }) {

    dateNum = new Date(dateNum * 1000)
    dateNum.getDay()
    let options = { weekday: 'short'}
    dateNum = Intl.DateTimeFormat('en-US', options).format(dateNum)

  return (
      <div className="container">
          <div className="day">
            <img src={dayIcon} />
            <h2>{dateNum}</h2>
            <div className="temp-container">
                <h2 className="temp-high">{tempHigh.toString().slice(0,2)}&#x2109;</h2>
                <h2 className="temp-low">{tempLow.toString().slice(0,2)}&#x2109;</h2>
            </div>
          </div>
      </div>
  )
}

export default DailyWeather