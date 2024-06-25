let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
    alert("Reload the website to restart the game.");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw.";
    msg.style.backgroundColor = "goldenrod";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        console.log("You lose");
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    console.log(`user choice = ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`comp choice = ${compChoice}`);
    if (userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})