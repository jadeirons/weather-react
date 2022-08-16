import React from "react";

export default function TimeAndDate(props) {
  return (
    <div className="time-and-date">
      <span className="time">
        {props.hours}:{props.minutes} |{" "}
      </span>
      <span className="date">
        {props.day}, {props.month} {props.date}, {props.year}
      </span>
    </div>
  );
}



///////////


   setTimeDate({
      ready: true,
      hours: String(now.getHours()).padStart(2, "0"),
      minutes: String(now.getMinutes()).padStart(2, "0"),
      day: days[now.getDay()],
      month: months[now.getMonth()],
      date: now.getDate(),
      year: now.getFullYear(),
    });
    console.log(timeDate);
  }

  function getTime(props) {
    let apiKey = "7ad2b873cae54adc90035c81c86bc039";
    let timeApi = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${lat}&long=${lon}`;
    axios.get(timeApi).then(formatTimeDate);
  }