import React from 'react'

const WeatherBox = ( {weather} ) => {
  const iconUrl = weather
  ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  : "";

  const getKoreanDescription = (eng) => {
    const dict = {
      'clear sky': '맑음',
      'few clouds': '약간의 구름',
      'scattered clouds': '흩어진 구름',
      'broken clouds': '구름 많음',
      'overcast clouds': '흐림',
      'shower rain': '소나기',
      'light rain': '약한 비',
      'moderate rain': '보통 비',
      'heavy intensity rain': '강한 비',
      'very heavy rain': '매우 강한 비',
      'extreme rain': '극심한 비',
      'freezing rain': '어는 비',
      'light intensity shower rain': '약한 소나기',
      'heavy intensity shower rain': '강한 소나기',
      'rain': '비',
      'thunderstorm': '천둥번개',
      'thunderstorm with light rain': '약한 비를 동반한 천둥',
      'thunderstorm with heavy rain': '강한 비를 동반한 천둥',
      'light thunderstorm': '약한 천둥번개',
      'heavy thunderstorm': '강한 천둥번개',
      'ragged thunderstorm': '불규칙한 천둥번개',
      'snow': '눈',
      'light snow': '약한 눈',
      'heavy snow': '강한 눈',
      'sleet': '진눈깨비',
      'light shower sleet': '약한 진눈깨비 소나기',
      'shower sleet': '진눈깨비 소나기',
      'light rain and snow': '비와 눈',
      'rain and snow': '비와 눈',
      'mist': '엷은 안개',
      'smoke': '연기',
      'haze': '실안개',
      'fog': '안개',
      'sand': '황사',
      'dust': '먼지',
      'ash': '화산재',
      'squall': '돌풍',
      'tornado': '토네이도',
    };
  
    return dict[eng] || eng;
  };
  

  return (
    <div className="weather-box">
      <div className="location-name">{weather?.name}</div>
      <h2 className="temperature">{weather?.main.temp}°C / {(weather?.main.temp * 9/5 + 32).toFixed(2)}°F</h2>
      {iconUrl && <img src={iconUrl} alt="weather icon" />}
      <h3 className="weather-description">{getKoreanDescription(weather?.weather[0].description)}</h3>
    </div>
  )
}

export default WeatherBox
