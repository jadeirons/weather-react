import axios from "axios";
import React, { useState } from "react";
import TimeAndDate from "./TimeAndDate";
import "./styles/Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    console.log(response);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="title-section">
          <div className="row">
            <h1>
              Weather in {weatherData.city}, {weatherData.country}
            </h1>
          </div>
        </div>

        <div className="unit-section">
          <button className="celsius active-unit">°C</button>
          <button className="fahrenheit">°F</button>
        </div>

        <div className="row weather-section">
          <div className="col-4">
            <img
              className="weather-image"
              src="/images/cloudy.png"
              alt="cloudy"
            />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-8 current-center">
                <TimeAndDate lat="-36.8667" lon="174.7667" />
                <span className="current-temperature">
                  <i className="fa-solid fa-cloud"></i> {weatherData.temp}
                  <span className="current-unit">°C</span>
                </span>
                <div className="current-description text-capitalize">
                  {weatherData.description}
                </div>
                <div className="high-low">
                  <span className="temperature-high">{weatherData.high}°C</span>
                  <span> | {weatherData.low}</span>°C
                </div>
              </div>

              <div className="col-4 current-right">
                <div className="weather-detail">
                  Feels like:{" "}
                  <div className="weather-stat">{weatherData.feelsLike}°C</div>
                </div>
                <div className="weather-detail">
                  Humidity:{" "}
                  <div className="weather-stat">{weatherData.humidity}%</div>
                </div>
                <div className="weather-detail">
                  Wind:{" "}
                  <div className="weather-stat">{weatherData.wind}km/hr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1979bc82187db3756ece8eeb6f265da0";
    const city = props.defaultCity;
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
