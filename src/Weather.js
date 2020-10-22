import React, {useState} from 'react';
import FormattedDate from "./FormattedDate";
import axios from "axios";
import './Weather.css';


export default function Weather (props) {
  const [forecast, setForecast]= useState ({ready: false});

  function handleResponse(response) {
    setForecast({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      iconUrl: "//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      feels: Math.round(response.data.main.feels_like),
      hiTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity
    })
  }


  if (forecast.ready){
  return (
    <div className="weather">
      <form className="search">
        <input  type="search" placeholder="Enter A City"
        className="formControl" />
        <input type ="submit" value="Search" className="btn btn-dark"/>
      </form>
      <h1 className="cityHeader">{props.defaultCity}
      </h1>
      <h3 className="date"><FormattedDate date={forecast.date} /></h3>
      <div className="currentContainer row">
       <img className="icon col-5" src={forecast.iconUrl} alt={forecast.description}/>
      <div className="current"><span className="currentTemp">{forecast.temperature}</span> 
        <span>°F</span><br /><span className="weatherDescription text-capitalize">{forecast.description} </span>
      </div>
     
       </div>
      
      <table className="weatherInfo">
        <tr>
          <td className="tableCategory feelsCater">
          Feels Like
          </td>
          <td className="tableCategory hiCater">
          Hi
          </td>
          <td className="tableCategory lowCater">
          Low
          </td>
        </tr>
        <tr>
          <td className= "info feelsLike">
          <span className="feelNumber">{forecast.feels}</span>°F
          </td>
          <td className= "info tempHiInfo">
          <span className="hiNumber">{forecast.hiTemp}</span>°F
          </td>
          <td className="info tempLowInfo">
          <span className="lowNumber">{forecast.lowTemp}</span>°F
          </td>
        </tr>
        <tr>
          <td className="tableCategory windCater">
          Wind
          </td>
          <td className="tableCategory humidCater">
          Humidity
          </td>
        </tr>
        <tr>
          <td className="info windInfo">
          <span className="windNumber">{forecast.wind}{" "}</span><span className="windMeasure">mph</span>
          </td>
          <td className="info humidityInfo">
          <span className="humidNumber">{forecast.humidity}</span>%
          </td>
        </tr>
      </table>

    </div>

  );
  } else {
  let units = "imperial";
  let apiKey = "1b9a19801a7a96280358cc2498e9820b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return "Check Back Later"
  }
}