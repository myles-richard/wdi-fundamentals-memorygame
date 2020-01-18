const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
    rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}
];
const cardsInPlay = [];
// check for match
let win = 0;
let loss = 0;
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
		console.log(win++);
		document.getElementById('win').innerHTML = win;
	} else {
		alert('Sorry, try again.');
		console.log(loss++);
		document.getElementById('loss').innerHTML = loss;
	}
};

// store all steps related to selecting, or flipping over a card
function flipCard() {
	const cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
if(cardsInPlay.length === 2) {
	checkForMatch();
};
 console.log('User flipped' + cards[cardId].rank);
 cardsInPlay.push(cards[cardId].rank);
 console.log(cards[cardId].cardImage);
 console.log(cards[cardId].suit);
};

// reset button 
function resetGame() {
	const newCards = document.getElementsByTagName('img');
	for(let i = 0; i < newCards.length; i++) {
		newCards[i].setAttribute('src', 'images/back.png');
		
		cardsInPlay.length = 0;
	}
};
const button = document.querySelector('button');
button.addEventListener('click', resetGame);

// creating game board
function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();




