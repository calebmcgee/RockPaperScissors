function getComputerChoice (){
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0){
        return "rock";
    } else if (computerChoice === 1){
        return "paper";
    } else if (computerChoice === 2){
        return "scissors";
    }
}
function getPlayerChoice (){
    let playerChoice = prompt("What would you like to throw?");

    //console.log("You chose " + playerChoice);
    return playerChoice.toLowerCase();
}

function playRound (playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You lose! Paper beats Rock.');
        return 'lose';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You lose! Scissors beats Paper.');
        return 'lose';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You lose! Rock beats Scissors.');
        return 'lose';
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
        console.log('You win! Paper beats Rock.');
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('You win! Scissors beats Paper.');
        return 'win';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You win! Rock beats Scissors.');
        return 'win';
    } else if (playerSelection === computerSelection){
        console.log("Draw!")
        return 'draw';
    }
}

function playGame(){
    let playerWins = 0;
    let computerWins = 0;

    

    for (i=0; i < 5; i++){
        console.log(`Round ${i + 1}`);
        let result = playRound(getPlayerChoice(), getComputerChoice());

        if (result === 'win'){
            playerWins = playerWins + 1;
            //console.log(playerWins);
        } else if (result === 'lose'){
            computerWins = computerWins + 1;
            //console.log(computerWins);
        } if (result === 'draw'){
            i = i - 1;
        }
    }
    console.log(`Final Score: Player ${playerWins}, Computer: ${computerWins}`)
    if (playerWins > computerWins) {
        console.log ("You win the game!")
    } else if (playerWins < computerWins){
        console.log("Computer wins the game!")
    }

}
playGame();