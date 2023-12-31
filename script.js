const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const buttons = document.querySelectorAll('button');
const resultContainer = document.querySelector('.result');
let playerSelection = '';
let computerSelection = '';
let playerWins = 0;
let computerWins = 0;

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
  else{
    updateScore('tie');
    updateDisplay('tie');
  }
}

function updateScore(outcome){
  switch(outcome){
    case 'playerWin':
      playerWins++;
      console.log(`player wins: ${playerWins}`);
      break;
    case 'computerWin':
      computerWins++;
      console.log(`computer wins: ${computerWins}`);
      break;
    case 'tie':
      console.log('tie');
      break;
  }
}

function updateDisplay(outcome){
  switch(outcome){
    case 'playerWin':
      resultContainer.textContent = `
        You win! ${playerSelection} beats ${computerSelection}.
        Player score: ${playerWins}
        Computer score: ${computerWins}`;
      break;
    case 'computerWin':
      resultContainer.textContent = `
        You lose! ${computerSelection} beats ${playerSelection}. 
        Player score: ${playerWins}
        Computer score: ${computerWins}`;
      break;
    case 'tie':
      resultContainer.textContent = 
      `It's a tie! 
      Player score: ${playerWins}
      Computer score: ${computerWins}`;
      break;
  }
}









