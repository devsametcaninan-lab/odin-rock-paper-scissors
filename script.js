function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    function getComputerChoice() {
        const randomNumber = Math.random();
        if (randomNumber < 1 / 3) {
            return "rock";
        } else if (randomNumber < 2 / 3) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    function getHumanChoice() {
        const choice = prompt("Enter rock, paper, or scissors:");
        return choice;
    }
    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.toLowerCase();
        const computer = computerChoice;
        if (human === computer) {
            console.log(`Tie round! Both picked ${human}. Score: ${humanScore}-${computerScore}`);
            return
        }
        const humanWins =
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper");
        if (humanWins) {
            humanScore++;
            console.log(
                `You win! ${capitalize(human)} beats ${capitalize(computer)}. Score: ${humanScore}-${computerScore}`
            );
        } else {
            computerScore++;
            console.log(
                `You lose! ${capitalize(computer)} beats ${capitalize(human)}. Score: ${humanScore}-${computerScore}`
            );
        }
    }
    for (let round = 1; round <= 5; round++) {
        console.log(`---Round ${round} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("=== Final Result ===");
    if (humanScore > computerScore) {
        console.log(`You won the game! Final score: ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer won the game! Final score: ${computerScore} to ${humanScore}`);
    } else {
        console.log(`The game ended in a draw! Final score: ${humanScore} to ${computerScore}`);
    }
}
playGame();