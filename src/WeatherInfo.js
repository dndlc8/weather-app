import React from "react";
import FormattedDate from "./FormattedDate";
import DescriptionIcon from './DescriptionIcon';

export default function WeatherInfo(props) {
  return (
  <div className="weatherInfo">
  
      <h3 className="date"><FormattedDate date={props.data.date} /></h3>
      <h1 className="cityHeader">{props.data.city}
      </h1>
      <div className="currentContainer row">
       <DescriptionIcon code={props.data.icon}  alt={props.data.description}/>
      <div className="current"><span className="currentTemp">{props.data.temperature}</span> 
        <span>°F</span><br /><span className="weatherDescription text-capitalize">{props.data.description} </span>
      </div>
     
       </div>
      
      <table className="weatherInfo">
        <tbody>
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
          <span className="feelNumber">{props.data.feels}</span>°F
          </td>
          <td className= "info tempHiInfo">
          <span className="hiNumber">{props.data.hiTemp}</span>°F
          </td>
          <td className="info tempLowInfo">
          <span className="lowNumber">{props.data.lowTemp}</span>°F
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
          <span className="windNumber">{props.data.wind}{" "}</span><span className="windMeasure">mph</span>
          </td>
          <td className="info humidityInfo">
          <span className="humidNumber">{props.data.humidity}</span>%
          </td>
        </tr>
        </tbody>
      </table>
      </div>
  );
}