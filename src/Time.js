import React from "react";

export default function Time() {
  let current = new Date();
  let cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getDate();
  let cTime = current.getHours() + ":" + current.getMinutes();
  let dateTime = cDate + " " + cTime;
  console.log(dateTime);
  return <span>{cTime}</span>;
}
