console.log("Start!");

let choices = [
    "ROCK",
    "PAPER",
    "SCISSORS"
]

let winCount = 0;
let lossCount = 0;
let drawCount = 0;

let computerChoice = ''
let playerChoice = ''

function pickRock() {
    playSound();
    playerChoice = choices[0];
    document.querySelector('#title').innerHTML = `<h1>YOU HAVE CHOSEN ROCK.</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>THE COMPUTER HAS CHOSEN ${computerChoice}!<br>${compareChoices(playerChoice, computerChoice)}</h3>`

    updateScore();
}

function pickPaper() {
    playSound();
    playerChoice = choices[1];
    document.querySelector('#title').innerHTML = `<h1>YOU HAVE CHOSEN PAPER.</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>THE COMPUTER HAS CHOSEN ${computerChoice}!<br>${compareChoices(playerChoice, computerChoice)}</h3>`

    updateScore();
}

function pickScissors() {
    playSound();
    playerChoice = choices[2];
    document.querySelector('#title').innerHTML = `<h1>YOU HAVE CHOSEN SCISSORS.</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>THE COMPUTER HAS CHOSEN ${computerChoice}!<br>${compareChoices(playerChoice, computerChoice)}</h3>`

    updateScore()
}

function setComputerChoice() {
    // Select a random rock/paper/scissor/lizard/spock choice
    // let choices = Object.keys(choices)
    let choiceIndex = Math.floor(Math.random() * choices.length)
    computerChoice = choices[choiceIndex]
    return computerChoice;
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        drawCount++;
        return "IT'S A DRAW.";
    } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
        winCount++;
        return "YOU WIN!";
    } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
        lossCount++;
        return "YOU LOSE...";
    } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        winCount++;
        return "YOU WIN!";
    } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
        lossCount++;
        return "YOU LOSE...";
    } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        winCount++;
        return "YOU WIN!";
    } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
        lossCount++;
        return "YOU LOSE...";
    }
}

function updateScore() {
    document.querySelector('#win').innerHTML = `<h5>WINS: ${winCount}</h5>`;
    document.querySelector('#lose').innerHTML = `<h5>LOSSES: ${lossCount}</h5>`
    document.querySelector('#tie').innerHTML = `<h5>DRAWS: ${drawCount}</h5>`
}

function playSound() {
    var audio = document.getElementById("select");
    audio.play();
}

console.log("Finish!");