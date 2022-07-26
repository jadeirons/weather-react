import React, { useState } from "react";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import "./styles/Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState("Toronto");
  const [timeDate, setTimeDate] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [lat, setLat] = useState(43.65107);
  const [lon, setLon] = useState(-79.347015);

  function search() {
    const apiKey = "1979bc82187db3756ece8eeb6f265da0";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleWeatherResponse);
  }

  function formatTimeDate(localTime) {
    const now = new Date(localTime.data.date_time);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    setTimeDate({
      ready: true,
      hours: String(now.getHours()).padStart(2, "0"),
      minutes: String(now.getMinutes()).padStart(2, "0"),
      day: days[now.getDay()],
      month: months[now.getMonth()],
      date: now.getDate(),
      year: now.getFullYear(),
    });

    console.log(timeDate);
  }

  function getTime() {
    let apiKey = "7ad2b873cae54adc90035c81c86bc039";
    let timeApi = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${lat}&long=${lon}`;
    axios.get(timeApi).then(formatTimeDate);
  }

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
    });

    setLat(response.data.coord.lat);
    setLon(response.data.coord.lon);
    getTime(response);
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
          <WeatherData weatherData={weatherData} timeDate={timeDate} />
          <Forecast />;
        </div>
      </div>
    );
  } else {
    search();
    getTime();
    return "Loading....";
  }
}
