import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";

export default function SearchEngine() {
  let [city, setCity] = useState("Bordeaux");
  let [temp, setTemp] = useState(null);
  let [feelslike, setFeelslike] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function displayWeather(response) {
    setTemp(Math.round(response.data.main.temp));
    setFeelslike(Math.round(response.data.main.feels_like));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    let apiKey = `66e48331c74ac5541e45dafb42039ad5`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (temp) {
    return (
      <div>
        <h1>
          <div className="row">
            <div className="col-6">
              <strong id="city">{city}</strong>
              <br />
              <span className="time">
                {" "}
                <Time />
              </span>
              <br />
              <span className="today">Thursday</span>
              <br />
            </div>
            <div className="col-6 right-text">
              <span className="bdxicon">
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="Weather icon"
                />
              </span>
              <span className="bdxtemp">
                <span id="temperature">{temp}</span>
                <span className="celcius" id="convertCelcius">
                  <a href="/" id="celcius-link" className="active">
                    °C
                  </a>
                </span>
                <span className="fahrenheit" id="convertFahrenheit">
                  <a href="/" id="fahrenheit-link" className="active">
                    /°F
                  </a>
                </span>{" "}
              </span>
              <br />
              <ul>
                <li className="feelsLike" id="feelsLike">
                  Feels like: {feelslike}℃
                </li>
                <br />
                <li className="humidity" id="humidity">
                  Humidity: {humidity}%
                </li>
                <br />
                <li className="wind" id="wind">
                  Wind: {wind}km/h
                </li>
              </ul>
            </div>
          </div>
        </h1>
        <form id="search-form" onSubmit={HandleSubmit}>
          <input
            type="search"
            onChange={updateCity}
            placeholder="Search for a city"
            autoComplete="off"
            id="search-text-input"
            className="searchForm"
          />
          <input className="search-form" type="submit" value="☀️" />
          <input className="submitPin" type="submit" value="📍" />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          <div className="row">
            <div className="col-6">
              <strong id="city">Bordeaux</strong>
              <br />
              <span className="time">
                <Time />
              </span>
              <br />
              <span className="today">Thursday</span>
              <br />
            </div>
            <div className="col-6 right-text">
              <span className="bdxicon">
                <img
                  src={`https://openweathermap.org/img/wn/01d@2x.png`}
                  alt="Weather icon"
                />
              </span>
              <span className="bdxtemp">
                <span id="temperature">28</span>
                <span className="celcius" id="convertCelcius">
                  <a href="/" id="celcius-link" className="active">
                    °C
                  </a>
                </span>
                <span className="fahrenheit" id="convertFahrenheit">
                  <a href="/" id="fahrenheit-link" className="active">
                    /°F
                  </a>
                </span>{" "}
              </span>
              <br />
              <ul>
                <li className="feelsLike" id="feelsLike">
                  Feels like: 31℃
                </li>
                <br />
                <li className="humidity" id="humidity">
                  Humidity: 15%
                </li>
                <br />
                <li className="wind" id="wind">
                  Wind: 2km/h
                </li>
              </ul>
            </div>
          </div>
        </h1>
        <form id="search-form" onSubmit={HandleSubmit}>
          <input
            type="search"
            onChange={updateCity}
            placeholder="Search for a city"
            autoComplete="off"
            id="search-text-input"
            className="searchForm"
          />
          <input className="search-form" type="submit" value="☀️" />
          <input className="submitPin" type="submit" value="📍" />
        </form>
      </div>
    );
  }
}
