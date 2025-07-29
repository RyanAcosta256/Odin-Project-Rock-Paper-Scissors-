//console.log("Hello World");

let playerChoice = " ";
//score keeping vars
let computerScore = 0;
let humanScore = 0;

function computerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let index =  Math.floor(Math.random() * 3);
    return choices[index];
    
}


console.log("Computer choice: "+ computerChoice());



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

console.log(getHumanChoice());


function playRound(humanChoice, computerChoice){
    
}


