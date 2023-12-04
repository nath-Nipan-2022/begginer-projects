// Get the current date
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
let date = d.getDate();
let day = d.getDay();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getTime() {
  let h = d.getHours();
  // console.log(hour);
  let m = d.getMinutes();
  let s = d.getSeconds();

  let session = "AM";

  if (h > 12) {
    h = h - 12;
    session = "PM";
  } else if (h === 0 && m === 0) {
    session = "Midnight";
  } else if ((h === 12) & (m === 0)) {
    session = "Midday";
  }
  let time = `Time: ${h} ${m} ${s} ${session}`;
  console.log(time);
}

getTime();
