const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorButton = document.querySelector(".scissorButton");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const currentRound = document.querySelector(".currentRound");
const roundSummary = document.querySelector(".roundSummary");

let round = 0;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice (){
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0){
        //console.log(`computer chose ${'rock'}`);
        return "rock";
    } else if (computerChoice === 1){
        //console.log(`computer chose ${'paper'}`);
        return "paper";
    } else if (computerChoice === 2){
        //console.log(`computer chose ${'scissors'}`);
        return "scissors";
    }

}
function getPlayerChoice(choice){
    let playerChoice = choice;
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        roundSummary.textContent = 'You lose! Paper beats Rock.';
        return 'lose';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        roundSummary.textContent = 'You lose! Scissors beats Paper.';
        return 'lose';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        roundSummary.textContent = 'You lose! Rock beats Scissors.';
        return 'lose';
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
        roundSummary.textContent = 'You win! Paper beats Rock.';
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        roundSummary.textContent = 'You win! Scissors beats Paper.';
        return 'win';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        roundSummary.textContent = 'You win! Rock beats Scissors.';
        return 'win';
    } else if (playerSelection === computerSelection){
        roundSummary.textContent = "Draw!";
        return 'draw';
    }
}

function playGame(event){
    let result = '';
    let choice = event.target.textContent.toLowerCase();

   
    result = playRound(getPlayerChoice(choice), getComputerChoice());


    if (result === 'win'){
        playerWins = playerWins + 1;
        //console.log('player' + playerWins);
        round += 1;
    } else if (result === 'lose'){
        computerWins = computerWins + 1;
        //console.log('computer' + computerWins);
        round += 1;
    } if (result === 'draw'){
        //console.log('draw');
    }
    
    playerScore.textContent =  `Player: ${playerWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
    currentRound.textContent = `Round ${round}`;
    if (round === 5){
        round = 0;
        playerWins = 0;
        computerWins = 0;
        currentRound.textContent += ' (Resets after next throw)';
    }
}


rockButton.addEventListener("click", (event) => {
    playGame(event);
});
paperButton.addEventListener("click", (event) => {
    playGame(event);
});
scissorButton.addEventListener("click", (event) => {
    playGame(event);
});



//console.log(`Final Score: Player ${playerWins}, Computer: ${computerWins}`)
/*
if (playerWins > computerWins) {
    console.log ("You win the game!")
} else if (playerWins < computerWins){
    console.log("Computer wins the game!")
}
*/