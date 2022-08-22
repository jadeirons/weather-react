import React from "react";
import WeatherImage from "./WeatherImage";
import TimeAndDate from "./TimeAndDate";
import CurrentWeather from "./CurrentWeather";

export default function WeatherData(props) {
  return (
    <div className="Weather">
      <div className="title-section">
        <div className="row">
          <h1>
            Weather in {props.weatherData.city}, {props.weatherData.country}
          </h1>
          <TimeAndDate
            timezone={props.weatherData.timezone}
            timestamp={props.weatherData.timestamp}
          />
        </div>
      </div>

      <div className="row weather-section">
        <div className="col-4">
          <WeatherImage
            iconCode={props.weatherData.icon}
            temp={props.weatherData.temp}
          />
        </div>

        <CurrentWeather
          icon={props.weatherData.icon}
          temp={props.weatherData.temp}
          high={props.weatherData.high}
          low={props.weatherData.low}
          feelsLike={props.weatherData.feelsLike}
          description={props.weatherData.description}
          humidity={props.weatherData.humidity}
          wind={props.weatherData.wind}
        />
      </div>
    </div>
  );
}
