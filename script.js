let score = 0 

const rollButton = document.querySelector(".button");
const diceImage = document.querySelector(".diceImage");
const newGame = document.querySelector(".newGame");

rollButton.style.visibility = 'hidden'
newGameFunction = () => {
    score = 0;
    document.querySelector(".playerScore").textContent = `your score is ${score}`
    newGame.style.visibility = 'hidden';
    rollButton.style.visibility = 'visible';
}

newGame.addEventListener("click", () => {
    newGameFunction();
})


rollButton.addEventListener("click", () => {
// alert("boom")
    let randomRoll = Math.floor(Math.random() * 6) + 1;
    console.log(randomRoll);
    diceImage.src =`img/dice${randomRoll}.png`;   // the files are numbered from 1 - 6 so it links it just adds the number linking each image to the number
    
    if (randomRoll != 1){
        score += randomRoll
        console.log(`your score is: ${score} `);
        document.querySelector(".playerScore").textContent = `Your score is ${score} `
        hasThePlayerWon();
    }
    else {score = 0
    console.log(`your score is : ${score}`);
    document.querySelector(".playerScore").textContent = `Your score is ${score}`;
    document.querySelector(".playerInfo").textContent = "you lost."
    }
})

const hasThePlayerWon = () => {
    if (score > 20) {
        console.log("Winner.");
        document.querySelector(".playerInfo").textContent = "You Won"
        score = 0
        rollButton.style.visibility = 'hidden'
        newGame.style.visibility = 'visible'

    }
}


let playerOneTurn = true;
if (playerOneTurn == true) {
    
    playerOneTurn = false
}
