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
const cardsContainer = document.querySelector(".cards-slider");

scaleCards(1);

function scaleCards(value) {
  for (const card of cardsContainer.children) {
    card.style.transform = "scale(.85)";
  }

  cardsContainer.children[value].style.transform = "scale(1)";
  dots[value].checked = true;

  cardsContainer.style.transform = `translate(${(value * -100) / 3}%)`;
}
