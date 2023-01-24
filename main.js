

const options = ["rock", "paper", "scissors"];


function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome to RPS!")
    for(let i = 0; i <= 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("------------")
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Player Wins");
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer Wins");
    }
    else{
        console.log("We have a tie!");
    }
}


function getPlayerChoice() {
    let validateInput = false;
    while(validateInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validateInput = true;
            return choiceInLower;
        }
    }
}

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    //console.log(choice);
    return choice; 
    
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    } 
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a Tie!"
    }
    else if(result == "Player"){ 
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

game();
