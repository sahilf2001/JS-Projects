let hasBlackJack = false;
let isAlive = false;
let cards = [];
let sum = 0;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// document.querySelector("#sum-el") .sum-el body
let cardEl = document.getElementById("card-el");

let player = { //   Objects
    Name: "Per",
    Chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;



function getRandomCard(){
    let randoms = Math.floor(Math.random() * 13) + 1
    if(randoms == 1){
        return 11;
    }else if(randoms >= 11 && randoms <= 13){
        return 10;
    }else{
        return randoms;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
    {
        cardEl.textContent += cards[i] + " ";    
    }  
    sumEl.textContent = "Sum: " + sum;
    if(sum<=20){
        message = "Do u want to draw a card?";
    }else if(sum === 21){
        message = "Wohooo! You have got a Blackjack!";
        hasBlackJack = true;
    }else{
        message = "You are out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the deck!!");
        let newc = getRandomCard();
        sum += newc;
        cards.push(newc);
        startGame();
    }
}
