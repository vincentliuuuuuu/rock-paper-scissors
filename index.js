const Choices = Object.freeze({
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2
});

const getComputerChoice = () => Math.floor(Math.random() * 3);

const rockButton = document.querySelector('.rock-btn');
const paperButton = document.querySelector('.paper-btn');
const scissorsButton = document.querySelector('.scissors-btn');
const resetButton = document.querySelector('.reset');
const userPic = document.querySelector('.user-choice');
const compPic = document.querySelector('.computer-choice');

const userScore = document.querySelector('.user-score');
const compScore = document.querySelector('.comp-score');

const round = document.querySelector('.round');
const result = document.querySelector('.result');

let currentRound = 1;
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => {
  playSingleRound('rock');
});

paperButton.addEventListener('click', () => {
  playSingleRound('paper');
});

scissorsButton.addEventListener('click', () => {
  playSingleRound('scissors');
});

resetButton.addEventListener('click', () => {
  round.textContent = 'Round: 1';
  result.textContent = '';
  userScore.textContent = 'User Score: 0';
  compScore.textContent = 'Computer Score: 0';
});

const getPlayerChoice = (playerChoice) => {
  switch (playerChoice) {
    case 'rock':
      return Choices.ROCK;
    case 'paper':
      return Choices.PAPER;
    case 'scissors':
      return Choices.SCISSORS;
    default:
      return -1;
  }
};

const playSingleRound = (playerChoice) => {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice(playerChoice);

  changeUserChoice(playerSelection);
  changeCompChoice(computerSelection);

  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
  } else if ((playerSelection === Choices.ROCK && computerSelection) === Choices.SCISSORS ||
      (playerSelection === Choices.PAPER && computerSelection) === Choices.ROCK ||
      (playerSelection === Choices.SCISSORS && computerSelection) === Choices.PAPER) {
    playerScore++;
    userScore.textContent = `User Score: ${playerScore}`;
    result.textContent = 'You won this round!';
  } else {
    computerScore++;
    compScore.textContent = `Computer Score: ${computerScore}`;
    result.textContent = 'Computer won this round!';
  }

  currentRound++;
  round.textContent = `Round: ${currentRound}`;
};

const changeUserChoice = (playerSelection) => {
  let textContent = '';
  switch (playerSelection) {
    case Choices.ROCK:
      textContent = '✊';
      break;
    case Choices.PAPER:
      textContent = '✋';
      break;
    default:
      textContent = '✌';
  }

  userPic.textContent = textContent;
};

const changeCompChoice = (computerSelection) => {
  let textContent = '';
  switch (computerSelection) {
    case Choices.ROCK:
      textContent = '✊';
      break;
    case Choices.PAPER:
      textContent = '✋';
      break;
    default:
      textContent = '✌';
  }

  compPic.textContent = textContent;
};
