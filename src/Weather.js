import React, { useState } from "react";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import "./styles/Weather.css";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("Toronto");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function updateSearchCity(event) {
    setCity(event.target.value);
  }

  function handleWeatherResponse(response) {
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
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
    console.log(response);
    console.log(new Date(response.data.dt * 1000));
  }

  function search() {
    const weatherApiKey = "1979bc82187db3756ece8eeb6f265da0";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleWeatherResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input"
            placeholder="Search for a city..."
            onChange={updateSearchCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>

        <div className="box">
          <WeatherData weatherData={weatherData} />
          <Forecast />
        </div>
      </div>
    );
  } else {
    search();
  }
}
