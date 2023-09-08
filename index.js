let dayOfTheWeek = document.getElementById("weekDay");
let currentUTCTime = document.getElementById("time");

let date = new Date();
date.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

days.forEach((day, index) => {
  // loop body
  if (index == new Date().getDay()) {
    dayOfTheWeek.innerHTML = day;
  }
});
