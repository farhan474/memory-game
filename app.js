const startGame = document.getElementById("startGame");

// starts game once clicked 
startGame.addEventListener("click",
	(e) => {
		createDivsForColors(shuffledColors);
		e.target.remove();
	});

	//restart gamewwed
const restartGame = document.createElement("button");
restartGame.innerText = "Restart Game";
restartGame.addEventListener("click",
	(e) => {
		while (gameContainer.firstChild) 
		{ gameContainer.removeChild(gameContainer.firstChild); }
		e.target.remove();
		createDivsForColors(shuffledColors);
		
	})




// saves score to localStorage if it is lower than current
// updates best score

// ask for number of cards
// create a array with rgb colors and card amout of choice 

