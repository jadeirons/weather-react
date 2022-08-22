import React from "react";

export default function TimeAndDate(props) {
  const now = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
  return (
    <div className="time-and-date">
      {hours}:{minutes} | {day}, {month} {date}
    </div>
  );
}
