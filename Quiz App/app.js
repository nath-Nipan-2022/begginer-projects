// quiz
const quiz = [
  {
    title: "What is React?",
    options: ["Programing language", "Frontend framwork", "Backend framwork"],
    ans: "Frontend framwork",
  },
  {
    title: "What is Next.JS?",
    options: ["Full Stack framwork", "Backend framwork", "Frontend framwork"],
    ans: "Full Stack framwork",
  },
  {
    title: "What is Babel?",
    options: ["Compiler for JavaScript", "Compiler for React", "Backend Tool"],
    ans: "Compiler for JavaScript",
  },
  {
    title: "What is React-Native for?",
    options: ["Web Development", "App Development", "Backend framwork"],
    ans: "App Development",
  },
];

const quizElem = document.querySelector(".quiz");
const titleElem = quizElem.querySelector("h3");
const optionBtns = quizElem.querySelectorAll(".btns button");
const nextBtn = quizElem.querySelector(".next");
const startBtn = document.querySelector(".start-btn");
const timeElem = quizElem.querySelector(".time");

let qsnIndex = 0;
let score = 0;
let isQuizEnded;
let maxTimeInSeconds = 10;
let totalTime = 0;
let timer = 0;

// start quiz
startBtn.onclick = () => {
  startQuiz(0);
  showTimer();
  startBtn.style.display = "none";
  quizElem.style.display = "block";
  quizElem.parentElement.classList.add("quiz-started");
};

function startQuiz(qsnIndex) {
  const Qsn = quiz[qsnIndex];
  const { title, options } = Qsn;
  const totalOptions = options.length;

  titleElem.innerText = `${1 + qsnIndex}. ${title}`;

  // pass the options to buttons
  for (let i = 0; i < totalOptions; i++) {
    optionBtns[i].innerText = options[i];
    optionBtns[i].dataset.option = options[i];
  }

  if (isQuizEnded) {
    isQuizEnded = false;
    toggleOptions(isQuizEnded);
  }
  timeElem.innerHTML = "Remaining Time: <span id='time-info'>10</span> s";

  //!! OMG!! 😲😳😳 if i declare handlers here, Closure is created and it causes a bug, i.e. it remembers previous ans 😒😒! and ans becomes equal for 2 questions OMG!!!!
}

//! so I Added click handlers here!
optionBtns.forEach((b) => b.addEventListener("click", handleoptionClick));

function handleoptionClick(e) {
  const target = e.target;
  const option = target.dataset.option;
  const { ans } = quiz[qsnIndex];

  if (option !== ans) {
    target.classList.add("incorrect");
  } else {
    score++;
  }
  // stop timer
  clearInterval(timer);

  // search for correct option
  optionBtns.forEach((btn) => {
    if (btn.dataset.option === ans) {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });

  nextBtn.innerText = "Next";
}

function toggleOptions(isQuizEnded) {
  optionBtns.forEach((b) => (b.style.display = isQuizEnded ? "none" : "block"));
}

nextBtn.addEventListener("click", runNextQuiz);

function runNextQuiz() {
  qsnIndex++;
  maxTimeInSeconds = 10;

  if (qsnIndex >= quiz.length) {
    showScore();
    resetQuiz();

    clearInterval(timer);

    return;
  }
  resetQsn();
  startQuiz(qsnIndex);
  clearInterval(timer);
  showTimer();
}

function resetQsn() {
  optionBtns.forEach((b) => {
    b.dataset.option = "...";
    b.disabled = false;
    b.innerText = "...";
    b.classList.remove("correct", "incorrect");
    nextBtn.innerText = "Skip >>";
  });
}

function resetQuiz() {
  score = 0;
  isQuizEnded = true;
  qsnIndex = -1;
  timeElem.innerHTML = "Total Time: " + totalTime + " s";
  totalTime = 0;
  toggleOptions(isQuizEnded);
}

function showScore() {
  titleElem.innerText = `You Scored ${score} out of ${quiz.length}`;
  nextBtn.innerText = "Play Again";
}

function showTimer() {
  const timeInfo = timeElem.querySelector("#time-info");

  timer = setInterval(() => {
    // increment totaltime
    let timeRemains = --maxTimeInSeconds;
    totalTime++;
    if (timeRemains < 0) {
      runNextQuiz();
    }
    timeInfo.innerText = timeRemains < 10 ? `0${timeRemains}` : timeRemains;
  }, 1000);
}
