
// CPU Selection
const getComputerChoice = function computerPlay() {
    randNumber = Math.floor(Math.random() * 3);
    if (randNumber === 0) {
        return 'rock';
    }
    else if (randNumber === 1) {
        return 'paper';
    }
    else if (randNumber === 2) {
        return 'scissors';
    }
    else {
        return 'error';
    }
}

//User selection
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('Error');
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'CPU Wins'
        }
    }
    else {
        return 'You Win!'
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'CPU Wins'
        }
    }
    else {
        return 'You Win!'
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'CPU Wins'
        }
    }
    else {
        return 'You Win!'
    }
}

function playGame() {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log('You played:' + userChoice);
    console.log('The computer played: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

console.log(playGame());