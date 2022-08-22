import React from "react";
import "./styles/Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row forecast-section">
        <div className="forecast-box col-2 one">
          <div className="row forecast-day">Monday</div>
          <div className="row">
            <i className="fa-solid fa-cloud forecast-icon"></i>
          </div>
          <div className="row">
            <div className="forecast-high-low">
              <span className="temperature-high">33°</span> | 21°
            </div>
          </div>
        </div>
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
}
