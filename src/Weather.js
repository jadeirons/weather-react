import "./Styles.css";

export default function Search() {
  return (
    <div class="Main">
      <img class="weather-image" src="/images/cloudy.png" alt="cloudy" />

      <div class="weather-section">
        <div class="row">
          <div class="col-12">
            <h1>Weather in Toronto, CA</h1>
            <h2>It's 8:15am on Tuesday, July 21, 2022</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <span class="current-temperature">
              <i id="icon" class="fa-solid fa-cloud"></i> 24
              <span class="unit">°C</span>
            </span>
          </div>

          <div class="col-4">
            <div class="high-low">
              <div class="current-high">
                HIGH: <span id="current-high">33</span>°C
              </div>
              LOW: <span id="current-low">21</span>°C
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-4 weather-detail one">
            <p>
              Feels like: <div class="weather-stat">26°C</div>
            </p>
          </div>

          <div class="col-4 weather-detail two">
            <p>
              Humidity: <div class="weather-stat">50%</div>
            </p>
          </div>
          <div class="col-4 weather-detail three">
            <p>
              Wind: <div class="weather-stat">6km/hr</div>
            </p>
          </div>
        </div>
      </div>
      <div class="container"></div>
      <div class="current-state" id="current-state"></div>

      <span id="forecast"></span>
    </div>
  );
}
