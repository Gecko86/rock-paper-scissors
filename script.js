let humanScore = 0;
let computerScore = 0;
let winner = "";

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    //humanChoice = getHumanChoice().toLowerCase();
    //computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        winner = "none"
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++
        winner = "human"
    }
    if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++
        winner = "computer"
    }
}

function gameIsOver() {
    if (humanScore === 5 || computerScore === 5) {
        return true;
    } else {
        return false;
    }
}

//Buttons//
const rockButton = document.getElementById('btn-rock');
const paperButton = document.getElementById('btn-paper');
const scissorsButton = document.getElementById('btn-sci');

rockButton.addEventListener('click', () => buttonClicks("rock"));
paperButton.addEventListener('click', () => buttonClicks("paper"));
scissorsButton.addEventListener('click', () => buttonClicks("scissors"));

//Score//
const currentScore = document.getElementById('current-score');
const humanPoints = document.getElementById('player-score');
const computerPoints = document.getElementById('computer-score');

//Announcements//
const overlay = document.getElementById('end-container');
const finalMessage = document.getElementById('final-message');

function buttonClicks(playerInput) {
    const computerInput = getComputerChoice();
    playRound(playerInput, computerInput);
    score();
}

function score() {
    if (winner === "none") {
        currentScore.textContent = "It's a Draw!";
    } else if (winner === "human") {
        currentScore.textContent = "You Won!";
    } else if (winner === "computer") {
        currentScore.textContent = "You Lost!";
    }
    if (gameIsOver()) {
        overlay.style.display = "block";
        announceWinner();
    }
    humanPoints.textContent = "Your Score: " +humanScore+ "!";
    computerPoints.textContent = "Computer Score: " +computerScore+ "!";
}

function announceWinner() {
    if (winner === "computer") {
        finalMessage.textContent = "Computer won this game! ";
    } else if (winner ==="human") {
        finalMessage.textContent = "You won this game! ";
    }
}
