import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "./styles/Search.css";
import "./styles/App.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [ready, setReady] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setReady(true);
    console.log(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form className="search-form">
        <input
          type="search"
          className="search-input"
          placeholder="Search for a city..."
          onChange={updateCity}
        />
        <input
          type="submit"
          value="Search"
          className="search-button"
          onClick={handleSubmit}
        />
      </form>

      <div className="box">
        <Weather city={city} ready={ready} />
        <Forecast />
      </div>
    </div>
  );
}
