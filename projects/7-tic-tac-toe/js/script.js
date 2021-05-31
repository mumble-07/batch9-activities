const gameBoard = document.getElementById("board");
const cellElements = document.querySelectorAll("[data-cell]");
const winMessageElement = document.getElementById("winMessage");
const winMessageTextElement = document.querySelector("[data-win-message-text]");
const histoPage = document.getElementById("histoPage");
const histoMessageElement = document.querySelector("[data-histo-text]")
const prevButton = document.getElementById("previous");
const nextButton = document.getElementById ("next");
const restartButton = document.getElementById("restartButton");
const histoButton = document.getElementById("historyButton");

let circleTurn;
const xClass = "x";
const circleClass = "circle";
let gameHist = [];
let histCounter = 0;

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

histoButton.addEventListener('click', showHisto)
prevButton.addEventListener('click', prevHisto)
nextButton.addEventListener('click', nextHisto)

gameStart();

/* restartButton.addEventListener("click", gameStart); */
restartButton.addEventListener('click', () => {
  window.location.reload();
});

function gameStart() {
  circleTurn = false; //FIRST MOVE YUNG X
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
  const cell = event.target;
  const currentClass = circleTurn ? circleClass : xClass;
  placeMark(cell, currentClass);   //placeMark
  saveMove();
  if (checkWin(currentClass)) {   //Check For Win
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
    winMessageTextElement.innerText = `${circleTurn ? "O" : "X"} Wins!`;
  }
  winMessageElement.classList.add("show");
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(xClass) || 
    cell.classList.contains(circleClass)
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
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
  return winningCombinations.some(combinaion => {
    return combinaion.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function saveMove() {
  gameHist.push(gameBoard.innerHTML)
}

function showHisto() {
  winMessageElement.classList.remove('show');
  nextButton.disabled = true;
  histCounter = gameHist.length - 1;
  nextButton.disabled = true;
  histoText();
  gameStart();
}

function histoText() {
  if (draw){
  histoMessageElement.innerText = 'Match Draw: History'
} else {
  histoMessageElement.innerText = `Player ${circleTurn ? "O": "X"} Won: History`
}
histoMessageElement.classList.add('show');
}

function prevHisto() {
  nextButton.disabled = false;
  if (histCounter > 0) {
    gameBoard.innerHTML = gameHist [--histCounter]
  }
  if (histCounter === 0) {
    prevButton.disabled = true
  }
}

function nextHisto() {
  prevButton.disabled = false;
  if (histCounter < gameHist.length -1) {
    gameBoard.innerHTML = gameHist [++histCounter]
  }
  if (histCounter === gameHist.length -1) {
    nextButton.disabled = true;
  }
}
