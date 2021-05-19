var statusDisplay = document.querySelector('.game--status');
var gameActive = true;
var currentPlayer = "X";
var gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Гравець ${currentPlayer} переміг!`;
const drawMessage = () => `Нічия`;
const currentPlayerTurn = () => `Зараз хід гравця ${currentPlayer}`;
statusDisplay.innerHTML = currentPlayerTurn();

var xwin=0;
var draw=0;
var owin=0;

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);



function handleCellClick(clickedCellEvent) {
 var clickedCell = clickedCellEvent.target;
  var clickedCellIndex = parseInt(
   clickedCell.getAttribute('data-cell-index')
   );
  if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
  }  
  handleCellPlayed(clickedCell, clickedCellIndex);
 handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
 gameState[clickedCellIndex] = currentPlayer;
 clickedCell.innerHTML = currentPlayer;
}

const winningConditions = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6]
];

function handleResultValidation() {
 var roundWon = false;
  for (let i = 0; i <= 7; i++) {
   var winCondition = winningConditions[i];
     var a = gameState[winCondition[0]];
     var b = gameState[winCondition[1]];
     var c = gameState[winCondition[2]];
    if (a === '' || b === '' || c === '') {
     continue;
    }
   if (a === b && b === c) {
    roundWon = true;
    break
   }
  }
 if (roundWon) {
  statusDisplay.innerHTML = winningMessage();
  gameActive = false;
  return;
 }
}


function handleResultValidation() {
 var roundWon = false;
  for (let i = 0; i <= 7; i++) {
  var winCondition = winningConditions[i];
   var a = gameState[winCondition[0]];
   var b = gameState[winCondition[1]];
   var c = gameState[winCondition[2]];
    if (a === '' || b === '' || c === '') {
     continue;
    }
   if (a === b && b === c) {
    roundWon = true;
    break
    }
   }
  if (roundWon) {
    if (currentPlayer==='X') {
      xwin+=1;
      document.getElementById('xwink').innerHTML=xwin;
    }
    else {
      owin+=1;
      document.getElementById('owink').innerHTML=owin;
    };
    
   statusDisplay.innerHTML = winningMessage();
   gameActive = false;
   return;
  }
 var roundDraw = !gameState.includes("");
  if (roundDraw) {
    draw+=1;
    document.getElementById('drawk').innerHTML=draw;

   statusDisplay.innerHTML = drawMessage();
   gameActive = false;
   return;
    }
handlePlayerChange();
  }

function handlePlayerChange() {
 currentPlayer = currentPlayer === "X" ? "O" : "X";
 statusDisplay.innerHTML = currentPlayerTurn();
}

function handleRestartGame() {
 gameActive = true;
 currentPlayer = "X";
 gameState = ["", "", "", "", "", "", "", "", ""];
 statusDisplay.innerHTML = currentPlayerTurn();
 document.querySelectorAll('.cell')
 .forEach(cell => cell.innerHTML = "");
}