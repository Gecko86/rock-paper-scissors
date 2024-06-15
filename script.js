function getComputerChoice() {
    var random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?");
}

function playGame() {
    var humanScore = 0;
    var computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) {
            console.log("Draw!");
            return humanScore++, computerScore++;
        }
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock!");
                return computerScore++;
            } else if (computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors!");
                return humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock!");
                return humanScore++;
            } else if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper!");
                return computerScore++;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors!");
                return computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beats Paper");
                return humanScore++;
            }
        }
    }
    for (let round = 1; round <= 5; round++) {
        console.log("Round ", round);
        playRound();
        if (round === 5) {
            if (humanScore > computerScore) {
                    console.log("You won!");
            } else {
                    console.log("You lost!");
            }
        }
    }
}

playGame();
