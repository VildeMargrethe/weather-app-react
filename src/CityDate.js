import React from "react";
import "./CityDate.css";

export default function CityDate() {
  return (
    <ul class="city-date-temp-list">
      <li>
        <h2 class="city" id="city-name"></h2>
      </li>
      <li class="today row">
        <p id="date"></p>
      </li>
      <li>
        <p id="description"></p>
      </li>
    </ul>
  );
}
