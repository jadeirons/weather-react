import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TimeAndDate(props) {
  const [loaded, setLoaded] = useState(false);
  const [timeDate, setTimeDate] = useState(null);
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
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let month = months[now.getMonth()];
  let date = now.getDate();
  let day = days[now.getDay()];

  useEffect(() => {
    setLoaded(false);
  }, [props.lat]);

  function handleTimeDateResponse(response) {
    setTimeDate(response.data.date_time);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="time-and-date">
        {hours}:{minutes} | {day}, {month} {date}
      </div>
    );
  } else {
    let apiKey = "7ad2b873cae54adc90035c81c86bc039";
    let timeApi = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${props.lat}&long=${props.lon}`;
    axios.get(timeApi).then(handleTimeDateResponse);
  }
}
