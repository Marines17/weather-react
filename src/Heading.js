import React from "react";
import "./styles.css";
import Weather from "./Weather";

export default function Heading() {
  return (
    <h1>
      <div className="row">
        <div className="col-6">
          <strong id="city">Bordeaux</strong>
          <br />
          <span className="time">12:48</span>
          <br />
          <span className="today">Thursday</span>
          <br />
        </div>
        <div className="col-6 right-text">
          <span className="bdxicon">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              className="bdximg"
              id="titleIcon"
              width="100px"
              alt="weather"
            />
          </span>
          <span className="bdxtemp">
            <span id="temperature">23</span>
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
          <Weather />
        </div>
      </div>
    </h1>
  );
}
