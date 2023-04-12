// declear the variables
let birthday = 0;
let timer = 0;

// get date of birth
function getDOB() {
  const box = document.createElement("div");
  box.className = "input-field";

  box.innerHTML =
    "<label for='date'>Pick Your Birtday Date</label><input type = 'date' name = 'date' /> ";

  document.querySelector("main").appendChild(box);
}
getDOB();

// take input
document.querySelector(".input-field input").onchange = handleDateInput;

function handleDateInput(e) {
  const dob = e.target.value;
  console.log(dob);
  birthday = new Date(`${dob} `);
  //note: this little space `${dob} `<- here is needed for exact start of the day
  startTimer();
}

// render the timer elements
const desc = document.querySelector("#desc");

desc.innerHTML = `<div class="timer-area">
  <h2><span id="d">00</span>days</h2>
  <h2><span id="h">00</span>hours</h2>
  <h2><span id="m">00</span>minutes</h2>
  <h2><span id="s">00</span>seconds</h2>
  <div>`;

const days = desc.querySelector("#d");
const hrs = desc.querySelector("#h");
const mins = desc.querySelector("#m");
const secs = desc.querySelector("#s");

function countDown() {
  // on each iteration new time is needed
  const td = new Date();

  const seconds = (birthday - td) / 1000;

  const day = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor((seconds / 60) % 60);

  days.innerText = day;
  hrs.innerText = hours;
  mins.innerText = minutes;
  secs.innerText = Math.floor(seconds % 60);

  if (diff === 0) {
    desc.innerHTML = `<div class="timer-area">
        <h2><span>H</span></h2>
        <h2><span>A</span></h2>
        <h2><span>P</span></h2>
        <h2><span>P</span></h2>
        <h2><span>Y</span></h2>
        <h2><span>B</span></h2>
        <h2><span>I</span></h2>
        <h2><span>R</span></h2>
        <h2><span>T</span></h2>
        <h2><span>H</span></h2>
        <h2><span>D</span></h2>
        <h2><span>A</span></h2>
        <h2><span>Y</span></h2>
     <div>`;
    clearInterval(timer);
  }
}

function startTimer() {
  timer = setInterval(countDown, 1000);
}
