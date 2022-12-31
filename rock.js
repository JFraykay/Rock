function getComputerChoice() {
    const arrayChoices = ['Rock', 'Paper', 'Scissors'];
    const random = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
    const insensitiveComputerChoice = random.toLowerCase();
    return insensitiveComputerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Type Rock, Paper or Scissors");
    let insensitivePlayerChoice = playerChoice.toLowerCase();
    return insensitivePlayerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie. You had the same weapon as your opponent";
    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock") {
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`;
    } else if (playerSelection !== "rock" || playerSelection !== "scissors" || playerSelection !== "paper") {
        return "User error. Please input the correct item.";
    } else {
        return `You got beat by a computer! The computers' ${computerSelection} destroyed your ${playerSelection} and it took all your money!`;
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
