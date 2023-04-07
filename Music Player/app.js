const audios = [
  "./assets/02 Jaana Ve - Aksar 2 (Arijit Singh) 320Kbps.mp3",
  "./assets/03 Mareez - E - Ishq (Arijit Singh) - 320Kbps.mp3",
  "./assets/Badnaamiyan (Male) - Hate Story 4.mp3",
  "./assets/Pehla Nasha 320kbps - Songspkred.co.mp3",
  "./assets/Terii Umeed(PagalWorld.com.se).mp3",
  "./assets/Tu Hi Mera - Jannat 2 320Kbps.mp3",
];

const audio = document.querySelector("audio");

const playButton = document.querySelector("#play-btn");
const previousButton = document.querySelector("#previous-btn");
const nextButton = document.querySelector("#next-btn");

const title = document.querySelector(".title span");
const banner = document.querySelector(".banner img");

const currentDuratin = document.querySelector(".current-duration");
const totalDuration = document.querySelector(".total-duration");

const progressBar = document.querySelector(".progress-bar");
const progressBarContainer = document.querySelector(".progress-bar_container");

//variable
let isPlaying = false;
// let startTime = new Date().getSeconds();
// let timer = null;
let i = 0;

setTitle();
updateDuration();

function pauseAudio() {
  playButton.children[0].src = "./assets/icons8-play-button-circled-24.png";
  audio.pause();
  title.classList.remove("roll-x");
}

function playAudio() {
  playButton.children[0].src = "./assets/icons8-pause-button-24.png";
  audio.play();
  setTitle();
  title.classList.add("roll-x");
}

function setTitle() {
  title.innerText = audio.attributes.src.value.slice(9);
}

function handleAudio() {
  //toggle
  isPlaying = !isPlaying;

  if (isPlaying) {
    playAudio();
  } else {
    pauseAudio();
  }
}

function nextAudio() {
  i++;
  i = i > audios.length - 1 ? 0 : i;
  audio.src = audios[i];
  playAudio();
}
function prevAudio() {
  i--;
  i = i < 0 ? audios.length - 1 : i;
  audio.src = audios[i];
  playAudio();
}

let timer = setInterval(() => isPlaying && updateDuration(), 1000);

// main thing
function updateDuration() {
  let { duration, currentTime } = audio;
  //tm : total minutes , ts: total seconds and so on
  let tm = 0,
    ts = 0,
    ct = 0,
    cm = 0,
    cs = 0;

  if (duration) {
    tm = Math.floor(duration / 60);
    ts = Math.floor(duration % 60);
  }

  ct = Math.floor(currentTime);
  //convert to minutes
  cm = ct >= 60 ? Math.floor(ct / 60) : 0;

  //! crucial for converting to seconds
  cs = ct % 60 === 0 ? 0 : ct % 60;

  tm = tm < 10 ? `0${tm}` : tm;
  ts = ts < 10 ? `0${ts}` : ts;
  cm = cm < 10 ? `0${cm}` : cm;
  cs = cs < 10 ? `0${cs}` : cs;

  currentDuratin.innerText = `${cm}:${cs}`;
  totalDuration.innerText = `${tm}:${ts}`;

  setProgressBar(currentTime, duration);

  if (currentTime === duration) {
    pauseAudio();
    nextAudio();
  }
}

function setProgressBar(currentTime, duration) {
  progressBar.style.width = (currentTime / duration) * 100 + "%";
}

function updateSong(e) {
  let percentage = (e.offsetX / this.clientWidth) * 100;
  audio.currentTime = (percentage * audio.duration) / 100;

  progressBar.style.width = percentage + "%";
  updateDuration();
}

// function updateProgressBar (e)

progressBarContainer.addEventListener("click", updateSong);

playButton.addEventListener("click", handleAudio);
previousButton.addEventListener("click", prevAudio);
nextButton.addEventListener("click", nextAudio);

//shortcut for on/off and navigation
window.addEventListener("keydown", function (e) {
  let key = e.code;
  switch (key) {
    case "Space":
      handleAudio();
      break;
    case "ArrowRight":
      nextAudio();
      break;
    case "ArrowLeft":
      prevAudio();
      break;
    default:
      break;
  }
});
