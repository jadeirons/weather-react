import React from "react";

export default function Forecast() {
  return (
    <div className="row forecast-section">
      <div className="forecast-box col-2 one">
        <div className="row">
          <p className="forecast day">Monday</p>
        </div>
        <div className="row">
          <i className="fa-solid fa-cloud forecast-icon"></i>
        </div>
        <div className="row">
          <div className="forecast-high-low">
            <span className="temperature-high">33°C</span> | 21°C
          </div>
        </div>
      </div>
      <div className="forecast-box col-2 two">
        <div className="row">
          <p className="forecast day">Tuesday</p>
        </div>
        <div className="row">
          <i className="fa-solid fa-cloud forecast-icon"></i>
        </div>
        <div className="row">
          <div className="forecast-high-low">
            <span className="temperature-high">33°C</span> | 21°C
          </div>
        </div>
      </div>
      <div className="forecast-box col-2 three">
        <div className="row">
          <p className="forecast day">Wednesday</p>
        </div>
        <div className="row">
          <i className="fa-solid fa-cloud forecast-icon"></i>
        </div>
        <div className="row">
          <div className="forecast-high-low">
            <span className="temperature-high">33°C</span> | 21°C
          </div>
        </div>
      </div>
      <div className="forecast-box col-2 four">
        <div className="row">
          <p className="forecast day">Thursday</p>
        </div>
        <div className="row">
          <i className="fa-solid fa-cloud forecast-icon"></i>
        </div>
        <div className="row">
          <div className="forecast-high-low">
            <span className="temperature-high">33°C</span> | 21°C
          </div>
        </div>
      </div>
      <div className="forecast-box col-2 five">
        <div className="row">
          <p className="forecast day">Friday</p>
        </div>
        <div className="row">
          <i className="fa-solid fa-cloud forecast-icon"></i>
        </div>
        <div className="row">
          <div className="forecast-high-low">
            <span className="temperature-high">33°C</span> | 21°C
          </div>
        </div>
      </div>
    </div>
  );
}
