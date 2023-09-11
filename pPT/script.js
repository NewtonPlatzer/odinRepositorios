function getComputerChoice() {
  let computerNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let computerChoice;
  switch (computerNumber) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
  }
  return computerNumber;
}
function humanChoice() {
  let humanChoice = prompt("Rock, Paper, Scissor");
  let varHumanChoice = humanChoice.toLowerCase();
  switch (varHumanChoice) {
    case "rock":
      humanChoice = 1;
      break;
    case "paper":
      humanChoice = 2;
      break;
    case "scissor":
      humanChoice = 3;
      break;
  }
  return humanChoice;
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice == humanChoice) {
    alert("Draw!!!");
    return "draw";
  } else if (computerChoice == 1 && humanChoice == 3) {
    alert("Computer wins!!! Rock beats Scissor");
    return "computer";
  } else if (computerChoice == 2 && humanChoice == 1) {
    alert("Computer wins!!! Paper beats Rock");
    return "computer";
  } else if (computerChoice == 3 && humanChoice == 2) {
    alert("Computer win!!! Scissor beats Paper");
    return "computer";
  } else if (computerChoice == 3 && humanChoice == 1) {
    alert("You win!!! Rock beats Scissors");
    return "human";
  } else if (computerChoice == 1 && humanChoice == 2) {
    alert("You win!!! Paper beats Rock");
    return "human";
  } else if (computerChoice == 2 && humanChoice == 3) {
    alert("You win!!! Scissor beats Paper");
    return "human";
  }
}

function game() {
  let resultadosPartidas = [];
  for (let i = 0; i < 5; i++) {
    let resultado = playRound(getComputerChoice(), humanChoice());
    resultadosPartidas.push(resultado);
  }
  let resultadoComputerArray = [];
  let resultadoHumanArray = [];

  for (let i = 0; i < resultadosPartidas.length; i++) {
    if (resultadosPartidas[i] == "computer") {
      resultadoComputerArray.push(1);
    } else if (resultadosPartidas[i] == "human") {
      resultadoHumanArray.push(1);
    }
  }
  if (resultadoComputerArray.length < resultadoHumanArray.length) {
    console.log("Human win!!!");
  } else if (resultadoComputerArray.length > resultadoHumanArray.length) {
    console.log("Computer win!!!");
  } else {
    console.log("Draw!!!");
  }
}
game();
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
  e.target.style.color = "white";
});
console.log("This is a new console")