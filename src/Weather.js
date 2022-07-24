import "./styles/Weather.css";
import axios from "axios";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="title-section">
        <div className="row">
          <h1>Weather in {props.city}, CA</h1>
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
              <div class="time-and-date">
                <span className="time">8:15am | </span>
                <span className="date">Tuesday, July 21, 2022</span>
              </div>
              <span className="current-temperature">
                <i className="fa-solid fa-cloud"></i> 24
                <span className="current-unit">°C</span>
              </span>
              <div className="current-description">Cloudy</div>
              <div className="high-low">
                <span className="temperature-high">33°C</span>
                <span> | 21</span>°C
              </div>
            </div>

            <div className="col-4 current-right">
              <div className="weather-detail">
                Feels like: <div className="weather-stat">26°C</div>
              </div>
              <div className="weather-detail">
                Humidity: <div className="weather-stat">50%</div>
              </div>
              <div className="weather-detail">
                Wind: <div className="weather-stat">6km/hr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
