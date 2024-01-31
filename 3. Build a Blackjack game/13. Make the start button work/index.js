let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("cardEl");
let sumEl = document.getElementById("sumEl");

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }

    //display the infos
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;
}

function newCard() {
    let newCardNum = Math.floor(Math.random() * 10) + 1;
    sum += newCardNum;
    startGame()
    cardEl.textContent += " " + newCardNum;
}