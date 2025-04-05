import {useCallback, useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities=['taipei', 'bangkok', 'tokyo', 'seoul']
  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }, []);

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0bbe61974a6329d0b9a5524334656229&units=metric`;
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false)
  };

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bbe61974a6329d0b9a5524334656229&units=metric`;
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  useEffect(() => {
    if(city==""){
      getCurrentLocation()
    }
    else{
      getWeatherByCity();
    }
  }, [city])


  return (
    <div>
      {loading?
      (<div className="container"><ClipLoader color= '#ff8c6b' loading={loading} size={150} /></div>)
      :
      (<div className="container">
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity} city={city}/>
      </div>)
      }
    </div>
  );
}

export default App;
