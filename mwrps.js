//Mae Wolf
//project 2: Rock, Paper, Scissors updated

let playerChoice = null;

function selectChoice(choice){
    playerChoice = choice
    document.getElementById('playerDisplay').textContent = `Player Choice: ${choice}`;
    document.getElementById('startButton').disabled = false;
    document.getElementById("computerDisplay").textContent = "";
    document.getElementById("resultDisplay").textContent = "";
}

const choices = ["rock", "paper", "scissors"];
const resultDisplay = document.getElementById("resultDisplay");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const prompt = document.getElementById("prompt");

document.getElementById("prompt").textContent = "click an icon and hit go to start!";

function startGame(){
    if (!playerChoice) {
        alert("Please select Rock, Paper, or Scissors first!");
        return;
    }
    const compChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerChoice == compChoice){
        result = "It's a Tie!";
    }else{
        switch(playerChoice.toLowerCase()){
            case "rock":
                result = (compChoice === "scissors") ? "You Win!" : "You Lose :(";
                break;
            case "paper": 
                result = (compChoice === "rock") ? "You Win!" : "You Lose :(";
                break;
            case "scissors":
                result = (compChoice === "paper") ? "You Win!" : "You Lose :(";
                break;
            default:
                result = "invalid please try again"
        }
    }

    playerDisplay.textContent = `Player Choice: ${playerChoice}`;
    computerDisplay.textContent = `Computer Choice: ${compChoice}`;
    resultDisplay.textContent = result;

    //reset for next game
    playerChoice = null;
    document.getElementById('startButton').disabled = true;
    document.getElementById("prompt").textContent = "click an icon and hit go to play again!";

}