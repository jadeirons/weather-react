import axios from "axios";
import React, { useState } from "react";
import "./styles/Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(null);
  const [country, setcountry] = useState(null);
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [high, setHigh] = useState(null);
  const [low, setLow] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumdity] = useState(null);
  const [wind, setWind] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setReady(true);
    setCity(response.data.name);
    setcountry(response.data.sys.country);
    setTemp(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].main);
    setHigh(Math.round(response.data.main.temp_max));
    setLow(Math.round(response.data.main.temp_min));
    setFeelsLike(Math.round(response.data.main.feels_like));
    setHumdity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="title-section">
          <div className="row">
            <h1>
              Weather in {city}, {country}
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
                <div className="time-and-date">
                  <span className="time">8:15am | </span>
                  <span className="date">Tuesday, July 21, 2022</span>
                </div>
                <span className="current-temperature">
                  <i className="fa-solid fa-cloud"></i> {temp}
                  <span className="current-unit">°C</span>
                </span>
                <div className="current-description">{description}</div>
                <div className="high-low">
                  <span className="temperature-high">{high}°C</span>
                  <span> | {low}</span>°C
                </div>
              </div>

              <div className="col-4 current-right">
                <div className="weather-detail">
                  Feels like: <div className="weather-stat">{feelsLike}°C</div>
                </div>
                <div className="weather-detail">
                  Humidity: <div className="weather-stat">{humidity}%</div>
                </div>
                <div className="weather-detail">
                  Wind: <div className="weather-stat">{wind}km/hr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1979bc82187db3756ece8eeb6f265da0";
    const city = "London";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
