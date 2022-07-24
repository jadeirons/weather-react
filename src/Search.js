import React from "react";
import "./styles/Search.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function Search() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("hello");
  }

  function updateCity(event) {
    console.log(event.target.value);
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
        <input type="submit" value="Search" className="search-button" />
      </form>
      <div className="box">
        <Weather city="city" />
        <Forecast />
      </div>
    </div>
  );
}
