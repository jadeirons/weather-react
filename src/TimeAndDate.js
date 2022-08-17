import React from "react";

export default function TimeAndDate(props) {
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
  let hours = props.date.getHours().padStart(2, "0");
  let minutes = props.date.getMinutes().padStart(2, "0");
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let year = props.date.getFullYear();

  return (
    <div className="time-and-date">
      {hours}:{minutes} | {day}, {month} {date}, {year}
    </div>
  );
}
