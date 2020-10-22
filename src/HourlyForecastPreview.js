import React from "react";
import DescriptionIcon from './DescriptionIcon';

export default function HourlyForecastPreview(props) {
  function hours() {
    let date= new Date(props.data.dt * 1000);
    let hours= date.getHours();
    return `${hours}:00`;
  }

  function temp() {
    let temp= Math.round(props.data.main.temp)
    return `${temp}°F`
  }
  return (
        <div className="col">
          {hours()}
          <DescriptionIcon code={props.data.weather[0].icon}/>
          {temp()}
        </div>

  )
}