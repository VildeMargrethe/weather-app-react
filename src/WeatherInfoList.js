import React from "react";
import "./WeatherInfoList.css";

export default function WeatherInfoList() {
  return (
    <ul class="weather-info-list">
      <li>
        <p>
          Humidity: <span id="humidity"></span>%
        </p>
      </li>
      <li>
        <p>
          Wind: <span id="wind"></span> km/h
        </p>
      </li>
    </ul>
  );
}
