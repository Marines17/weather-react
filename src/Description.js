import React from "react";

export default function Description(props) {
  return (
    <div>
      <ul>
        <li className="feelsLike" id="feelsLike">
          Feels like: {props.feelsLike}℃
        </li>
        <br />
        <li className="humidity" id="humidity">
          Humidity: {props.humidity}%
        </li>
        <br />
        <li className="wind" id="wind">
          Wind: {props.wind}km/h
        </li>
      </ul>
    </div>
  );
}
