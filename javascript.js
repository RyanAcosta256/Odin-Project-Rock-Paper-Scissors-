//console.log("Hello World");

function computerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let index =  Math.floor(Math.random() * 3);
    return choices[index];
    
}
let playerChoice;
console.log(computerChoice()); //test



function getHumanChoice(){
    
    const choiceButton = document.querySelector("#choiceButton");

    choiceButton.addEventListener("click",() => {
        let sign = prompt("choose: rock, papper, or scissors");
        






    });

}