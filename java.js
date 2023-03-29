var stats = {
    Wins: 0,
    Losses: 0,
    Ties: 0
}

var AcceptedValues = ["R", "P", "S"];


var userChoice = window.prompt("Welcome to Rock, Paper, Scissors! Please enter R, P, or S ");


//declare computerChoice fucniton
function ComputerChoice() {

}


//getrndm function
function getRndNum(length) {
    return Math.floor(Math.random() * length);
  }

// for loop that checks if user input is either R, P, or S
for (var i = 0; i < AcceptedValues.length; i++) {
    if (AcceptedValues[i] === userChoice) {
        console.log("You chose " + userChoice);
        var computerChoice = Math.random();
    }
    else {
        console.log("Please enter R, P, or S");
    }
}