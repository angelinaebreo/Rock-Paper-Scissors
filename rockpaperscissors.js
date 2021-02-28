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
  let answer = readline.keyInYN(chalk.hex('ecc6ec').bold(
    "Would you like to play 'Rock Paper Scissors'? \n")
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
    startGame();
  } else {
    console.log(
      `Final score is: computer ${computerScore} - ${playerName} ${playerScore}`
    );
    quitGame();
  }
};

const startGame = () => {
  console.log(
    "Instructions: Rock breaks scissors, scissors cut paper, paper covers rock"
  );
  playerName = readline.question("What is your name? \n")
gameLoop()
};

const gameLoop = () => {
playerChoice()
   
  };

const playerChoice = () => {
  playerChose = readline.question(
    "What do you choose: rock, paper, or scissors? \n"
  );
  if (playerChose === "rock" || playerChose === "paper" || playerChose === "scissors") {
  computerChoice();
  }
};

const computerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomN = Math.floor(Math.random() * Math.floor(3));
  computerChose = options[randomN];
 whoWon()
};

const whoWon = () => {
 

    if (playerChose === "rock") {
      if (computerChose === "rock") {
        console.log("It is a tie");
        playAgain();
      } else if (computerChose === "paper") {
        console.log("Computer won!");
        computerScore++;
        playAgain();
      } else if (computerChose === "scissors") {
        console.log(`${playerName} won!`);
        playerScore++;
        playAgain();
      }
    } else if (playerChose === "paper") {
      if (computerChose === "paper") {
        console.log("It is a tie");
        playAgain();
      } else if (computerChose === "rock") {
        console.log(`${playerName} won!`);
        playerScore++;
        playAgain();
      } else if (computerChose === "scissors") {
        console.log("Computer won!");
        computerScore++;
        playAgain();
      }
    } else if (playerChose === "scissors") {
      if (computerChose === "scissors") {
        console.log("It is a tie");
        playAgain();
      } else if (computerChose === "rock") {
        console.log("Computer won!");
        computerScore++;
        playAgain();
      } else if (computerChose === "paper") {
        console.log(`${playerName} won!`);
        playerScore++;
        playAgain();
      }
    }


//   if (playerChose === "rock" && computerChose === "rock") {
//     console.log("It is a tie");
//     playAgain();
//   } else if (playerChose === "paper" && computerChose === "paper") {
//     console.log("It is a tie");
//     playAgain();
//   } else if (playerChose === "scissors" && computerChose === "scissors") {
//     console.log("It is a tie");
//     playAgain();
//   } else if (playerChose === "rock" && computerChose === "paper") {
//     console.log("Computer won!");
//     computerScore++;
//     playAgain();
//   } else if (playerChose === "rock" && computerChose === "scissors") {
//     console.log(`${playerName} won!`);
//     playerScore++;
//     playAgain();
//   } else if (playerChose === "scissors" && computerChose === "rock") {
//     console.log("Computer won!");
//     computerScore++;
//     playAgain();
//   } else if (playerChose === "scissors" && computerChose === "paper") {
//     console.log(`${playerName} won!`);
//     playerScore++;
//     playAgain();
//   } else if (playerChose === "paper" && computerChose === "rock") {
//     console.log(`${playerName} won!`);
//     playerScore++;
//     playAgain();
//   } else if (playerChose === "paper" && computerChose === "scissors") {
//     console.log("Computer won!");
//     computerScore++;
//     playAgain();
//   }
};

wannaPlay();
