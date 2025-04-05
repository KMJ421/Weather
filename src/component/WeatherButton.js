import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = ({cities, setCity, city}) => {
  console.log("cities?", cities);

  return (
    <div className="button-group">
      <Button variant="secondary" className={city === "" ? "active" : ""} onClick={() => setCity("")}>
        Current Location
      </Button>

      {cities.map((item, index)=>(
        <Button 
        variant="secondary"
        key={index}
        className={city === item ? "active" : ""}
        onClick={()=>setCity(item)}
        >{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton
