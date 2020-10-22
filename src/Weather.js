import React from 'react';
import './Weather.css';

export default function Weather () {
  return (
    <div className="weather">
      <form className="search">
        <input  type="search" placeholder="Enter A City"
        className="formControl" />
        <input type ="submit" value="Search" className="btn btn-dark"/>
      </form>
      <div className="row">
      <h1 className="cityHeader">New York, NY
      </h1>
      <img className="icon col-2" scr="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Weather Icon"/>
      </div>
      <div className="currentTemp"><span className="currentTempNum">57</span> 
        <span>°F</span>
      </div>
      <div className="weatherDescription">Mostly Cloudy
      </div>
      
      <table className="weatherInfo">
        <tr>
          <td className="tableCategory hi">
          Hi
          </td>
          <td className="tableCategory low">
          Low
          </td>
          <td className="tableCategory wind">
          Wind
          </td>
          <td className="tableCategory humid">
          Humidity
          </td>
          <td className="tableCategory precip">
          Precipitation
          </td>
        </tr>
        <tr className="row">
          <td className= "info tempHi">
          <span className="hiNumber">81</span>°F
          </td>
          <td className="info tempLow">
          <span className="lowNumber">52</span>°F
          </td>
          <td className="info wind">
          <span className="windNumber">7</span>mph
          </td>
          <td className="info humidity">
          <span className="humidNumber">77</span>%
          </td>
          <td className= "info precipitation">
          <span className="precipNumber">16</span>%
          </td>
        </tr>
      </table>

    </div>

  );
}