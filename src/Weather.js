import React from "react";

export default function Weather() {
  return (
    <ul>
      <li className="feelsLike" id="feelsLike">
        Feels like: 19℃
      </li>
      <br />
      <li className="humidity" id="humidity">
        Humidity: 20%
      </li>
      <br />
      <li className="wind" id="wind">
        Wind: 10km/h
      </li>
    </ul>
  );
}
