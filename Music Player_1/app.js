// selecting the music 😍⭐
const music = document.querySelector("#music");
// selecting musicContainer
const musicContainer = document.querySelector(".music-container");
// selecting music thumbnail
const musicThumbnail = document.getElementById("thumbnailImage");
// selecting music title
const title = document.querySelector(".music-info .title");
//? Change the song by clicking progressContainer
// selecting it
const progressContainer = document.querySelector(".progressContainer");
const progress = document.querySelector("#progress");
const previousBtn = document.querySelector(".navigate .prevBtn");
const nextBtn = document.querySelector(".navigate .nextBtn");
const playBtn = document.querySelector(".navigate .playBtn");

// collection of songs
const songs = [
	"./music/02 Jaana Ve - Aksar 2 (Arijit Singh) 320Kbps.mp3",
	"./music/03 Mareez - E - Ishq (Arijit Singh) - 320Kbps.mp3",
	"./music/27 - Kuch Is Tarah (freshmaza.info).mp3",
];

// collection of thumbnails
const images = ["jaanaVe.png", "Mareez-E-ishq.png", "kuch-Is-Tarah.png"];

// DEFAULT
let index = 0;
loadSong(index);
loadImage(index);

function loadSong(index) {
	music.src = songs[index];
	title.innerText = songs[index].slice(11);
}
function loadImage() {
	musicThumbnail.src = "./music/" + images[index];
	// background of music player
	musicContainer.style.background = `url(${musicThumbnail.src})`;
}

// PLAY  OR PAUSE SONG
playBtn.addEventListener("click", function () {
	playPause(this);
});

function playPause(playBtn) {
	const isPlaying = playBtn.classList.contains("play");
	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
}

function playSong() {
	music.play();
	playBtn.classList.add("play");
	musicThumbnail.classList.add("rotate");
}

function pauseSong() {
	music.pause();
	playBtn.classList.remove("play");
	musicThumbnail.classList.remove("rotate");
}
// PREVIOUS SONG
previousBtn.addEventListener("click", () => {
	previousSong();
	playSong();
});
// NEXT SONG
nextBtn.addEventListener("click", () => {
	nextSong();
	playSong();
});

// These functions are same as IMAGE SLIDER
function previousSong() {
	index--;
	if (index < 0) {
		index = songs.length - 1;
	}
	loadSong(index);
	loadImage(index);
}

function nextSong() {
	index++;
	if (index >= songs.length) {
		index = 0;
	}
	loadSong(index);
	loadImage(index);
}
// Change the progress
// its an event of audio element!
music.addEventListener("timeupdate", changeProgress);

function changeProgress(e) {
	// finding duration and currentTIme
	const percent = (music.currentTime / music.duration) * 100;
	progress.style.width = `${percent}%`;
	if (percent === 100) {
		nextSong();
		playSong();
	}
}

// change duration of the song on click
progressContainer.addEventListener("click", cutTheSong);
function cutTheSong(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	music.currentTime = (clickX / width) * music.duration;
}
