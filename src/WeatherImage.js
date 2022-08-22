import React from "react";

export default function WeatherImage(props) {
  if (props.iconCode === "01d" && props.temp >= 0) {
    return (
      <img className="weather-image" src="/images/sunny.png" alt="Clear" />
    );
  }
  if (props.iconCode === "01n" && props.temp >= 0) {
    return (
      <img className="weather-image" src="/images/sunny.png" alt="Clear" />
    );
  }
  if (props.iconCode === "01d" && props.temp < 0) {
    return (
      <img
        className="weather-image"
        src="/images/winter-clear.png"
        alt="Clear"
      />
    );
  }
  if (props.iconCode === "01n" && props.temp < 0) {
    return (
      <img
        className="weather-image"
        src="/images/winter-clear.png"
        alt="Clear"
      />
    );
  }

  if (props.iconCode === "02d" && props.temp >= 0) {
    return (
      <img className="weather-image" src="/images/cloudy.png" alt="Cloudy" />
    );
  }
  if (props.iconCode === "02d" && props.temp < 0) {
    return (
      <img
        className="weather-image"
        src="/images/winter-clear.png"
        alt="Cloudy"
      />
    );
  }

  if (props.iconCode === "02n" && props.temp >= 0) {
    return (
      <img className="weather-image" src="/images/cloudy.png" alt="Cloudy" />
    );
  }
  if (props.iconCode === "02n" && props.temp < 0) {
    return (
      <img
        className="weather-image"
        src="/images/winter-clear.png"
        alt="Cloudy"
      />
    );
  }

  if (props.iconCode === "03d" && props.temp >= 0) {
    return (
      <img className="weather-image" src="/images/cloudy.png" alt="Cloudy" />
    );
  }
  if (props.iconCode === "03d" && props.temp < 0) {
    return (
      <img
        className="weather-image"
        src="/images/winter-clear.png"
        alt="Cloudy"
      />
    );
  }

  if (props.iconCode === "03n" && props.temp >= 0) {
    return (
      <img className="weather-image" src="/images/cloudy.png" alt="Cloudy" />
    );
  }
  if (props.iconCode === "03n" && props.temp < 0) {
    return (
      <img
        className="weather-image"
        src="/images/winter-clear.png"
        alt="Cloudy"
      />
    );
  }

  if (props.iconCode === "04d" && props.temp >= 0) {
    return (
      <img className="weather-image" src="/images/cloudy.png" alt="Cloudy" />
    );
  }
  if (props.iconCode === "04d" && props.temp < 0) {
    return (
      <img
        className="weather-image"
        src="/images/winter-clear.png"
        alt="Cloudy"
      />
    );
  }

  if (props.iconCode === "04n" && props.temp >= 0) {
    return (
      <img className="weather-image" src="/images/cloudy.png" alt="Cloudy" />
    );
  }
  if (props.iconCode === "04n" && props.temp < 0) {
    return (
      <img
        className="weather-image"
        src="/images/winter-clear.png"
        alt="Cloudy"
      />
    );
  }

  if (props.iconCode === "09d") {
    return <img className="weather-image" src="/images/rainy.png" alt="Rain" />;
  }
  if (props.iconCode === "09n") {
    return <img className="weather-image" src="/images/rainy.png" alt="Rain" />;
  }
  if (props.iconCode === "10d") {
    return <img className="weather-image" src="/images/rainy.png" alt="Rain" />;
  }
  if (props.iconCode === "10n") {
    return <img className="weather-image" src="/images/rainy.png" alt="Rain" />;
  }
  if (props.iconCode === "11d") {
    return (
      <img
        className="weather-image"
        src="/images/thunderstorms.png"
        alt="Thunderstorm"
      />
    );
  }
  if (props.iconCode === "11n") {
    return (
      <img
        className="weather-image"
        src="/images/thunderstorms.png"
        alt="Thunderstorm"
      />
    );
  }
  if (props.iconCode === "13d") {
    return <img className="weather-image" src="/images/snow.png" alt="Snow" />;
  }
  if (props.iconCode === "13n") {
    return <img className="weather-image" src="/images/snow.png" alt="Snow" />;
  }

  if (props.iconCode === "50d" && props.temp >= 0) {
    return (
      <img className="weather-image" src="/images/cloudy.png" alt="Smog" />
    );
  }
  if (props.iconCode === "50d" && props.temp < 0) {
    return (
      <img
        className="weather-image"
        src="/images/winter-clear.png"
        alt="Smog"
      />
    );
  }

  if (props.iconCode === "50n" && props.temp >= 0) {
    return (
      <img className="weather-image" src="/images/cloudy.png" alt="Smog" />
    );
  }
  if (props.iconCode === "50n" && props.temp < 0) {
    return (
      <img
        className="weather-image"
        src="/images/winter-clear.png"
        alt="Smog"
      />
    );
  }
}
