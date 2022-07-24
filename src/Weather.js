import axios from "axios";
import React, { useState } from "react";
import WeatherData from "./WeatherData";
import "./styles/Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const searchCity = props.city;

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
  }

  if (weatherData.ready) {
    return <WeatherData weatherData={weatherData} />;
  } else {
    const apiKey = "1979bc82187db3756ece8eeb6f265da0";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
