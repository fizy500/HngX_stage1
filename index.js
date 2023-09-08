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
  if (index == new Date().getDay()) {
    dayOfTheWeek.innerHTML = day;
  }
});

// const now = new Date();

// const year = now.getUTCFullYear();
// const month = now.getUTCMonth() + 1;
// const day = now.getUTCDate();
// const hours = now.getUTCHours();
// const minutes = now.getUTCMinutes();
// const seconds = now.getUTCSeconds();
// const milliseconds = now.getUTCMilliseconds();

// const finalTime = `${year}-${month}-${day}
//             ${hours}:${minutes}:${seconds}`;
// currentUTCTime.innerHTML = finalTime;

const updateTime = () => {
  const currentUTCTimeInMilliseconds = new Date().getTime();
  console.log(currentUTCTimeInMilliseconds);
  currentUTCTime.textContent = currentUTCTimeInMilliseconds;
};

setInterval(updateTime, 1);
