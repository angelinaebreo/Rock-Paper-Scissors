const chalk = require("chalk");
const readline = require("readline-sync");

//global variables
let playerChose;
let computerChose;
let playerScore = 0;
let computerScore = 0;
let playerName;

const quitGame = () => {
  console.log("Good bye");
  process.exit();
};

const wannaPlay = () => {
  let answer = readline.keyInYN(
    chalk.hex("ccffff").bold("Would you like to play 'Rock Paper Scissors'? \n")
  );

  if (answer) {
    startGame();
  } else {
    quitGame();
  }
};

const playAgain = () => {
  let answer = readline.keyInYN("Would you like to play again? \n");
  if (answer) {
    gameLoop();
  } else {
    console.log(
      `Final score is: computer ${computerScore} - ${playerName} ${playerScore}`
    );
    quitGame();
  }
};

const startGame = () => {
  console.log(
    `Instructions: Rock breaks scissors, scissors cut paper, paper covers rock`
  );
  playerName = readline.question("What is your name? \n");
  gameLoop();
};

const gameLoop = () => {
  playerChoice();
};

const playerChoice = () => {
  playerChose = readline.question(
    "What do you choose: rock, paper, or scissors? \n"
  );
  if (
    playerChose.toLowerCase() === "rock" ||
    playerChose.toLowerCase() === "paper" ||
    playerChose.toLowerCase() === "scissors"
  ) {
    computerChoice();
  } else {
    console.log("Please enter a valid choice");
    playerChoice();
  }
};

const computerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomN = Math.floor(Math.random() * Math.floor(3));
  computerChose = options[randomN];
  whoWon();
};

const whoWon = () => {
  if (playerChose.toLowerCase() === "rock") {
    if (computerChose === "rock") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}.` +
          chalk.hex("00ffcc").bold(` It is a tie`)
      );
      playAgain();
    } else if (computerChose === "paper") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Paper covers rock.` +
          chalk.hex("ff0000").bold(` Computer won!`)
      );
      computerScore++;
      playAgain();
    } else if (computerChose === "scissors") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Rock crushes scissors.` +
          chalk.hex("ffff00").bold(` ${playerName} won!`)
      );
      playerScore++;
      playAgain();
    }
  } else if (playerChose.toLowerCase() === "paper") {
    if (computerChose === "paper") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}.` +
          chalk.hex("00ffcc").bold(` It is a tie`)
      );
      playAgain();
    } else if (computerChose === "rock") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Paper covers rock.` +
          chalk.hex("ffff00").bold(` ${playerName} won!`)
      );
      playerScore++;
      playAgain();
    } else if (computerChose === "scissors") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Scissors cut paper.` +
          chalk.hex("ff0000").bold(` Computer won!`)
      );
      computerScore++;
      playAgain();
    }
  } else if (playerChose.toLowerCase() === "scissors") {
    if (computerChose === "scissors") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}.` +
          chalk.hex("00ffcc").bold(` It is a tie`)
      );
      playAgain();
    } else if (computerChose === "rock") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Rock crushes scissors.` +
          chalk.hex("ff0000").bold(` Computer won!`)
      );
      computerScore++;
      playAgain();
    } else if (computerChose === "paper") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Paper covers rock.` +
          chalk.hex("ffff00").bold(` ${playerName} won!`)
      );
      playerScore++;
      playAgain();
    }
  }
};

wannaPlay();
