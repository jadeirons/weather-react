import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  if (unit === "celsius") {
    return (
      <span className="current-temperature">{Math.round(props.celsius)}</span>
    );
  } else {
    return "F";
  }
}
