import React, { useState } from "react";
import axios from "axios";

export default function ForecastDayTitle(props) {
  const [loaded, setLoaded] = useState(false);
  const [timeDate, setTimeDate] = useState(null);
  let lat = props.lat;
  let lon = props.lon;
  let now = new Date(timeDate);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  function handleTimeDateResponse(response) {
    setTimeDate(response.data.date_time);
    setLoaded(true);
  }

  function load() {
    let apiKey = "7ad2b873cae54adc90035c81c86bc039";
    let timeApi = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${lat}&long=${lon}`;
    axios.get(timeApi).then(handleTimeDateResponse);
  }

  if (loaded) {
    return <div className="row forecast-day">{day}</div>;
  } else {
    load();
  }
}
