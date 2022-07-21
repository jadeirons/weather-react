import "./Styles.css";

export default function Search() {
  return (
    <div class="Box Main">
      <img class="header-image" src="/images/sunny.jpg" alt="sunny" />

      <div class="weather-test">
        <div class="row">
          <div class="col-4 current-icon">
            <i id="icon" class="fa-solid fa-cloud"></i>
          </div>

          <div class="col-4 current-temperature">
            <span>24</span>
            <span class="unit">°C</span>
          </div>

          <div class="col-4 city">
            <h2>Toronto</h2>
            <h3>Cloudy</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="high-low">
              <span class="current-high">
                HIGH: <span id="current-high"></span>°C
              </span>{" "}
              | LOW: <span id="current-low"></span>°C
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <p>
              {" "}
              Feels like: <span id="feels-like">26</span>°C
            </p>
          </div>

          <div class="col-4">
            <p>
              Humidity: <span id="humidity">50</span>%
            </p>
          </div>
          <div class="col-4">
            <p>
              Wind: <span id="wind">6</span>km/hr
            </p>
          </div>
        </div>
      </div>
      <div class="container"></div>
      <div class="current-state" id="current-state"></div>

      <hr />
      <span id="forecast"></span>
    </div>
  );
}
