const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const buttons = document.querySelectorAll('button');
const gameButtons = document.querySelectorAll('.game-btn');
const resultContainer = document.querySelector('.result');
const scoreboard = document.querySelector('.scoreboard');
const winMessage = document.querySelector('.win-message');
const endgameContainer = document.querySelector('.endgame-container');
const resetButton = document.querySelector('.reset-button');
resetButton.classList.add('hidden');
resetButton.disabled = true;
let playerSelection = '';
let computerSelection = '';
let playerWins = 0;
let computerWins = 0;

window.addEventListener('load', addButtonEvents);


function addButtonEvents() {
  buttons.forEach(button => {
    button.addEventListener('click', buttonClickHandler);
  })
}

function buttonClickHandler(e) {
  updatePlayerSelection(e);
  updateComputerSelection();
  playRound(playerSelection, computerSelection);
}

function removeButtonEvents() {
  buttons.forEach(button => {
    button.removeEventListener('click', buttonClickHandler);
  });
}



function updatePlayerSelection(e) {
  playerSelection = e.target.textContent.toLowerCase();
}

function updateComputerSelection() {
  const rand = Math.floor(Math.random() * 3) + 1;
  if (rand === 1) {
    computerSelection = 'rock'
  } else if (rand === 2) {
    computerSelection = 'paper'
  } else {
    computerSelection = 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
    updateScore('playerWin');
    updateDisplay('playerWin');
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
    updateScore('computerWin');
    updateDisplay('computerWin');
  }
  else {
    updateScore('tie');
    updateDisplay('tie');
  }
  checkGameOver();
}

function updateScore(outcome) {
  switch (outcome) {
    case 'playerWin':
      playerWins++;
      break;
    case 'computerWin':
      computerWins++;
      break;
    case 'tie':
      break;
  }
}

function updateDisplay(outcome) {
  switch (outcome) {
    case 'playerWin':
      resultContainer.textContent = `
        You win! ${playerSelection} beats ${computerSelection}.`;
      break;
    case 'computerWin':
      resultContainer.textContent = `
        You lose! ${computerSelection} beats ${playerSelection}.`;
      break;
    case 'tie':
      resultContainer.textContent =
        `It's a tie!`;
      break;
  }
  scoreboard.textContent = `${playerWins} - ${computerWins}`;
}

function checkGameOver() {
  if (playerWins === 5 || computerWins === 5) {
    gameOver();
  }
}

function gameOver() {
  if (playerWins === 5) {
    winMessage.textContent = 'Game over. You won!';
  } else {
    winMessage.textContent = 'Game over. You lost!';
  }
  resetButton.addEventListener('click', resetGame);
  removeButtonEvents();
  toggleDisabledStyles();
  toggleResetButton();
}


function resetGame() {
  playerWins = 0;
  computerWins = 0;
  winMessage.textContent = '';
  resultContainer.textContent = '';
  scoreboard.textContent = '0 - 0';
  addButtonEvents();
  toggleDisabledStyles();
  toggleResetButton();
}

function toggleDisabledStyles() {
  gameButtons.forEach(button => {
    button.classList.toggle('disable');
  });
}

function toggleResetButton() {
  resetButton.classList.toggle('hidden');
  resetButton.disabled = resetButton.disabled === false ? true : false;
}












