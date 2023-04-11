const possibleFeedbacks = [
  "Not Satisfied 😀",
  "Quit Good 😁",
  "Lovely 😂",
  "Awesome 🤣",
  "Excelent 😆",
];

const ratingBtns = document.querySelectorAll(".rating-area button");
const feedbackText = document.querySelector("h4");

let isRatingGiven = false;
let hasFeedback = "";

// add index to rating button
ratingBtns.forEach((rating, i) => {
  rating.dataset.index = i;

  rating.onclick = handleRating;
});

function handleRating(e) {
  isRatingGiven = true;

  // container animation paused!
  feedbackText.parentElement.style.animationName = "";

  const target = e.target;
  //remove active class
  ratingBtns.forEach((rating) => rating.classList.remove("active"));

  const ratingIndex = target.dataset.index;
  //add active class
  for (let i = 0; i <= ratingIndex; i++) {
    ratingBtns[i].classList.add("active");
  }

  hasFeedback = findFeedback(ratingIndex);
  feedbackText.innerText = hasFeedback;
}

function findFeedback(index) {
  return possibleFeedbacks[index];
}

const submitButton = document.querySelector(".submit");

submitButton.onclick = () => {
  if (!isRatingGiven) return;

  feedbackText.parentElement.classList.add("animate-feedback");

  console.log(hasFeedback);
  feedbackText.parentElement.innerHTML =
    "<h3>Thank you for your feedback!</h3>";
};
