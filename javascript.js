//console.log("Hello World");

let playerChoice = " ";
//score keeping vars
let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let index =  Math.floor(Math.random() * 3);
    return choices[index];
    
}






function getHumanChoice(){
    let choice = prompt("Choose a hand to play for the game", 
                        "will you choose rock, paper, or scissors?");
    
    if(choice.toLowerCase() == "rock"){
        return playerChoice = "rock";
    }
    else if(choice.toLowerCase() == "paper"){
        return playerChoice = "paper";
    }
    else if(choice.toLowerCase() == "scissors"){
        return playerChoice = "scissors";
    }
    else{
        console.log("not proper choice");
    }
 
}

//console.log(getHumanChoice());


function playRound(humanChoice, computerChoice){
    //paper beats rock, rock beats scissors, scissors beats paper

    //human victories
    if( humanChoice === "rock" && computerChoice === "scissors"){
        humanScore+= 1;
        console.log("humanScore + 1: " + humanScore);
    }
    else if( humanChoice === "scissors" && computerChoice === "paper"){
        humanScore+= 1;
    }
    else if( humanChoice === "paper" && computerChoice === "rock"){
        humanScore+= 1;
    }//Computer victories
    else if(computerChoice === "rock" && humanChoice === "scissors" ){
        computerScore+= 1;
    }
    else if(computerChoice === "scissors" && humanChoice === "paper" ){
        computerScore+= 1;
    }
    else if(computerChoice === "paper" && humanChoice === "rock" ){
        computerScore+= 1;
    }
    





    if(humanScore>computerScore){
        return console.log("humans have won");
    }
    else{
        return console.log("computer has won");
    }
}






function playGame(num_rounds_desired_to_be_played){
    //let humanSelection = getHumanChoice();
    //let computerSelection = getComputerChoice();
    //console.log("Computer choice: "+ computerSelection);
    for(let i = 0; i <num_rounds_desired_to_be_played; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log("Computer choice: "+ computerSelection);
        console.log("Human choice: "+ humanSelection);
        playRound(humanSelection, computerSelection);
    }

    if(humanScore> computerScore){
        console.log("Human has won the game");
    }
    else{
        console.log("Computer has won the game");
    }
}
playGame(5);