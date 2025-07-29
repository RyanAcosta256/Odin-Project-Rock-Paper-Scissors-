//console.log("Hello World");

function computerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let index =  Math.floor(Math.random() * 3);
    return choices[index];
    
}
console.log("Computer choice: "+ computerChoice());
let playerChoice = " "'
function getHumanChoice(){
    let choice = prompt("Choose a hand to play for the game", "will you choose rock, paper, or scissors?");
    
    if(choice === "rock")
}

console.log(getHumanChoice());


