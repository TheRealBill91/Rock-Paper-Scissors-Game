


function game() {



    let rounds = 0;
    for (i = 0; i < 5; i++) {
        //create variable to store play selection
        let playerSelection = caseSensitiveInput();
        //create variable to store computer selection 
        let computerSelection = getComputerChoice();
        //create variable that takes user input for rock, paper, or scissors. Needs to be case sensitive
        playRound(playerSelection, computerSelection);
        rounds++;
        console.log(rounds);
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    }

    let winner = () => {
        if (playerScore > computerScore) {
            return "Congrats, you win!"
        } else {
            return "You lose, try again!"
        }
    }

    console.log(winner());

    playerScore = 0;
    computerScore = 0;

    console.log(`Player score (end game): ${playerScore}, Computer score (end game): ${computerScore}`);

}




//function that returns either rock, paper, or scissors, with a random chance for each option.
function getComputerChoice() {
    //Create array containing rock, paper, or scissors
    const options = ['Rock', 'Paper', 'Scissors']

    //variable that randomly generates a number between 0 and 2
    const randomIndex = Math.floor(Math.random() * 3);

    //returns either rock, paper, or scissors randomly by using the randomly generated index number.
    return options[randomIndex]
}





//Create function to convert input of any case type to first letter uppercase and the rest lowercase:
function caseSensitiveInput() {
    //Create variable that takes user input
    let userInput = prompt("Enter rock, paper, or scissors: ");
    let finalResult = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    //console.log(finalResult);
    return finalResult;
}


// //create variable to store play selection
// let playerSelection = caseSensitiveInput();
// //create variable to store computer selection 
// let computerSelection = getComputerChoice();
// //create variable that takes user input for rock, paper, or scissors. Needs to be case sensitive



//test variable
//let computerSelection = "Rock";


//player score variable
let playerScore = 0;

//computer score variable
let computerScore = 0;


//Create function that plays one round of rock paper scissors:
function playRound(playerSelection, computerSelection) {

    //checks to see if playerSelection (variable that stores user input) is one of "Rock", "Paper", or "Scissors"
    if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
        alert("Please enter rock, paper, or scissors ")
        playerSelection = caseSensitiveInput();
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    }

    //compare the results of computer selection and player selection using an if else statement
    //make sure to compare all possible outcomes of rock, paper, or scissors including things like ties

    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++,
            console.log("You lose! Rock beats scissors");
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++,
            console.log("You win! Scissors beats paper");
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++,
            console.log("You lose! Scissors beats paper");
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++,
            console.log("You win! Paper beats rock");
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++,
            console.log("You win! Rock beats scissors");
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++,
            console.log("You lose! Paper beats rock");

    } else
        if (playerSelection == computerSelection) {
            computerSelection = getComputerChoice();
            //playerSelection = caseSensitiveInput();      
            playRound(playerSelection, computerSelection);  //This causes the user input to be assigned to the computerSelection

        }
    //return playerScore, computerScore;
}


