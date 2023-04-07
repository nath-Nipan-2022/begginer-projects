let today = new Date();

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "okt",
  "nov",
  "dec",
];

const byDefault = `${today.getDate() + 1} ${months[today.getMonth()]}`;

let dob = prompt(
  "what is your birth date? write like this:" + byDefault,
  byDefault
);

const birthday = new Date(`${dob} ${today.getFullYear()}`);

const countDown = () => {
  // on each iteration new time is needed
  let d = new Date();
  let diff = birthday.getTime() - d.getTime();
  let days = diff / (24 * 60 * 60 * 1000);
  // returns days in decimals
  let daysLeft = Math.floor(days);
  let hoursLeft = Math.floor((days * 24) % 24);
  let minutesLeft = Math.floor((days * 24 * 60) % 60);
  let secondsLeft = Math.floor((diff / 1000) % 60);

  document.querySelector(
    "#desc"
  ).innerHTML = ` <h2>Your birthday is on ${dob}</h2> 
	<h2>Time remaining: </h2> <h1>${daysLeft}days ${hoursLeft}h ${minutesLeft}min ${secondsLeft}s <h1>`;

  if (diff === 0) {
    document.querySelector("#desc").innerHTML =
      "HAPPY BIRTHDAY! MANY MANY HAPPY RETURNS OF THE DAY";
    clearInterval(timer);
  }
};

let timer = setInterval(countDown, 1000);
