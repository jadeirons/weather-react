import React from "react";

export default function Forecast() {
  return (
    <div class="row forecast-section">
      <div class="forecast-box col-2 one">
        <div class="row">
          <p class="forecast day">Monday</p>
        </div>
        <div class="row">
          <i class="fa-solid fa-cloud forecast-icon"></i>
        </div>
        <div class="row">
          <div class="forecast-high-low">
            <span class="temperature-high">33°C</span> | 21°C
          </div>
        </div>
      </div>
      <div class="forecast-box col-2 two">
        <div class="row">
          <p class="forecast day">Tuesday</p>
        </div>
        <div class="row">
          <i class="fa-solid fa-cloud forecast-icon"></i>
        </div>
        <div class="row">
          <div class="forecast-high-low">
            <span class="temperature-high">33°C</span> | 21°C
          </div>
        </div>
      </div>
      <div class="forecast-box col-2 three">
        <div class="row">
          <p class="forecast day">Wednesday</p>
        </div>
        <div class="row">
          <i class="fa-solid fa-cloud forecast-icon"></i>
        </div>
        <div class="row">
          <div class="forecast-high-low">
            <span class="temperature-high">33°C</span> | 21°C
          </div>
        </div>
      </div>
      <div class="forecast-box col-2 four">
        <div class="row">
          <p class="forecast day">Thursday</p>
        </div>
        <div class="row">
          <i class="fa-solid fa-cloud forecast-icon"></i>
        </div>
        <div class="row">
          <div class="forecast-high-low">
            <span class="temperature-high">33°C</span> | 21°C
          </div>
        </div>
      </div>
      <div class="forecast-box col-2 five">
        <div class="row">
          <p class="forecast day">Friday</p>
        </div>
        <div class="row">
          <i class="fa-solid fa-cloud forecast-icon"></i>
        </div>
        <div class="row">
          <div class="forecast-high-low">
            <span class="temperature-high">33°C</span> | 21°C
          </div>
        </div>
      </div>
    </div>
  );
}
