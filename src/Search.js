import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form class="search-form" id="search-form">
      <div class="row">
        <div class="col-9">
          <input
            type="text"
            id="search-text-input"
            class="form-control shadow-sm"
            placeholder="Search for your city"
            autocomplete="off"
            autofocus="on"
          />
        </div>
        <div class="col-3">
          <button
            type="submit"
            id="search-button"
            class="fas fa-search-location btn btn-primary w-100"
          >
            <i class="fas fa-search-location"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
