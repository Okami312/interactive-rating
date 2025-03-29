const numberOneRate = document.querySelector(".feedback-button:nth-of-type(1)");
const numberTwoRate = document.querySelector(".feedback-button:nth-of-type(2)");
const numberThreeRate = document.querySelector(
  ".feedback-button:nth-of-type(3)"
);
const numberFourRate = document.querySelector(
  ".feedback-button:nth-of-type(4)"
);
const numberFiveRate = document.querySelector(
  ".feedback-button:nth-of-type(5)"
);

let rateNumber = 0;

// Button One
const numberOne = () => {
  rateNumber = 1;

  numberOneRate.classList.add("switch-color-on-click");
  numberTwoRate.classList.remove("switch-color-on-click");
  numberThreeRate.classList.remove("switch-color-on-click");
  numberFourRate.classList.remove("switch-color-on-click");
  numberFiveRate.classList.remove("switch-color-on-click");
};

numberOneRate.addEventListener("click", numberOne);

// --- Two ---
const numberTwo = () => {
  rateNumber = 2;

  numberTwoRate.classList.add("switch-color-on-click");
  numberOneRate.classList.remove("switch-color-on-click");
  numberThreeRate.classList.remove("switch-color-on-click");
  numberFourRate.classList.remove("switch-color-on-click");
  numberFiveRate.classList.remove("switch-color-on-click");
};

numberTwoRate.addEventListener("click", numberTwo);

// --- Three ---
const numberThree = () => {
  rateNumber = 3;

  numberThreeRate.classList.add("switch-color-on-click");
  numberOneRate.classList.remove("switch-color-on-click");
  numberTwoRate.classList.remove("switch-color-on-click");
  numberFourRate.classList.remove("switch-color-on-click");
  numberFiveRate.classList.remove("switch-color-on-click");
};

numberThreeRate.addEventListener("click", numberThree);

// --- Four ---
const numberFour = () => {
  rateNumber = 4;

  numberFourRate.classList.add("switch-color-on-click");
  numberOneRate.classList.remove("switch-color-on-click");
  numberTwoRate.classList.remove("switch-color-on-click");
  numberThreeRate.classList.remove("switch-color-on-click");
  numberFiveRate.classList.remove("switch-color-on-click");
};

numberFourRate.addEventListener("click", numberFour);

// --- Five ---
const numberFive = () => {
  rateNumber = 5;

  numberFiveRate.classList.add("switch-color-on-click");
  numberOneRate.classList.remove("switch-color-on-click");
  numberTwoRate.classList.remove("switch-color-on-click");
  numberThreeRate.classList.remove("switch-color-on-click");
  numberFourRate.classList.remove("switch-color-on-click");
};

numberFiveRate.addEventListener("click", numberFive);

// At submit  button
const firstPage = document.querySelector(".rating-container");
const nextPage = document.querySelector(".thanks-container");
const submitButton = document.querySelector(".register-feedback");

const displayNextPage = () => {
  if (rateNumber !== 0) {
    firstPage.style.display = "none";
    nextPage.style.display = "block";
  } else {
    alert("Please select a rate!");
  }
};

submitButton.addEventListener("click", displayNextPage);
