const display = document.getElementById("display");

let ms = 0;
let s = 0;
let m = 0;

let timer = 0;
let isStarted = false;
let className = "fa-solid fa-circle-pause";

function startTimer() {
  if (ms >= 98) {
    ms = 0;
    s++;
  }

  if (s > 59) {
    s = 0;
    m++;
  }

  displayTimer();
  // increment miliseconds
  ms++;
}

function displayTimer() {
  display.children[0].innerText = m < 10 ? `0${m}` : m;
  display.children[1].innerText = s < 10 ? `0${s}` : s;
  display.children[2].innerText = ms < 10 ? `0${ms}` : ms;
}

// start the  timer on startbtn click
document.querySelector(".start-btn").onclick = startStopwatch;

function startStopwatch() {
  isStarted = !isStarted;

  let className = "fa-solid fa-circle-";
  className += isStarted ? "pause" : "play";
  document.querySelector(".start-btn i").className = className;

  // main crucial part
  clearInterval(timer);
  timer = setInterval(startTimer, 10);

  if (!isStarted) {
    clearInterval(timer);
  }
}

// reset timer
document.querySelector(".reset-btn").onclick = reset;

function reset() {
  display.nextElementSibling.innerHTML = "";
  m = 0;
  s = 0;
  ms = 0;
  isStarted = false;
  clearInterval(timer);
  displayTimer();
}

function lap() {
  // create a div
  const li = document.createElement("li");
  li.textContent = display.textContent;
  li.className = "display-lap";
  display.nextElementSibling.appendChild(li);
}

document.querySelector(".lap").onclick = lap;
