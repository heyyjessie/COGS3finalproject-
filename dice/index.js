// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();
var rollHistory = []; // Array to store roll history

function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";
      balance += 5;
    } else {
      outcome = "It's a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    rollHistory.push(banner + " - " + outcome);
}

function letsPlay() {
    // Retrieve user input value
    var userInput = document.getElementById("userInput").value;
    numRolls = parseInt(userInput);

    if (isNaN(numRolls) || numRolls <= 0) {
        alert("Please enter a valid number of rolls.");
        return;
    }

    // Reset balance and output
    balance = 0;
    rollHistory = [];
    document.getElementById("resultDisplay").innerHTML = "";

    // Roll the dice and determine the outcome for the specified number of times
    for (var i = 0; i < numRolls; i++) {
        rollDice();
        whoWon();
    }

    // Display final balance and roll history
    document.getElementById("resultDisplay").innerHTML = 
        "Final balance after " + numRolls + " rolls is: $" + balance + 
        "<br><br>Roll History:<br>" + rollHistory.join("<br>");
}