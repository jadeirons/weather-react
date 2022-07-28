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
