const Choices = Object.freeze({
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2
});

const Results = Object.freeze({
  PLAYERWIN: 1,
  TIE: 0,
  PLAYERLOSE: -1
});

const getComputerChoice = () => Math.floor(Math.random() * 3);

const getPlayerChoice = () => {
  let result = -1;

  while (result < 0) {
    const playerChoice = prompt('Please enter your choice of rock, paper, or scissors.');
    result = parseUserInput(playerChoice);
    if (result < 0) {
      alert('Not a valid choice. Try again!');
    }
  }
  return result;
};

const parseUserInput = (userInput) => {
  const lowerUserInput = userInput.toLowerCase();
  switch (lowerUserInput) {
    case 'rock':
      return Choices.ROCK;
    case 'paper':
      return Choices.PAPER;
    case 'scissors':
      return Choices.SCISSORS;
    default:
      return -1;
  }
}

const playSingleRound = () => {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();
  // console.log(`Player: ${playerSelection} Computer: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    return Results.TIE;
  }

  if ((playerSelection === Choices.ROCK && computerSelection) === Choices.SCISSORS ||
      (playerSelection === Choices.PAPER && computerSelection) === Choices.ROCK ||
      (playerSelection === Choices.SCISSORS && computerSelection) === Choices.PAPER) {
    return Results.PLAYERWIN;
  }

  return Results.PLAYERLOSE;
}

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const result = playSingleRound();
    switch (result) {
      case Results.PLAYERWIN:
        playerScore++;
        console.log('You won!');
        break;
      case Results.PLAYERLOSE:
        computerScore++;
        console.log('You lost!');
        break;
      default:
        console.log("It's a tie!");
        break;
    }

    const scoreMessage = `Player score: ${playerScore} Computer Score ${computerScore}`;
    console.log(scoreMessage);
  }
  console.log();
  if (playerScore > computerScore) {
    console.log('You won!');
  } else if (playerScore === computerScore) {
    console.log("It's a tie!");
  } else {
    console.log('You lost!');
  }
}

game();

// const playRound = (playerSelection, computerSelection) =>
