//linked js file 
//cards array
var cards = ["queen", "queen", "king", "king"];
//empty cards array
var cardsInPlay = [];
//setting up cardOne var 
var cardOne = cards[0];
//adding cardOne to cardsInPlay
cardsInPlay.push(cardOne);
//setting up cardTwo var
var cardTwo = cards[2];
//adding cardTwo to cardsInPlay
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) { 
  alert("You found a match!");
} else { 
  alert("Sorry, try again");
};



