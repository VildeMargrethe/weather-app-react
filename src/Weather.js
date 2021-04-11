import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div class="clearfix weather-temperature">
      <img src="" alt="Clear" id="weather-icon" class="float-left" />
      <span class="temperature" id="temperature"></span>
      <span class="units">
        <a href="#" id="celsius-link" class="active">
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
