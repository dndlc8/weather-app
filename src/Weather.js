import React, {useState} from 'react';
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import './Weather.css';
import HourlyForecast from "./HourlyForecast";


export default function Weather (props) {
  const [forecast, setForecast]= useState ({ready: false});
  const [city, setCity]= useState(props.defaultCity);

  function handleResponse(response) {
    setForecast({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feels: Math.round(response.data.main.feels_like),
      hiTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity
    })
  }

  function search() {
    let units = "imperial";
    let apiKey = "1b9a19801a7a96280358cc2498e9820b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
    }

  function handleChange (event) {
    setCity(event.target.value);
  }
  


  if (forecast.ready){
  return (
    <div className="weather">
      <form className="search" onSubmit={handleSubmit}>
        <input  type="search" placeholder="Enter A City"
        className="formControl" onChange={handleChange} />
        <input type ="submit" value="Search" className="btn btn-dark"/>
      </form>
      <WeatherInfo data={forecast}/>
      <HourlyForecast city={forecast.city}/>

    </div>

  );
  } else {
    search();
  return "Check Back Later"
  }
}