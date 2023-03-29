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

// function game() {
//     let wins = 0;
//     let losts = 0;
//     let ties = 0;

//     for (let i = 0; i < 5; i++) {
//         let playerSelection = getPlayerChoice();
//         let computerSelection = getComputerChoice();
//         let result = playRound(playerSelection, computerSelection);
//         console.log(result);
//         if (result.charAt(4) === "w") {
//             wins++;
//         } else if (result.charAt(4) === "l") {
//             losts++;
//         } else { ties++; }
//     }
//     let outcome = `Out of 5 attempts, you have ${wins} win(s), ${losts} lost(s), and ${ties} tie(s).`;
//     return outcome;
// }

// console.log(game());

const R = document.querySelector('.R');
const P = document.querySelector('.P');
const S = document.querySelector('.S');

const roundResult = document.createElement('div');
const bod = document.querySelector('.bod');
const score = document.querySelector('.score');

let wins = 0;
let losts = 0;
let ties = 0;




R.addEventListener('click', () => {
    let playerSelection = 'Rock';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection);
    roundResult.textContent = `${result}`;
    bod.appendChild(roundResult);

    if (result.charAt(4) === "w") {
        wins++;
    } else if (result.charAt(4) === "l") {
        losts++;
    } else { ties++; }

    yourWins.textContent = `Your Wins: ${wins}`;;
    computerWins.textContent = `Computer Wins: ${losts}`;  
    checker();              
});

P.addEventListener('click', () => {
    let playerSelection = 'Paper';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection);
    roundResult.textContent = `${result}`;
    bod.appendChild(roundResult);

    if (result.charAt(4) === "w") {
        wins++;
    } else if (result.charAt(4) === "l") {
        losts++;
    } else { ties++; }

    yourWins.textContent = `Your Wins: ${wins}`;;
    computerWins.textContent = `Computer Wins: ${losts}`;
    checker();
});

S.addEventListener('click', () => {
    let playerSelection = 'Scissors';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection);
    roundResult.textContent = `${result}`;
    bod.appendChild(roundResult);
    
    if (result.charAt(4) === "w") {
        wins++;
    } else if (result.charAt(4) === "l") {
        losts++;
    } else { ties++; }

    yourWins.textContent = `Your Wins: ${wins}`;;
    computerWins.textContent = `Computer Wins: ${losts}`;
    checker();
});


const yourWins = document.createElement('h3');
const computerWins = document.createElement('h3');

score.appendChild(yourWins);
score.appendChild(computerWins);

yourWins.textContent = `Your Wins: ${wins}`;;
computerWins.textContent = `Computer Wins: ${losts}`;



function checker() {
if ((wins === 5) || (losts === 5)) {
    document.querySelector('.buttons').style.display = 'none';
    
    if (yourWins === 5) {
        yourWins.textContent = 'You WON!';
        computerWins.style.display = 'none';
    } else {
        yourWins.textContent = 'You LOST!';
        computerWins.style.display = 'none';
    }
}

}

// roundResult.textContent = `${result}`;