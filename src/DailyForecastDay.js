import React from "react";

export default function DailyForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="col">
        {day()} <br />
        <img
          className="forecastImg"
          src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          width={70}
          alt="weathericon"
        />
        <div className="temp" id="temperature">
          {Math.round(props.data.temp.min)}
          <span className="celcius">°C</span>- {Math.round(props.data.temp.max)}
          <span className="celcius">°C</span>
        </div>
      </div>
    </div>
  );
}
