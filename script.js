const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const possiblechoices = document.querySelectorAll("button");

let userPossibleChoice;
let computerChoice;
let result;
possiblechoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userPossibleChoice = e.target.id;
    userChoiceDisplay.innerHTML = userPossibleChoice;
    generateComputerChoice();
    getResult();
  })
);

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  randomNumber === 1
    ? (computerChoice = "rock")
    : randomNumber === 2
    ? (computerChoice = "paper")
    : (computerChoice = "scissor");
  computerChoiceDisplay.innerHTML = computerChoice;
};
const getResult = () => {
  if (computerChoice === userPossibleChoice) result = "it's a draw !";
  if (computerChoice === "scissor" && userPossibleChoice === "rock")
    result = "You win !";

  resultDisplay.innerHTML = result;
};
