import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import Day from "./Day";
import Description from "./Description";
import UnitsConvert from "./UnitsConvert";
import "./SearchEngine.css";
import DailyForecast from "./DailyForecast";

export default function SearchEngine() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Bordeaux");

  function handleReasponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function HandleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function Search() {
    let apiKey = `66e48331c74ac5541e45dafb42039ad5`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleReasponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <h1>
          <div className="row">
            <div className="col-6">
              <strong id="city">{weatherData.city}</strong>
              <br />
              <span className="today">
                <Day />
              </span>
              <br />
              <span className="time">
                {" "}
                <Time />
              </span>
              <br />
            </div>
            <div className="col-6 right-text">
              <span className="bdxicon">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                  alt="Weather icon"
                />
              </span>
              <span className="bdxtemp">
                <UnitsConvert temperature={weatherData.temp} />
              </span>
              <br />
              <Description
                wind={weatherData.wind}
                feelsLike={weatherData.feelslike}
                humidity={weatherData.humidity}
              />
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
        </form>
        <DailyForecast coordinates={weatherData.coordinates} />
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
              <span className="today">
                {" "}
                <Day />
              </span>
              <br />
              <span className="time">
                <Time />
              </span>
              <br />
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
        </form>
      </div>
    );
  }
}
