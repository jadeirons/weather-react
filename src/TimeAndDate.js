import React, { useState } from "react";
import axios from "axios";

export default function TimeAndDate(props) {
  const lat = props.lat;
  const lon = props.lon;
  const [timeDate, setTimeDate] = useState({ ready: false });

  function formatTimeDate(localTime) {
    const now = new Date(localTime.data.date_time);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
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
    setTimeDate({
      ready: true,
      hours: String(now.getHours()).padStart(2, "0"),
      minutes: String(now.getMinutes()).padStart(2, "0"),
      day: days[now.getDay()],
      month: months[now.getMonth()],
      date: now.getDate(),
      year: now.getFullYear(),
    });
  }

  if (timeDate.ready) {
    return (
      <div className="time-and-date">
        <span className="time">
          {timeDate.hours}:{timeDate.minutes} |{" "}
        </span>
        <span className="date">
          {timeDate.day}, {timeDate.month} {timeDate.date}, {timeDate.year}
        </span>
      </div>
    );
  } else {
    let apiKey = "7ad2b873cae54adc90035c81c86bc039";
    let timeApi = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${lat}&long=${lon}`;
    axios.get(timeApi).then(formatTimeDate);
  }
}
