import React, {useState} from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("farenheit");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius")
  }

  if (unit === "farenheit") {
  return (
    <div className="currentTemperature">
      <div className="current"><span className="currentTemp">{props.farenheit}</span> 
        <span className="unit">°F | <a href="/" onClick={convertToCelsius}>°C</a></span>
      </div>
    </div>
  );
  } else {
    let celsius= ((props.farenheit - 32) * 5/9); 
    return (
      <div className="currentTemperature">
      <div className="current"><span className="currentTemp">{Math.round(celsius)}</span> 
        <span className="unit"><a href="/" onClick={showFarenheit}>°F</a> | °C</span>
      </div>
    </div>
    )
  }
}

