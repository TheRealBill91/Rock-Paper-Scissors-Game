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

console.log(getComputerChoice());

