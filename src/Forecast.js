import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./styles/Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="row forecast-section">
          <ForecastDay data={forecast[0]} />
          <div className="forecast-box col-2 two">
            <div className="row forecast-day">Tuesday</div>
            <div className="row">
              <i className="fa-solid fa-cloud forecast-icon"></i>
            </div>
            <div className="row">
              <div className="forecast-high">
                <span className="temperature-high">33°</span> | 21°
              </div>
            </div>
          </div>
          <div className="forecast-box col-2 one">
            <div className="row forecast-day">Wednesday</div>
            <div className="row">
              <i className="fa-solid fa-cloud forecast-icon"></i>
            </div>
            <div className="row">
              <div className="forecast-high-low">
                <span className="temperature-high">33°C</span> | 21°
              </div>
            </div>
          </div>
          <div className="forecast-box col-2 two">
            <div className="row forecast-day">Thursday</div>
            <div className="row">
              <i className="fa-solid fa-cloud forecast-icon"></i>
            </div>
            <div className="row">
              <div className="forecast-high-low">
                <span className="temperature-high">33°</span> | 21°
              </div>
            </div>
          </div>
          <div className="forecast-box col-2 one">
            <div className="row forecast-day">Friday</div>
            <div className="row">
              <i className="fa-solid fa-cloud forecast-icon"></i>
            </div>
            <div className="row">
              <div className="forecast-high-low">
                <span className="temperature-high">33°</span> | 21°
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1979bc82187db3756ece8eeb6f265da0";
    const unit = "metric";
    const lat = props.lat;
    const lon = props.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleForecastResponse);
  }
}
