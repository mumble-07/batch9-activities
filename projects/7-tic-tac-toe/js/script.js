const xClass = "x";
const circleClass = "circle";
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cellElements = document.querySelectorAll("[data-cell]");
const gameBoard = document.getElementById("board");
const winMessageElement = document.getElementById("winMessage");
const restartButton = document.getElementById("restartButton");
const winMessageTextElement = document.querySelector("[data-win-message-text]");
let circleTurn;

gameStart();

restartButton.addEventListener("click", gameStart);

function gameStart() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(xClass);
    cell.classList.remove(circleClass);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  boardHoverClass();
  winMessageElement.classList.remove("show");
}

function handleClick(event) {
  /* console.log("Clicked"); */
  /* testing sa console, once lang ma click yung boxes */
  const cell = event.target;
  const currentClass = circleTurn ? circleClass : xClass;
  //placeMark
  placeMark(cell, currentClass);
  //Check For Win
  if (checkWin(currentClass)) {
    /*console.log("Winner"); */
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    switchTurn();
    boardHoverClass();
  }
}

function endGame(draw) {
  if (draw) {
    winMessageTextElement.innerText = "Draw!";
  } else {
    winMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  winMessageElement.classList.add("show");
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(xClass) || cell.classList.contains(circleClass)
    );
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurn() {
  circleTurn = !circleTurn;
}

function boardHoverClass() {
  gameBoard.classList.remove(xClass);
  gameBoard.classList.remove(circleClass);
  if (circleTurn) {
    gameBoard.classList.add(circleClass);
  } else {
    gameBoard.classList.add(xClass);
  }
}

function checkWin(currentClass) {
  winningCombinations.some((combinaion) => {
    return combinaion.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
