import React from "react";

export default function DailyForecast() {
  return (
    <div className="DailyFirecast">
      <div class="col">
        Mon <br />
        <img
          className="forecastImg"
          src="https://openweathermap.org/img/wn/01d@2x.png"
          width={70}
        />
        <div class="temp" id="temperature">
          28
          <span class="celcius">°C</span>- 20
          <span class="celcius">°C</span>
        </div>
      </div>
    </div>
  );
}
