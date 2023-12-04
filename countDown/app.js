// declare the variables
let birthday = new Date(),
  timer = 0,
  wishMsg = 'H,A,P,P,Y,B,I,R,T,H,D,A,Y';

const remaining = {
  days: '',
  hours: '',
  minutes: '',
  seconds: '',
};

// select elements
const dateInput = document.querySelector('.input-field input'),
  timerArea = document.querySelector('.timer-area');

// take input
dateInput.onblur = handleDateInput;
function handleDateInput(e) {
  birthday = new Date(`${e.target.value} `);
  console.log(e.target.value);
  // NOTE: `${e.target.value} *` <- here Space is needed for exact start of the day.

  startTimer();
}

//* Render the timer elements

let elemIds = ['days', 'hours', 'minutes', 'seconds'];

timerArea.innerHTML = elemIds
  .map((id) => `<h2><span id='${id}'>00</span>${id}</h2>`)
  .join('');

// select time elements
const hourEl = document.getElementById('hours'),
  daysEl = document.getElementById('days'),
  minutesEl = document.getElementById('minutes'),
  secsEl = document.getElementById('seconds');

// start the timer
function startTimer() {
  timer = setInterval(countDown, 1000);
}

// on each iteration new time is needed
function countDown() {
  const now = new Date();
  birthday.setFullYear(
    birthday.getMonth() - now.getMonth() > 0
      ? now.getFullYear()
      : now.getFullYear() + 1
  );

  const diffInSec = (birthday.getTime() - now.getTime()) / 1000;

  const daysLeft = Math.floor(diffInSec / 60 / 60 / 24),
    hoursLeft = Math.floor((diffInSec / 60 / 60) % 24),
    minutesLeft = Math.floor((diffInSec / 60) % 60),
    secondsLeft = Math.floor(diffInSec % 60);

  if (daysLeft > remaining.days) {
    remaining.days = daysLeft;
    days.innerHTML = remaining.days;
  }
  if (hoursLeft > remaining.hours) {
    remaining.hours = hoursLeft;
    hourEl.innerHTML = remaining.hours;
  }
  if (minutesLeft > remaining.minutes) {
    remaining.minutes = minutesLeft;
    minutesEl.innerHTML = remaining.minutes;
  }

  remaining.seconds = secondsLeft;
  secsEl.innerHTML = remaining.seconds;

  if (!diffInSec) {
    desc.innerHTML = wishMsg
      .split(',')
      .map((el) => `<h2><span>${el}</span></h2>`)
      .join('');
    clearInterval(timer);
  }
}
