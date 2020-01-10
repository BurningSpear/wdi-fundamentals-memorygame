const numberOfCards = 2;
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
//checking for a matching cards if cardsInPlay
 function checkForMatch(){
 //logic to check if 2 cads are in play
		if (cardsInPlay.length === 2){
		//check for match
			if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("Hippie Ya!!!. Dude, Yo Cards are great");
				playerScore++;
				scoreDisplay.textContent = playerScore;
			} else {
				alert("Hey dude, not yo day tody. Try again, Loser!!!");
			}
		}
	}
// logic when users flips a card and checkForMatch
function flipCard(cardId) {
cardsInPlay.push(cards[cardId]);
	if(cardsInPlay.length === 2) {
		checkForMatch();
		console.log("User flipped" + cards[cardId]);
	}	
};


/*
const cardOne = cards[0];
cardsInPlay.push(cardOne);

const cardTwo = cards[1];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === numberOfCards) { 	
	if (cardsInPlay[0] === cardsInPlay[1]) { 
   alert ("Hippie Ya!!!. Dude, Yo Cards are great");
}
else alert (" Hey dude, try again. Loser!!!")
}
console.log("User flipped " + cardsInPlay);
*/
