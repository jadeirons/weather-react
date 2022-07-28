import React from "react";

export default function WeatherIcon(props) {
  if (props.iconCode === "01d") {
    return <i className="fa-solid fa-sun"></i>;
  }
  if (props.iconCode === "02d") {
    return <i className="fa-solid fa-cloud-sun"></i>;
  }
  if (props.iconCode === "03d") {
    return <i className="fa-solid fa-cloud"></i>;
  }
  if (props.iconCode === "03n") {
    return <i className="fa-solid fa-cloud"></i>;
  }
  if (props.iconCode === "04d") {
    return <i className="fa-solid fa-cloud"></i>;
  }
  if (props.iconCode === "04n") {
    return <i className="fa-solid fa-cloud"></i>;
  }
  if (props.iconCode === "09d") {
    return <i className="fa-solid fa-cloud-rain"></i>;
  }
  if (props.iconCode === "09n") {
    return <i className="fa-solid fa-cloud-rain"></i>;
  }
  if (props.iconCode === "10d") {
    return <i className="fa-solid fa-cloud-showers-heavy"></i>;
  }
  if (props.iconCode === "10n") {
    return <i className="fa-solid fa-cloud-showers-heavy"></i>;
  }
  if (props.iconCode === "11d") {
    return <i className="fa-solid fa-cloud-bolt"></i>;
  }
  if (props.iconCode === "11n") {
    return <i className="fa-solid fa-cloud-bolt"></i>;
  }
  if (props.iconCode === "13d") {
    return <i className="fa-solid fa-snowflake"></i>;
  }
  if (props.iconCode === "13n") {
    return <i className="fa-solid fa-snowflake"></i>;
  }
  if (props.iconCode === "50d") {
    return <i className="fa-solid fa-smog"></i>;
  }
  if (props.iconCode === "50n") {
    return <i className="fa-solid fa-smog"></i>;
  }
  if (props.iconCode === "01n") {
    return <i className="fa-solid fa-moon"></i>;
  }
  if (props.iconCode === "02n") {
    return <i className="fa-solid fa-cloud-moon"></i>;
  }
  if (props.iconCode === "50n") {
    return <i className="fa-solid fa-cloud-moon"></i>;
  }
}
