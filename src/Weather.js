import "./Styles.css";

export default function Search() {
  return (
    <div class="Box">
      <h1>
        WEATHER IN{" "}
        <span class="city" id="city">
          TORONTO
        </span>
      </h1>
      <h2 id="h2"></h2>
      <div class="container">
        <div class="row">
          <div class="col-4 current-icon">
            <i id="icon" class="fa-solid fa-cloud"></i>
          </div>
          <div class="col-4 current-temperature">
            <span id="current-temp">24</span>
            <span class="unit">°C</span>
          </div>
          <div class="col-4 current-details">
            <ul>
              <li>
                Feels like: <span id="feels-like">26</span>°C
              </li>
              <li>
                Humidity: <span id="humidity">50</span>%
              </li>
              <li>
                Wind: <span id="wind">6</span>km/hr
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="current-state" id="current-state"></div>
      <div class="high-low">
        <span class="current-high">
          HIGH: <span id="current-high"></span>°C
        </span>{" "}
        | LOW: <span id="current-low"></span>°C
      </div>
      <hr />
      <span id="forecast"></span>
    </div>
  );
}
