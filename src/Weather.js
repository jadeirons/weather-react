import "./Styles.css";

export default function Search() {
  return (
    <div class="Main">
      <img class="weather-image" src="/images/cloudy.png" alt="cloudy" />

      <div class="weather-section">
        <div class="row">
          <div class="col-12">
            <h1>Toronto, CA</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <span class="current-icon">
              <i id="icon" class="fa-solid fa-cloud"></i>
            </span>
          </div>

          <div class="col-4 current-temperature">
            <span>24</span>
            <span class="unit">°C</span>
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
              Feels like: <div id="feels-like">26°C</div>
            </p>
          </div>

          <div class="col-4 weather-detail two">
            <p>
              Humidity: <div id="humidity">50%</div>
            </p>
          </div>
          <div class="col-4 weather-detail three">
            <p>
              Wind: <div id="wind">6km/hr</div>
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
