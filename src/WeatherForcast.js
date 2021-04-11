import React from "react";
import "./WeatherForcast.css";

export default function WeatherForcast() {
  return (
    <div class="day-card mx-auto mt-3 shadow p-3 mb-5">
      <div class="row weather-forecast" id="weather-forecast"></div>
    </div>
  );
}
