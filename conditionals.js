let players = confirm(
  "Player! Are you ready to play rock, paper, scissors game with the computer?"
);

//Display Winner

let selectWinner = (playerChoice, computerChoice) => {
  let win = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (win[playerChoice] === computerChoice) {
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else if (win[computerChoice] === playerChoice) {
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  } else {
    return "It's a tie!";
  }
};

const game = () => {
  let choose = ["rock", "paper", "scissors"];
  let playerScore = 0;
  let computerScore = 0;

  let wrongInput = false;
  let numberOfWrongInput = 0;

  // Check if the users input is valid
  // if not return with mssage, no increase in iteration
  // if valid,
  // check if there is a winner or tie update score

  // display final result

  let i = 0;
  while (i < 5) {
    let playerChoices = prompt(
      "input your choice of opening (rock, paper,scissors)"
    );
    let playerChoice = playerChoices.toLowerCase();
    let isvalidPlayerInput = choose.includes(playerChoice);

    // if(!isvalidPlayerInput){
    //   alert("Try again!");
    //   continue;
    // }

    if (!isvalidPlayerInput && numberOfWrongInput < 4) {
      numberOfWrongInput++;
      alert("You did not input either rock,paper or scissors. Try again!!!");
      continue;
    }

    if (!isvalidPlayerInput) {
      wrongInput = true;
      alert("Wrong player input, Gameover!");
      break;
    }

    numberOfWrongInput = 0;

    alert(`Round ${i + 1}:`);
    let computerChoice = choose[Math.floor(Math.random() * 3)];
    alert(`Player chooses ${playerChoice}`);
    alert(`Computer chooses ${computerChoice}`);

    const result = selectWinner(playerChoice, computerChoice);
    alert(result);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }

    i++;
  }

  if (wrongInput) {
    return;
  }

  alert(`Final Score is Player: ${playerScore}, Computer: ${computerScore}`);

  if (playerScore > computerScore) {
    alert("Congratulations! You win the game!");
  } else if (computerScore > playerScore) {
    alert("Sorry, you lose the game.");
  } else {
    alert("It's a tie game!");
  }
};

// Start the game
game();
