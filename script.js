//Take user input (either rock, paper, or scissors) and store in variable


//Create array containing rock, paper, and scissors as options for computer:
//create variable that generates a random number between one and three
//return the hands variable with the randomIndex variable as the index value
//

function getComputerChoice() {
  const options = ['Rock', 'Paper', 'Scissors']
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex]
}

console.log(getComputerChoice());

//console.log(Math.floor(Math.random() * 3));