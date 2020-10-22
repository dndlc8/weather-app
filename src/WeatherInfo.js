import React from "react";
import FormattedDate from "./FormattedDate";
import DescriptionIcon from './DescriptionIcon';
import CurrentTemperature from "./CurrentTemperature";

export default function WeatherInfo(props) {
  return (
  <div className="weatherInfo">
  
      <h3 className="date"><FormattedDate date={props.data.date} /></h3>
      <h1 className="cityHeader">{props.data.city}
      </h1>
      <div className="currentContainer row">
        <div className="largeIcon col">
       <DescriptionIcon code={props.data.icon}  alt={props.data.description} />
       <div>
         
       <CurrentTemperature farenheit={props.data.temperature} />
        <div className="weatherDescription text-capitalize col">{props.data.description} </div>
        </div>
       </div>
       </div>
      

      <div className="todayWeatherInfo">
        <div className="todayInfo">
          <div className="tableCategory">
          Feels Like
          </div>
          <div className= "info">
          <span className="feelNumber">{props.data.feels}</span>°F
          </div>
        </div>
        <div className="todayInfo">
            <div className="tableCategory">
              Hi
            </div>
            <div className= "info">
              <span className="hiNumber">{props.data.hiTemp}</span>°F
            </div>
        </div>
        <div className="todayInfo">
          <div className="tableCategory">
            Low
          </div>
          <div className="info">
            <span className="lowNumber">{props.data.lowTemp}</span>°F
          </div>
        </div>
        <div className="todayInfo">
          <div className="tableCategory">
            Wind
          </div>
          <div className="info">
          <span className="windNumber">{props.data.wind}{" "}</span><span className="windMeasure">mph</span>
          </div>
        </div>
        <div className="todayInfo">
          <div className="tableCategory">
            Humidity
          </div>
          <div className="info">
            <span className="humidNumber">{props.data.humidity}</span>%
          </div>
        </div>
      </div>


      </div>
  );
}