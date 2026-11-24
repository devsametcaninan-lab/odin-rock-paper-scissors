let humanScore = 0;
let computerScore = 0;


const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const buttons = document.querySelectorAll("button");


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


function playRound(humanChoice, computerChoice) {
    
    if (humanScore === 5 || computerScore === 5) return;

    const human = humanChoice.toLowerCase();
    const computer = computerChoice;

    if (human === computer) {
        resultsDiv.textContent = `Tie round! Both picked ${human}.`;
    } else {
        const humanWins =
            (human === "rock" && computer === "scissors") ||
            (human === "paper" && computer === "rock") ||
            (human === "scissors" && computer === "paper");

        if (humanWins) {
            humanScore++;
            resultsDiv.textContent = `You win! ${capitalize(human)} beats ${capitalize(computer)}.`;
        } else {
            computerScore++;
            resultsDiv.textContent = `You lose! ${capitalize(computer)} beats ${capitalize(human)}.`;
        }
    }

    
    scoreDiv.textContent = `Score: ${humanScore} - ${computerScore}`;

    
    if (humanScore === 5) {
        resultsDiv.textContent = `You won the game! Final score: ${humanScore} to ${computerScore}`;
    } else if (computerScore === 5) {
        resultsDiv.textContent = `Computer won the game! Final score: ${computerScore} to ${humanScore}`;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = button.id; 
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});
