// lets store all 5 images
const allImage = ["DecentBg", "snowAbstract", "CoolPalace", "LightingBg", "laptopBg"];
const slide_image = document.querySelector(".slide-image");
const dots = document.querySelectorAll(".dot");

// Defaults
slide_image.src = `/images/${allImage[0]}.jpg`;
dots[0].classList.add("active");
let num = 0;

// showSlide function
function showSlide(n) {
	slide_image.src = `/images/${allImage[n]}.jpg`;
	// changeDots
	changeDots(n);
	// when user clicks on the "dots" , num = n
	num = n;
}

// Dots
function changeDots(num) {
	for (let i = 0; i < dots.length; i++) {
		const dot = dots[i];
		dot.classList.remove("active");
	}
	dots[num].classList.add("active");
}

// previous function
function prev() {
	num--;
	if (num < 0) {
		num = allImage.length - 1;
	}
	showSlide(num);
}

// next function
function next() {
	num++;
	if (num === allImage.length) {
		num = 0;
	}
	showSlide(num);
}

// Auto slideshow after 4s
setInterval(() => {
	setTimeout(() => {
		next();
	}, 500);
}, 4000);
