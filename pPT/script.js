let containerBtns = document.querySelector(".containerBtns");
let btnRock = document.querySelector("#userRock");
let btnPaper = document.querySelector("#userPaper");
let btnScissor = document.querySelector("#userScissor");
let resultDiv = document.querySelector("#resultados");
let nameGanador = document.querySelector("#nombreGanador");
let divSelJugadores = document.querySelector("#selJugadores");
let explicacionGanador = document.querySelector("#explicacionGanador");
let pUserSel = document.querySelector("#userSel");
let pComputerSel = document.querySelector("#computerSel");
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
function humanChoice(humanChoice) {
  switch (humanChoice) {
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
  containerBtns.setAttribute("style", "transition: 0.5s; display: none;");
  divSelJugadores.setAttribute("style", "transition: 0.5s; display: flex;");
  if (computerChoice == humanChoice) {
    nameGanador.innerText = "Empate, Intentalo de nuevo";
    explicacionGanador.style.display = "none";
    return "draw";
  } else if (computerChoice == 1 && humanChoice == 3) {
    pUserSel.innerText = "Tijera";
    pComputerSel.innerText = "Piedra";
    nameGanador.innerText = "Ganó la máquina";
    explicacionGanador.innerText = "La piedra destruye las tijeras";
    explicacionGanador.style.display = "block";
    return "computer";
  } else if (computerChoice == 2 && humanChoice == 1) {
    pUserSel.innerText = "Piedra";
    pComputerSel.innerText = "Papel";
    nameGanador.innerText = "Ganó la máquina";
    explicacionGanador.innerText = "El Papel envuelve a la Piedra";
    explicacionGanador.style.display = "block";

    return "computer";
  } else if (computerChoice == 3 && humanChoice == 2) {
    pUserSel.innerText = "Papel";
    pComputerSel.innerText = "Tijera";
    nameGanador.innerText = "Ganó la máquina";
    explicacionGanador.innerText = "Las Tijeras cortan el Papel";
    explicacionGanador.style.display = "block";

    return "computer";
  } else if (computerChoice == 3 && humanChoice == 1) {
    pUserSel.innerText = "Piedra";
    pComputerSel.innerText = "Tijera";
    nameGanador.innerText = "Ganaste!!!";
    explicacionGanador.innerText = "La Piedra destruye las Tijeras";
    explicacionGanador.style.display = "block";

    return "human";
  } else if (computerChoice == 1 && humanChoice == 2) {
    pUserSel.innerText = "Papel";
    pComputerSel.innerText = "Piedra";
    nameGanador.innerText = "Ganaste!!!";
    explicacionGanador.innerText = "El Papel envuelve la Piedra";
    explicacionGanador.style.display = "block";

    return "human";
  } else if (computerChoice == 2 && humanChoice == 3) {
    pUserSel.innerText = "Tijera";
    pComputerSel.innerText = "Papel";
    nameGanador.innerText = "Ganaste!!!";
    explicacionGanador.innerText = "Las Tijeras cortan el Papel";
    explicacionGanador.style.display = "block";

    return "human";
  }
}

btnRock.addEventListener("click", function () {
  playRound(getComputerChoice(), humanChoice("rock"));
});
btnPaper.addEventListener("click", function () {
  playRound(getComputerChoice(), humanChoice("paper"));
});
btnScissor.addEventListener("click", function () {
  playRound(getComputerChoice(), humanChoice("scissor"));
});

// function game() {
//   let resultadosPartidas = [];
//   for (let i = 0; i < 3; i++) {
//     let resultado = playRound(getComputerChoice(), humanChoice());
//     resultadosPartidas.push(resultado);
//   }
//   let resultadoComputerArray = [];
//   let resultadoHumanArray = [];

//   for (let i = 0; i < resultadosPartidas.length; i++) {
//     if (resultadosPartidas[i] == "computer") {
//       resultadoComputerArray.push(1);
//     } else if (resultadosPartidas[i] == "human") {
//       resultadoHumanArray.push(1);
//     }
//   }
//   if (resultadoComputerArray.length < resultadoHumanArray.length) {
//     console.log("Human win!!!");
//   } else if (resultadoComputerArray.length > resultadoHumanArray.length) {
//     console.log("Computer win!!!");
//   } else {
//     console.log("Draw!!!");
//   }
// }
