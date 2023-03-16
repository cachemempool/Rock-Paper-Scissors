function getComputerChoice() {
    let compChoices = ['Rock', 'Paper', 'Scissors'];
    let compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    return compChoice;
}
//random Computer's selection, returns compChoice
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            let result = 'It\'s a tie! We chose the same!';
            return result;
        } else if (computerSelection === 'Paper') {
            let result = 'You lose! Paper beats Rock!';
            return result;
        } else if (computerSelection === 'Scissors') {
            let result = 'You win! Rock beats Scissors!';
            return result;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            let result = 'You win! Paper beats Rock!';
            return result;
        } else if (computerSelection === 'Paper') {
            let result = 'It\'s a tie! We chose the same!';
            return result;
        } else if (computerSelection === 'Scissors') {
            let result = 'You lose! Scissors beats Paper!';
            return result;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            let result = 'You lose! Rock beats Scissors!';
            return result;
        } else if (computerSelection === 'Paper') {
            let result = 'You win! Scissors beats Paper!';
            return result;
        } else if (computerSelection === 'Scissors') {
            let result = 'It\'s a tie! We chose the same!';
            return result;
        }
    } else {
        let result = 'Invalid selection! Please reload and make a correct choice';
        return result
    }
}
//plays One Round and display result
// console.log(playRound(playerSelection, computerSelection));

function getPlayerChoice() {
    let playerChoice = prompt('Please type "Rock", "Paper", or "Scissors"','');
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    return playerChoice;
}
//Prompt for Players's selection with case sensitivity handler

function game() {
    let wins = 0;
    let losts = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.charAt(4) === "w") {
            wins++;
        } else if (result.charAt(4) === "l") {
            losts++;
        } else { ties++; }
    }
    let outcome = `Out of 5 attempts, you have ${wins} win(s), ${losts} lost(s), and ${ties} tie(s).`;
    return outcome;
}

console.log(game());