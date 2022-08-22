import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  const [unit, setUnit] = useState("celsius");
  const imperialTemp = Math.round((props.temp * 9) / 5 + 32);
  const imperialHigh = Math.round((props.high * 9) / 5 + 32);
  const imperialLow = Math.round((props.low * 9) / 5 + 32);
  const imperialFeelsLike = Math.round((props.feelsLike * 9) / 5 + 32);
  const imperialWind = Math.round(props.wind / 1.609);

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="col-8">
        <div className="unit-section">
          <button className="celsius " onClick={showCelsius}>
            °C
          </button>
          <button className="fahrenheit active-unit" onClick={showFahrenheit}>
            °F
          </button>
        </div>
        <div className="row">
          <div className="col-8 current-center">
            <span className="current-weather">
              <WeatherIcon iconCode={props.icon} />
              <span className="current-temperature">
                {Math.round(props.temp)}
              </span>

              <span className="current-unit">°C</span>
            </span>
            <div className="current-description text-capitalize">
              {props.description}
            </div>
            <div className="high-low">
              <span className="temperature-high">{props.high}°</span>
              <span> | {props.low}</span>°
            </div>
          </div>

          <div className="col-4 current-right">
            <div className="weather-detail">
              Feels like: <div className="weather-stat">{props.feelsLike}°</div>
            </div>
            <div className="weather-detail">
              Humidity: <div className="weather-stat">{props.humidity}%</div>
            </div>
            <div className="weather-detail">
              Wind: <div className="weather-stat">{props.wind}km/hr</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-8">
        <div className="unit-section">
          <button className="celsius active-unit" onClick={showCelsius}>
            °C
          </button>
          <button className="fahrenheit" onClick={showFahrenheit}>
            °F
          </button>
        </div>
        <div className="row">
          <div className="col-8 current-center">
            <span className="current-weather">
              <WeatherIcon iconCode={props.icon} />
              <span className="current-temperature">{imperialTemp}</span>

              <span className="current-unit">°F</span>
            </span>
            <div className="current-description text-capitalize">
              {props.description}
            </div>
            <div className="high-low">
              <span className="temperature-high">{imperialHigh}°</span>
              <span> | {imperialLow}</span>°
            </div>
          </div>

          <div className="col-4 current-right">
            <div className="weather-detail">
              Feels like:{" "}
              <div className="weather-stat">{imperialFeelsLike}°</div>
            </div>
            <div className="weather-detail">
              Humidity: <div className="weather-stat">{props.humidity}%</div>
            </div>
            <div className="weather-detail">
              Wind: <div className="weather-stat">{imperialWind} mph</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
