import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = () => {
  return (
    <div className="button-group">
      <Button variant="secondary">Current Location</Button>
      <Button variant="secondary">Thailand</Button>
      <Button variant="secondary">Taiwan</Button>
    </div>
  )
}

export default WeatherButton
