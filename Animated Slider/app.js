<<<<<<< HEAD
// select slider
const slider = document.querySelector(".slider");

let counter = 0;
const animateSlider = () => {
  let percent = (counter * 100) / slider.children.length;
  slider.style.transform = `translate(-${percent}%)`;
};
const nextSlide = () => {
  counter++;
  if (counter >= slider.children.length) {
    counter = 0;
  }
  animateSlider();
};
const prevSlide = () => {
  counter--;
  if (counter <= 0) {
    counter = slider.children.length - 1;
  }
  animateSlider();
};
setInterval(() => {
  nextSlide();
}, 4000);

// dots
const dots = document.querySelectorAll('input[name="dot"]');
//cards
const cardContent = document.querySelector(".cards-content");

scaleCards(1);

function scaleCards(value) {
  for (const card of cardContent.children) {
    card.style.transform = `scale(.85)`;
  }
  cardContent.style.transform = `translate(-${(value * 100) / 3}%)`;
  cardContent.children[value].style.transform = `scale(1)`;
}
=======
// select slider
const slider = document.querySelector(".slider");

let counter = 0;
const animateSlider = () => {
  let percent = (counter * 100) / slider.children.length;
  slider.style.transform = `translate(-${percent}%)`;
};
const nextSlide = () => {
  counter++;
  if (counter >= slider.children.length) {
    counter = 0;
  }
  animateSlider();
};
const prevSlide = () => {
  counter--;
  if (counter <= 0) {
    counter = slider.children.length - 1;
  }
  animateSlider();
};
setInterval(() => {
  nextSlide();
}, 4000);

// dots
const dots = document.querySelectorAll('input[name="dot"]');
//cards
const cardContent = document.querySelector(".cards-content");

scaleCards(1);

function scaleCards(value) {
  for (const card of cardContent.children) {
    card.style.transform = `scale(.85)`;
  }
  cardContent.style.transform = `translate(-${(value * 100) / 3}%)`;
  cardContent.children[value].style.transform = `scale(1)`;
}
>>>>>>> d7bb9669d98f4815bdd2a4641f65596a5e1ae58a
