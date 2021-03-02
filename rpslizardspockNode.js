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
    chalk
      .hex("ccffff")
      .bold("Would you like to play 'Rock Paper Scissors Lizard Spock'? \n")
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
    `Instructions: Scissors cut paper, paper covers rock, rock crushes lizard, \n lizard poisons spock, spock smashes scissors, \n scissors decapitate lizard, lizard eats paper, paper disproves spock, \n spock vaporizes rock, rock crushes scissors`
  );
  playerName = readline.question("What is your name? \n");
  gameLoop();
};

const gameLoop = () => {
  playerChoice();
};

const playerChoice = () => {
  playerChose = readline.question(
    "What do you choose: rock, paper, scissors, lizard, or spock? \n"
  );
  if (
    playerChose.toLowerCase() === "rock" ||
    playerChose.toLowerCase() === "paper" ||
    playerChose.toLowerCase() === "scissors" ||
    playerChose.toLowerCase() === "lizard" ||
    playerChose.toLowerCase() === "spock"
  ) {
    computerChoice();
  } else {
    console.log("Please enter a valid choice");
    playerChoice();
  }
};

const computerChoice = () => {
  let options = ["rock", "paper", "scissors", "lizard", "spock"];
  let randomN = Math.floor(Math.random() * Math.floor(5));
  computerChose = options[randomN];
  whoWon();
};

const whoWon = () => {
  if (playerChose.toLowerCase() === computerChose) {
    console.log(
      `Computer: ${computerChose} - ${playerName}: ${playerChose}.` +
        chalk.hex("00ffcc").bold(` It is a tie`)
    );
    playAgain();
  } else if (playerChose.toLowerCase() === "rock") {
    if (computerChose === "paper") {
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
    } else if (computerChose === "lizard") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Rock crushes lizard.` +
          chalk.hex("ffff00").bold(` ${playerName} won!`)
      );
      playerScore++;
      playAgain();
    } else if (computerChose === "spock") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Spock vaporizes rock.` +
          chalk.hex("ff0000").bold(` Computer won!`)
      );
      computerScore++;
      playAgain();
    }
  } else if (playerChose.toLowerCase() === "paper") {
    if (computerChose === "rock") {
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
    } else if (computerChose === "lizard") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Lizard eats paper.` +
          chalk.hex("ff0000").bold(` Computer won!`)
      );
      computerScore++;
      playAgain();
    } else if (computerChose === "spock") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Paper disproves spock.` +
          chalk.hex("ffff00").bold(` ${playerName} won!`)
      );
      playerScore++;
      playAgain();
    }
  } else if (playerChose.toLowerCase() === "scissors") {
    if (computerChose === "rock") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Rock crushes scissors.` +
          chalk.hex("ff0000").bold(` Computer won!`)
      );
      computerScore++;
      playAgain();
    } else if (computerChose === "paper") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Scissors cut paper.` +
          chalk.hex("ffff00").bold(` ${playerName} won!`)
      );
      playerScore++;
      playAgain();
    } else if (computerChose === "spock") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Spock smashes scissors.` +
          chalk.hex("ff0000").bold(` Computer won!`)
      );
      computerScore++;
      playAgain();
    } else if (computerChose === "lizard") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Scissors decapitate lizard.` +
          chalk.hex("ffff00").bold(` ${playerName} won!`)
      );
      playerScore++;
      playAgain();
    }
  } else if (playerChose.toLowerCase() === "lizard") {
    if (computerChose === "rock") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Rock crushes lizard.` +
          chalk.hex("ff0000").bold(` Computer won!`)
      );
      computerScore++;
      playAgain();
    } else if (computerChose === "spock") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Lizard poisons spock.` +
          chalk.hex("ffff00").bold(` ${playerName} won!`)
      );
      playerScore++;
      playAgain();
    } else if (computerChose === "scissors") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Scissors decapitate lizard.` +
          chalk.hex("ff0000").bold(` Computer won!`)
      );
      computerScore++;
      playAgain();
    } else if (computerChose === "paper") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Lizard eats paper.` +
          chalk.hex("ffff00").bold(` ${playerName} won!`)
      );
      playerScore++;
      playAgain();
    }
  } else if (playerChose.toLowerCase() === "spock") {
    if (computerChose === "paper") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Paper disproves spock.` +
          chalk.hex("ff0000").bold(` Computer won!`)
      );
      computerScore++;
      playAgain();
    } else if (computerChose === "rock") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Spock vaporizes rock.` +
          chalk.hex("ffff00").bold(` ${playerName} won!`)
      );
      playerScore++;
      playAgain();
    } else if (computerChose === "lizard") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Lizard poisons spock.` +
          chalk.hex("ff0000").bold(` Computer won!`)
      );
      computerScore++;
      playAgain();
    } else if (computerChose === "scissors") {
      console.log(
        `Computer: ${computerChose} - ${playerName}: ${playerChose}. Spock smashes scissors.` +
          chalk.hex("ffff00").bold(` ${playerName} won!`)
      );
      playerScore++;
      playAgain();
    }
  }
};

wannaPlay();
