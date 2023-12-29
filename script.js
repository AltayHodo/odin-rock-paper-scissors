function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3) + 1;
  if (rand === 1) {
    return 'rock'
  } else if (rand === 2) {
    return 'paper'
  } else {
    return 'scissors';
  }
}

let playerSelection = 'paper';
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } 
  else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  else{
    return `It's a tie!`;
  }
}

function game(){
  for(let i = 0; i < 5; i++){
    playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}