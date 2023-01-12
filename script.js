


//function that returns either rock, paper, or scissors, with a random chance for each option.
function getComputerChoice() {
    //Create array containing rock, paper, or scissors
    const options = ['Rock', 'Paper', 'Scissors']

    //variable that randomly generates a number between 0 and 2
    const randomIndex = Math.floor(Math.random() * 3);

    //returns either rock, paper, or scissors randomly by using the randomly generated index number.
    return options[randomIndex]
}


//let rounds = 1;



//Create function to convert input of any case type to first letter uppercase and the rest lowercase:
// function caseSensitiveInput() {
//     //Create variable that takes user input
//     let userInput = prompt(`Enter rock, paper, or scissors: `);
//     let finalResult = userInput.charAt(0).toUpperCase() +
//         userInput.slice(1).toLowerCase();
//     //console.log(finalResult);
//     return finalResult;
// }


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

//let computerSelection = getComputerChoice();
//let playerSelection = caseSensitiveInput()
let result;

//console.log(rpsEventListener());

let playerSelection;
let computerSelection;
let divResult = document.querySelector('.results');
let score = document.querySelector('.runningScore');
let parent = document.querySelector('.parent');
const buttons = document.querySelectorAll('button');
const buttonsDiv = document.querySelector('.buttonsDiv')

rpsEventListener();





function rpsEventListener() {
    buttons.forEach(button => button.addEventListener('click', playRound));
}

// function clickOption() {
//     playerSelection = this.textContent;
//     computerSelection = 'Rock';

//     //return playerSelection, computerSelection;

// }


//computerSelection = getComputerChoice();
//console.log(playerSelection);
//result = playRound(playerSelection, computerSelection);
//divResult.textContent = result;
//console.log(result);


//





//console.log(clickOption());

function game() {
    //const buttons = document.querySelectorAll('button');
    if (playerScore >= 5 && (playerScore >= computerScore)) {
        let parent = document.querySelector('.parent');

        //console.log('You win');
        parent.removeChild(score);
        parent.removeChild(buttonsDiv);
        //buttons.forEach(button => parent.removeChild(button));
        parent.removeChild(divResult);
        const youWinDiv = document.createElement('div');
        const youWinP = document.createElement('p');

        youWinDiv.classList.add('youWinDiv');
        youWinP.classList.add('youWinP');
        youWinP.textContent = 'You Won!';
        youWinDiv.appendChild(youWinP);
        parent.appendChild(youWinDiv);
    } else if (computerScore >= 5 && (computerScore >= playerScore)) {
        console.log('You lose');
        parent.removeChild(score);
        parent.removeChild(buttonsDiv);
        parent.removeChild(divResult);
        const youLoseDiv = document.createElement('div');
        const youLoseP = document.createElement('p');

        youLoseDiv.classList.add('youLoseDiv');
        youLoseP.classList.add('youLoseP');
        youLoseP.textContent = 'You Lost. Better luck next time!';
        youLoseDiv.appendChild(youLoseP);
        parent.appendChild(youLoseDiv);

    }

    //playerScore = 0;
    //computerScore = 0;


    //console.log(`rounds: ${(i + 1)}`);
    //console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    //return divResult.textContent = result;
    //}

    // let winner = () => {
    //     if (playerScore > computerScore) {
    //         return "Congrats, you win!"
    //     } else {
    //         return "You lose, try again!"
    //     }
    // }



    //console.log(winner());

    //used to reset player and computer scores after each game
    //playerScore = 0;
    //computerScore = 0;

    //Used to test if player and computer scores are resetting after each game
    //console.log(`Player score (end game): ${playerScore}, Computer score (end game): ${computerScore}`);

}



//Function that plays one round of rock paper scissors:
function playRound(playerSelection, computerSelection) {

    playerSelection = this.textContent;
    computerSelection = getComputerChoice();

    //compare the results of computer selection and player selection using an if else statement
    if (playerSelection == computerSelection) {
        //console.log("It's a tie!");
        divResult.textContent = 'Its a tie!';
        score.textContent = `Player score: ${playerScore}, Computer Score: ${computerScore}`
        //parent.removeChild(score);
        //return;
        //console.log(computerScore, playerScore);
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++;
        divResult.textContent = "You lose! Rock beats Scissors";
        score.textContent = `Player score: ${playerScore}, Computer Score: ${computerScore}`
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++;
        divResult.textContent = "You win! Scissors beats Paper";
        score.textContent = `Player score: ${playerScore}, Computer Score: ${computerScore}`
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++;
        divResult.textContent = "You lose! Scissors beats Paper";
        score.textContent = `Player score: ${playerScore}, Computer Score: ${computerScore}`
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++;
        divResult.textContent = "You win! Paper beats Rock";
        score.textContent = `Player score: ${playerScore}, Computer Score: ${computerScore}`
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++;
        divResult.textContent = "You win! Rock beats Scissors";
        score.textContent = `Player score: ${playerScore}, Computer Score: ${computerScore}`
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        divResult.textContent = "You lose! Paper beats Rock";
        score.textContent = `Player score: ${playerScore}, Computer Score: ${computerScore}`

    } else {
        return;
    }

    game();

    //console.log(this.classList.value);
}

//console.log(playRound);




