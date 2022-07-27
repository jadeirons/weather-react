import React from "react";

export default function WeatherData(props) {
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
              <div className="time-and-date">
                <span className="time">
                  {props.timeDate.hours}:{props.timeDate.minutes} |{" "}
                </span>
                <span className="date">
                  {props.timeDate.day}, {props.timeDate.month}{" "}
                  {props.timeDate.date}, {props.timeDate.year}
                </span>
              </div>

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
}