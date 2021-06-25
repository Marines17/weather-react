import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  let [tempMin, setTempMin] = useState(null);
  let [tempMax, setTempMax] = useState(null);
  let apiKey = `66e48331c74ac5541e45dafb42039ad5`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayLatLon);

  function displayLatLon(response) {
    let lat = response.data.coord.lat;
    let lon = response.data.coord.lon;
    let apiUrlForecast = `https://https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios.get(apiUrlForecast).then(displayForecast);
  }

  function displayForecast(response) {
    console.log(response);
  }

  return (
    <div className="row">
      <div className="col">
        Fri
        <br />
        <img
          className="forecastImg"
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt="weather"
        />
        <div className="temp" id="temperature">
          {tempMin}
          <span className="celcius">°C</span>- {tempMax}
          <span className="celcius">°C</span>
        </div>
      </div>
    </div>
  );
}
