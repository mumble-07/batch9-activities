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
let circleTurn;

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

gameStart();

function gameStart() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  boardHoverClass();
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
    console.log("Winner");
  }
  //Switch Turn
  switchTurn();
  //to activave hover effect
  boardHoverClass();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurn() {
  circleTurn = !circleTurn;
}

function boardHoverClass() {
  board.classList.remove(xClass);
  board.classList.remove(circleClass);
  if (circleTurn) {
    board.classList.add(circleClass);
  } else {
    board.classList.add(xClass);
  }
}

function checkWin(currentClass) {
  winningCombinations.some((combinaion) => {
    return combinaion.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
