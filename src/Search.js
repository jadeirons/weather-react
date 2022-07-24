import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "./styles/Search.css";
import "./styles/App.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const apiKey = "1979bc82187db3756ece8eeb6f265da0";
  const unit = "metric";

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateSearchCity(event) {
    setCity(event.target.value);
    alert(city);
  }

  return (
    <div className="Search">
      <form className="search-form">
        <input
          type="search"
          className="search-input"
          placeholder="Search for a city..."
          onChange={updateSearchCity}
        />
        <input
          type="submit"
          value="Search"
          className="search-button"
          onClick={handleSubmit}
        />
      </form>

      <div className="box">
        <Weather />
        <Forecast />;
      </div>
    </div>
  );
}
