import React from 'react'

function DailyWeather({ dateNum, dayIcon, tempHigh, tempLow }) {

    dateNum = new Date(dateNum * 1000)
    dateNum.getDay()
    let options = { weekday: 'short'}
    dateNum = Intl.DateTimeFormat('en-US', options).format(dateNum)

  return (
      <div>
        <h3>DailyWeather</h3>
        <img src={dayIcon} />
        <h2>{dateNum}</h2>
        <h2>{tempHigh.toString().slice(0,2)}&#x2109;</h2>
        <h2>{tempLow.toString().slice(0,2)}&#x2109;</h2>
      </div>
  )
}

export default DailyWeather