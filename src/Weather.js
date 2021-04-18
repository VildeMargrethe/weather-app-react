import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="clearfix weather-temperature">
      <img src="" alt="Clear" id="weather-icon" className="float-left" />
      <span className="temperature" id="temperature"></span>
      <span className="units">
        <a href="#" id="celsius-link" className="active">
          {" "}
          °C{" "}
        </a>
        |{" "}
        <a href="#" id="fahrenheit-link">
          °F{" "}
        </a>
      </span>
    </div>
  );
}
