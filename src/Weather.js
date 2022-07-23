import "./Styles.css";

export default function Search() {
  return (
    <div>
      <div class="title-section">
        <div class="row title-text">
          <h1>Weather in Toronto, CA</h1>
          <h2>It's 8:15am on Tuesday, July 21, 2022</h2>
        </div>
      </div>

      <div class="unit-section">
        <button class="celsius active-unit">°C</button>
        <button class="fahrenheit">°F</button>
      </div>

      <div class="row weather-section">
        <div class="col-4">
          <img class="weather-image" src="/images/cloudy.png" alt="cloudy" />
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-8 current-center">
              <span class="current-temperature">
                <i class="fa-solid fa-cloud"></i> 24
                <span class="current-unit">°C</span>
              </span>
              <div class="current-description">Cloudy</div>
              <div class="high-low">
                <span class="temperature-high">33°C</span>
                <span> | 21</span>°C
              </div>
            </div>

            <div class="col-4 current-right">
              <div class="weather-detail">
                <p>
                  Feels like: <div class="weather-stat">26°C</div>
                </p>
              </div>
              <div class="weather-detail">
                <p>
                  Humidity: <div class="weather-stat">50%</div>
                </p>
              </div>
              <div class="weather-detail">
                <p>
                  Wind: <div class="weather-stat">6km/hr</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
