var stats = {
    Wins: 0,
    Losses: 0,
    Ties: 0
}

var AcceptedValues = ["R", "P", "S"];


var userChoice = window.prompt("Welcome to Rock, Paper, Scissors! Please enter R, P, or S ");



//getrndm function
// function ComputerChoice(length) {
//     return Math.floor(Math.random() * length);
//   }

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "Rock";
} 
else if(computerChoice <= 0.67) {
    computerChoice = "Paper";
} 
else {
    computerChoice = "Scissors";
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

// if statement that checks if user input is R, P, or S
if (userChoice === "R") {
    window.alert("You chose Rock");
    var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "Rock";
} 
else if(computerChoice <= 0.67) {
    computerChoice = "Paper";
} 
else {
    computerChoice = "Scissors";
}
    window.alert("The computer chose " + computerChoice);
}

if (userChoice === "P") {
    window.alert("You chose Rock");
    var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "Rock";
} 
else if(computerChoice <= 0.67) {
    computerChoice = "Paper";
} 
else {
    computerChoice = "Scissors";
}
    window.alert("The computer chose " + computerChoice);
}

if (userChoice === "S") {
    window.alert("You chose Rock");
    var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "Rock";
} 
else if(computerChoice <= 0.67) {
    computerChoice = "Paper";
} 
else {
    computerChoice = "Scissors";
}
    window.alert("The computer chose " + computerChoice);
}