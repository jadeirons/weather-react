import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  let maxTemp = Math.round(props.data.temp.max);
  let minTemp = Math.round(props.data.temp.min);

  function day() {
    const now = new Date(props.data.dt * 1000);
    let day = now.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="row forecast-day">{day()}</div>
      <div className="row forecast-icon">
        <WeatherIcon iconCode={props.data.weather[0].icon} />
      </div>
      <div className="row">
        <div className="forecast-high-low">
          <span className="temperature-high">{maxTemp}°</span> | {minTemp}°
        </div>
      </div>
    </div>
  );
}
