function playGame() {
  // Get the user's choice
  var userChoice = prompt("Choose rock, paper, or scissors:");
  
  // Generate the computer's choice
  var computerChoice = Math.random();
  if (computerChoice < 0.33) {
    computerChoice = "rock";
  } else if (computerChoice < 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  
  // Determine the winner
  var result;
  if (userChoice === computerChoice) {
    result = "Tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      result = "Computer wins!";
    } else {
      result = "You win!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      result = "Computer wins!";
    } else {
      result = "You win!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      result = "Computer wins!";
    } else {
      result = "You win!";
    }
  } else {
    result = "Invalid input!";
  }
  
  // Display the results
  alert("You chose " + userChoice + ".\nComputer chose " + computerChoice + ".\n\n" + result);
}
