const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const buttons = document.querySelectorAll('button');
const resultContainer = document.querySelector('.result');
let playerSelection = '';
let computerSelection = '';

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    updatePlayerSelection(e);
    updateComputerSelection();
    playRound(playerSelection, computerSelection);
  });
});

function updatePlayerSelection(e){
  playerSelection = e.target.textContent.toLowerCase();
}

function updateComputerSelection() {
  const rand = Math.floor(Math.random() * 3) + 1;
  if (rand === 1) {
    computerSelection =  'rock'
  } else if (rand === 2) {
    computerSelection = 'paper'
  } else {
    computerSelection = 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection)
  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
    updateDisplay('playerWin');
  } 
  else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
    updateDisplay('computerWin');
  }
  else{
    updateDisplay('tie');
  }
}

function updateDisplay(outcome){
  switch(outcome){
    case 'playerWin':
      console.log('player');
      break;
    case 'computerWin':
      console.log('computer');
      break;
    case 'tie':
      console.log('tie');
      break;
  }
}









