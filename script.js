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
