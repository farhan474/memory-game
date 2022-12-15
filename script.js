const gameContainer = document.getElementById("game");
const turns = document.getElementById("turns");
const bestscoreCount = document.getElementById("bestscore");
var pairs = 0;
var lastCard = null;
// keeps track of cards
var count = 0;
// disables the board
var disabled = false;
var scoreBoard = 0;
var bestScore = localStorage.getItem("score");

bestscoreCount.innerText = bestScore;
const COLORS = [
	"red",
	"blue",
	"green",
	"orange",
	"purple",
	"red",
	"blue",
	"green",
	"orange",
	"purple"
];
// here is a helper function to shuffle cards
// it returns the same array with values shuffled
function shuffle(array) {
	let counter = array.length;
	while (counter > 0) {
		let index = Math.floor(Math.random() * counter);
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}
	return array;
}
let shuffledColors = shuffle(COLORS);

// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		const newDiv = document.createElement("div");
		newDiv.classList.add(color);
		newDiv.setAttribute("id", count);
		count++;
		newDiv.addEventListener("click", handleCardClick);
		gameContainer.append(newDiv);
	}
}

function handleCardClick(event) {
	if (disabled) {
		return false;
	}
	if (!lastCard) {
		lastCard = event.target;
	}
// checks if they are the same color but not the same card
	else if (lastCard.className == event.target.className && lastCard.getAttribute("id") != event.target.getAttribute("id")) {
		lastCard.removeEventListener("click", handleCardClick);
		event.target.removeEventListener("click", handleCardClick);
		lastCard = null;
		++scoreBoard;
		pairs++;
		if (pairs == shuffledColors.length / 2) {
			if (bestScore == null || scoreBoard < bestScore) {
				bestScore = scoreBoard;
				localStorage.setItem("score", bestScore);
			}
			gameContainer.append(restartGame);
			pairs = 0;
		}
		turns.innerText = scoreBoard;
	}
// checks if they are differnt colors
	else if (lastCard.className != event.target.className) {
		disabled = true;
		// reset 1s to 0 after 1 second and flips them
		//console.log(lastCard.stlye.backgroundColor)
		setTimeout(() => {
			//resets  cards
			lastCard.style.backgroundColor = "white";
			event.target.style.backgroundColor = "white";
			//empty last card
			lastCard = null;
			// turns game back on
			disabled = false;
		}, 1000)
		++scoreBoard;
		turns.innerText = scoreBoard.toString();
	}
	//on click it reveals the color
	event.target.style.backgroundColor = event.target.classList;
}

// when the DOM loads
//createDivsForColors(shuffledColors);
/* */