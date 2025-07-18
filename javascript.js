//console.log("Hello World");

function computerChoice(){
    const choices = ["rock", "paper", "sissors"];
    let index =  Math.floor(Math.random() * 3);
    return choices[index];
    
}

//console.log(computerChoice()); //test