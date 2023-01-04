//Take user input (either rock, paper, or scissors) and store in /Create array containing rock, paper, and scissors as options for computer:
//create variable that generates a random number between one and three
//return the hands variable with the randomIndex variable as the index value
//



//function that returns either rock, paper, or scissors, with a random chance for each option.
function getComputerChoice() {
    //Create array containing rock, paper, or scissors
    const options = ['Rock', 'Paper', 'Scissors']

    //variable that randomly generates a number between 0 and 2
    const randomIndex = Math.floor(Math.random() * 3);

    //returns either rock, paper, or scissors randomly by using the randomly generated index number.
    return options[randomIndex]
}


//create variable to store play selection
const playerSelection = "rock";
//create variable to store computer selection 
const computerSelection = getComputerChoice();
//create variable that takes user input for rock, paper, or scissors. Needs to be case sensitive

//Create function to convert input of any case type to first letter uppercase and the rest lowercase:
function caseSensitiveInput() {
    //Create variable that takes user input
    let userInput = prompt("Enter rock, paper, or scissors: ")
    let finalResult = userInput.charAt[0].toUpperCase() + userInput.slice(-1);
    return finalResult;
}


//Create function that plays one round of rock paper scissors:
function playRound(computerSelection, playerSelection) {
    //compare the results of computer selection and player selection using an if else statement
    //make sure to compare all possible outcomes of rock, paper, or scissors
    if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock"
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        while (playerSelection == "rock" && computerSelection == "rock") {
            playerSelection = get
        }
    }
}

//console.log(getComputerChoice());

