import "./Styles.css";

export default function Search() {
  return (
    <div>
      <div class="title-section">
        <div class="row">
          <div class="col-12">
            <h1>Weather in Toronto, CA</h1>
            <h2>It's 8:15am on Tuesday, July 21, 2022</h2>
          </div>
        </div>
      </div>

      <div class="unit-section">
        <button class="celsius active-unit">°C</button>
        <button class="fahrenheit">°F</button>
      </div>

      <div class="row weather-section">
        <div class="col-7 main-weather">
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

        <div class="col-5">
          <img class="weather-image" src="/images/cloudy.png" alt="cloudy" />
        </div>
      </div>
    </div>
  );
}
