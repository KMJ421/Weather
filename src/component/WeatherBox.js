import React from 'react'

const WeatherBox = ( {weather} ) => {
    console.log("weather?", weather);
  return (
    <div className="weather-box">
      <div className="location-name">{weather?.name}</div>
      <h2 className="temperature">{weather?.main.temp}°C / {(weather?.main.temp * 9/5 + 32).toFixed(2)}°F</h2>
      <h3 className="weather-description">{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
