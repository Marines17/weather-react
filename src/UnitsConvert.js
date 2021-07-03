import React, { useState } from "react";
import "./UnitsConvert.css";

export default function UnitsConvert(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span id="temperature">{props.temperature}</span>
        <span className="celcius" id="convertCelcius">
          °C
        </span>
        <span className="fahrenheit" id="convertFahrenheit">
          <a
            href="/"
            id="fahrenheit-link"
            className="active"
            onClick={showFahrenheit}
          >
            /°F
          </a>
        </span>{" "}
      </span>
    );
  } else {
    const fahrenheit = Math.round((props.temperature * 9) / 5 + 32);
    return (
      <span>
        <span id="temperature">{fahrenheit}</span>
        <span className="celcius" id="convertCelcius">
          <a
            href="/"
            id="celcius-link"
            className="active"
            onClick={showCelsius}
          >
            °C
          </a>
        </span>
        <span className="fahrenheit" id="convertFahrenheit">
          /°F
        </span>{" "}
      </span>
    );
  }
}
