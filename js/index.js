
const questionText = document.getElementsByClassName("question-text")[0];
let optionBox = document.querySelector(".option-box");
const currentQuestionNum = document.querySelector(".current-question-num");
const answerDescription = document.querySelector(".answer-description");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const seeResultBtn = document.querySelector(".see-result-btn");
const correctAnswer = document.querySelector(".correct-answers");
let remainingTime = document.querySelector(".remaining-time");
const timeUpText = document.querySelector(".time-up-text");
const quizBox = document.querySelector(".quiz-box");
const quizOverBox = document.querySelector(".quiz-over-box");
const quizHomeBox = document.querySelector(".quiz-home-box");
const startAgainQuizBtn = document.querySelector(".start-again-quiz-btn");
let goHomeBtn = document.querySelector(".go-home-btn");
const startQuizBtn = document.querySelector(".start-quiz-btn");
let attempt = 0;
let questionIndex = 0;
let score = 0;
let number = 0;
let myArray = [];

let interval;
// Questions, Options and Answers array with Description
myApp = [
  {
    question: "Развитие малого бизнеса и частного предпринимательства в Узбекистане проходили в несколько этапов, сколько главных этапов они включали?",
    options: ["3 этапа", "5 этапов", "2 этапа", "4 этапа"],
    answer: 3,
    // description: "",
  },
  {
    question: "Укажите годы гражданской войны в Таджикистане?",
    options: ["1992-1997 г.", "1994-1995 г.", "1992-1999 г.", "1991-1995 г."],
    answer: 0,
    // description: "",
  },
  {
    question: "С какого года в Узбекистане уменьшается влияние государства и становится больше свободы действий в экономике?",
    options: ["с 2000 года", "с 2010 года", "с 1990 года", "с 2008 года"],
    answer: 0,
    // description: "",
  },
  {
    question: "Когда был образован Европейский союз (ЕС)?",
    options: ["1990", "1993", "1991", "1995"],
    answer: 1,
    // description: "",
  },
  {
    question: "Кто предложил идею создания Европейского союза?",
    options: ["Ж.Помпиду", "Тони Блэр", "Жан Моне", "Конрад Аденауэр"],
    answer: 2,
    // description: "",
  },
  {
    question: "В каком году был принят Закон Республики Узбекистан «О свободных экономических зонах»?",
    options: ["В 1996 году", "В 1998 году", "В 1226 году", "В 2022 году"],
    answer: 0,
    // description: "",
  },
  {
    question: "Где находится штаб - квартира Европейского центрального банка?",
    options: ["Берлин (Германия)", "Франкфурт-на-Майне (Германии)", "Париж (Франции)", "Милан (Италия) "],
    answer: 1,
    // description: "",
  },
  {
    question: ". Какая террористическая организация взяла ответственность за теракт 11 сентября 2001 года?  ",
    options: ["Хезболла", "Хамас", "Аль-Каида", "Асбат аль-Ансар"],
    answer: 2,
    // description: "",
  },
  {
    question: "Какие зоны имеют особый статус и на основе специальных льгот предоставляются более благоприятные торговые и таможенные возможности?",
    options: ["Специальная экономическая зона", "Свободная экономическая зона", "Индустриальная территория", "Зона особого статуса "],
    answer: 0,
    // description: "",
  },
  {
    question: "Какие страны по версии Дж. Буша-младшего относятся к «Оси зла»?",
    options: ["Ливан, Ирак, Китай", "КНДР, Иран, Ирак", "Китай, Иран, Сирия", "КНДР, Сирия, Ирак"],
    answer: 1,
    // description: "",
  },
  {
    question: "Сколько лет Ангела Меркель была на посту канцлера ФРГ?",
    options: ["16", "17", "18", "6"],
    answer: 0,
    // description: "",
  },
  {
    question: "Какой премьер-министр от лейбористской партии, был сторонником войны в Ираке в 2003 году?",
    options: ["Дэвид Кэмерон", "Тереза Мэй", "Тони Блэр", "Борис Джонсон"],
    answer: 2,
    // description: "",
  },
  {
    question: "Когда произошло объединение ГДР и ФРГ в единое государство?",
    options: ["3 октября1990 г", "3 октября 1988 г.", "3 сентября 1993 г.", "3 октября 1995 г."],
    answer: 0,
    // description: "",
  },
  {
    question: "Какая центральноазиатская страна самая последняя объявила о своей независимости в отличии от других союзных стран?",
    options: ["Казахстан", "Туркменистан", "Таджикистан", "Узбекистан"],
    answer: 0,
    // description: "",
  },
  {
    question: "Когда произошло падения берлинской стены, разделяющая ГДР и ФРГ?",
    options: ["9 ноября 1989 г.", "3 ноября 1990 г.", "9 октября 1989 г.", ") 9 ноября 1990 г."],
    answer: 0,
    // description: "",
  },

];

function load() {

  number++;
  //   console.log(number);
  questionText.innerHTML = myApp[myArray[questionIndex]].question;
  createOptions();
  scoreBoard();
  currentQuestionNum.innerHTML = number + " / " + myApp.length;
}

function createOptions() {
  optionBox.innerHTML = "";
  let animationDelay = 0.2;
  for (let i = 0; i < myApp[myArray[questionIndex]].options.length; i += 1) {
    // console.log(myApp[questionIndex].options[i]);
    const option = document.createElement("div");
    option.innerHTML = myApp[myArray[questionIndex]].options[i];
    // Now setting attribute for class
    // option.setAttribute("class", "option");
    option.classList.add("option");
    option.id = i;
    option.style.animationDelay = animationDelay + "s";
    animationDelay = animationDelay + 0.2;

    // option.setAttribute("onclick", "check(this)");
    option.addEventListener("click", function () {
      // check(this) === check(option)
      check(this);
    });
    optionBox.appendChild(option);
  }
}

function check(option) {
  //   console.log(option.innerHTML);
  attempt++;
  const id = option.id;
  if (id == myApp[myArray[questionIndex]].answer) {
    console.log("correct");
    option.classList.add("correct");
    score += 1;
    scoreBoard();
  } else {
    console.log("Wrong");
    option.classList.add("wrong");
    for (let i = 0; i < optionBox.children.length; i++) {
      if (optionBox.children[i].id == myApp[myArray[questionIndex]].answer) {
        optionBox.children[i].classList.add("show-correct");
      }
    }
  }
  disableOptions();
  showAnswerDescription();
  showNextQuestionBtn();
  stopTimer();

  if (number == myApp.length) {
    console.log("Quiz Over Mate !!!");
    quizOver();
  }
}

function quizResult() {
  document.querySelector(".total-questions").innerHTML = myApp.length;
  document.querySelector(".total-attempt").innerHTML = attempt;
  document.querySelector(".total-correct").innerHTML = score;
  document.querySelector(".total-wrong").innerHTML = attempt - score;
  const percentage = (score / myApp.length) * 100;
  document.querySelector(".total-percentage").innerHTML =
    percentage.toFixed(2) + "%";
}

function resetQuiz() {
  attempt = 0;
  questionIndex = 0;
  score = 0;
  number = 0;
  // myArray = [];
  // myArray = randomeArrayGenerator();
  // console.log(myArray);
  answerDescription.classList.remove("show");
  // startTimer();
  // load();
}

function quizOver() {
  // quizBox.classList.remove("show");
  nextQuestionBtn.classList.remove("show");
  seeResultBtn.classList.add("show");
}

function timeIsUp() {
  showTimeUpText();
  // timeUpText.classList.add("show");
  // when time is up, show the correct output
  for (let i = 0; i < optionBox.children.length; i++) {
    if (optionBox.children[i].id == myApp[myArray[questionIndex]].answer) {
      optionBox.children[i].classList.add("show-correct");
    }
  }
  disableOptions();
  showAnswerDescription();
  if (number != myApp.length) {
    showNextQuestionBtn();
  } else {
    timeUpText.classList.remove("show");
    quizOver();
  }
  // stopTimer();
}

function startTimer() {
  let timeLimit = 15;
  remainingTime.innerHTML = timeLimit;
  remainingTime.classList.remove("less-time");

  interval = setInterval(() => {
    timeLimit--;
    // console.log(timeLimit);
    if (timeLimit < 10) {
      timeLimit = "0" + timeLimit;
    }
    if (timeLimit < 6) {
      remainingTime.classList.add("less-time");
    }
    remainingTime.innerHTML = timeLimit;
    if (timeLimit == 0) {
      clearInterval(interval);
      timeIsUp();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function disableOptions() {
  for (let i = 0; i < optionBox.children.length; i++) {
    // console.log(optionBox.children[i].id);
    // console.log(optionBox.childElementCount);
    // optionBox.children[i].removeAttribute("onclick");
    optionBox.children[i].classList.add("already-answered");
  }
}

function showAnswerDescription() {
  // we will only print description, when there is any predefined exist, otherwise it won't print anything.
  if (typeof myApp[myArray[questionIndex]].description !== "undefined") {
    answerDescription.classList.add("show");
    answerDescription.innerHTML = myApp[myArray[questionIndex]].description;
  }
}

function hideAnswerDescription() {
  answerDescription.classList.remove("show");
  answerDescription.innerHTML = "";
}

function showNextQuestionBtn() {
  nextQuestionBtn.classList.add("show");
}

function hideNextQuestionBtn() {
  nextQuestionBtn.classList.remove("show");
}

function showTimeUpText() {
  timeUpText.classList.add("show");
}

function hideTimeUpText() {
  timeUpText.classList.remove("show");
}

function scoreBoard() {
  correctAnswer.innerHTML = score;
}

nextQuestionBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
  console.log("Abhishek");
  questionIndex++;
  load();
  hideNextQuestionBtn();
  hideAnswerDescription();
  hideTimeUpText();
  startTimer();
}

function randomeArrayGenerator() {
  set = new Set();
  for (let i = 0; set.size != myApp.length; i += 1) {
    set.add(Math.floor(Math.random() * myApp.length));
  }
  return Array.from(set);
}

seeResultBtn.addEventListener("click", () => {
  console.log("See Result Button");
  // quizBox.style.display = "none";
  quizBox.style.display = "none";
  seeResultBtn.classList.remove("show");
  quizOverBox.classList.add("show");
  quizResult();
});

startAgainQuizBtn.addEventListener("click", () => {
  quizBox.classList.add("show");
  quizBox.style.display = "block";
  quizOverBox.classList.remove("show");
  resetQuiz();
  // myArray = [];
  // myArray = randomeArrayGenerator();
  // console.log(myArray);
  // answerDescription.classList.remove("show");
  // startTimer();
  // load();
  // nextQuestion();
  quizStart();
});

goHomeBtn.addEventListener("click", () => {
  quizOverBox.classList.remove("show");
  quizHomeBox.classList.add("show");
  resetQuiz();
});

startQuizBtn.addEventListener("click", quizStart);

function quizStart() {
  quizHomeBox.classList.remove("show");
  // quizBox.classList.add("show");
  quizBox.style.display = "block";
  myArray = randomeArrayGenerator();
  console.log(myArray);
  startTimer();
  load();
}

// window.onload = () => {
//   myArray = randomeArrayGenerator();
//   console.log(myArray);
//   startTimer();
//   load();
// };
