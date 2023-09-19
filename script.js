function getComputerChoice(){
    /*Make an array of avaliable choices */
    let choices = ["Rock", "Paper", "Scissors"];
    /*make a variable called computerChoice */
    let computerChoice;
    /* Randomly select a number responding to one of the three options of array*/
    let index = Math.floor(Math.random()*choices.length);
    /*Choose an option corresponding to the number returned in index */
    computerChoice = choices[index];
    return computerChoice;
}
console.log(getComputerChoice());

function playRound(playerChoice,computerChoice){
    /*if player choice is paper 
            and if computer choice is scissor, then lose
            and if computer choice is rock, then win
            else tie*/ 
    
    /*if player choice is scissor
            and if computer choice is rock, then lose
            and if computer choice is paper, then win
            else tie*/ 
    
    /*if player choice is rock
            and if computer choice is paper, then lose
            and if computer choice is scissor, then win
            else tie*/ 
    
};