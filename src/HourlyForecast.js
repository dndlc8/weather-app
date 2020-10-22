import React, {useState} from "react";
import HourlyForecastPreview from "./HourlyForecastPreview";
import axios from "axios";
import "./HourlyForecast.css";
;
export default function HourlyForecast(props) {
  const[loaded, setLoaded]= useState(false);
  const[hourForecast, sethourForecast]= useState(null);

  function handleForecastResponse(response) {
    console.log(response.data);
    sethourForecast(response.data);
    setLoaded(true);
  }  
  

  if (loaded && props.city === hourForecast.city.name) {
    return (
      <div className="weatherForecast row">
        <HourlyForecastPreview data={hourForecast.list[0]} />
        <HourlyForecastPreview data={hourForecast.list[1]} />
        <HourlyForecastPreview data={hourForecast.list[2]} />
        <HourlyForecastPreview data={hourForecast.list[3]} />
        <HourlyForecastPreview data={hourForecast.list[4]} />
        <HourlyForecastPreview data={hourForecast.list[5]} />
      </div>
    );
  } else {
  let units = "imperial";
  let apiKey = "1b9a19801a7a96280358cc2498e9820b";
  let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`

  axios.get(apiUrl).then(handleForecastResponse);
  
return null ;
}
}