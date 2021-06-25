import React from "react";

export default function Time() {
  let current = new Date();
  let hours = current.getHours();
  let minutes = current.getMinutes();
  console.log(hours);
  console.log(minutes);

  if (hours < 10) {
    hours = "0" + { hours };
  }
  if (minutes < 10) {
    minutes = "0" + { minutes };
  }

  let cTime = `${hours}:${minutes}`;

  return <span>{cTime}</span>;
}
