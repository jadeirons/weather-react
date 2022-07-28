import React, { useState } from "react";
import TimeAndDate from "./TimeAndDate";
import axios from "axios";

export default function WeatherData(props) {
  const [timeDate, setTimeDate] = useState({ ready: false });
  const lat = props.weatherData.lat;
  const lon = props.weatherData.lon;

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
  }

  function getTime(props) {
    let apiKey = "7ad2b873cae54adc90035c81c86bc039";
    let timeApi = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${lat}&long=${lon}`;
    axios.get(timeApi).then(formatTimeDate);
  }

  if (timeDate.false) {
    return (
      <div className="Weather">
        <div className="title-section">
          <div className="row">
            <h1>
              Weather in {props.weatherData.city}, {props.weatherData.country}
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
                <TimeAndDate
                  hours={timeDate.hours}
                  minutes={timeDate.minutes}
                  day={timeDate.day}
                  month={timeDate.month}
                  date={timeDate.date}
                  year={timeDate.year}
                />

                <span className="current-temperature">
                  <i className="fa-solid fa-cloud"></i> {props.weatherData.temp}
                  <span className="current-unit">°C</span>
                </span>
                <div className="current-description text-capitalize">
                  {props.weatherData.description}
                </div>
                <div className="high-low">
                  <span className="temperature-high">
                    {props.weatherData.high}°C
                  </span>
                  <span> | {props.weatherData.low}</span>°C
                </div>
              </div>

              <div className="col-4 current-right">
                <div className="weather-detail">
                  Feels like:{" "}
                  <div className="weather-stat">
                    {props.weatherData.feelsLike}°C
                  </div>
                </div>
                <div className="weather-detail">
                  Humidity:{" "}
                  <div className="weather-stat">
                    {props.weatherData.humidity}%
                  </div>
                </div>
                <div className="weather-detail">
                  Wind:{" "}
                  <div className="weather-stat">
                    {props.weatherData.wind}km/hr
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    getTime();
  }
}
