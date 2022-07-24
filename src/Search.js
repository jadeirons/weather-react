import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./styles/Search.css";
import "./styles/App.css";

export default function Search() {
  let city = "";

  function handleSubmit(event) {
    event.preventDefault();
    console.log(city);
  }

  function updateSearchCity(event) {
    city = event.target.value;
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
        <Weather defaultCity="Auckland" />
        <Forecast />;
      </div>
    </div>
  );
}
