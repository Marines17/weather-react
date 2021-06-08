import React, { useState } from "react";

export default function SearchEngine() {
  let [city, setCity] = useState("Bordeaux");
  function HandleSubmit(event) {
    event.preventDefault();
    return "hello";
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form id="search-form" onSubmit={HandleSubmit}>
      <input
        type="search"
        onChange={updateCity}
        placeholder="Search for a city"
        autocomplete="off"
        id="search-text-input"
        className="searchForm"
      />
      <input className="search-form" type="submit" value="☀️" />
      <input className="submitPin" type="submit" value="📍" />
    </form>
  );
}
