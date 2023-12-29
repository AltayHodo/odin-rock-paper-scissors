function getComputerChoice(){
  const rand = Math.floor(Math.random() * 3) + 1;
  if(rand === 1){
    return 'rock'
  } else if (rand === 2){
    return 'paper'
  } else {
    return 'scissors';
  }
}

const playerSelection = 'paper';
const computerSelection = getComputerChoice();