import axios from "axios";
import React from "react";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = `66e48331c74ac5541e45dafb42039ad5`;
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DailyForecast">
      <div className="col">
        Mon <br />
        <img
          className="forecastImg"
          src="https://openweathermap.org/img/wn/01d@2x.png"
          width={70}
          alt="weathericon"
        />
        <div className="temp" id="temperature">
          28
          <span className="celcius">°C</span>- 20
          <span className="celcius">°C</span>
        </div>
      </div>
    </div>
  );
}
