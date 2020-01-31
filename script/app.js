(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
				puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
				gameBoard = document.querySelector('.puzzle-board');

	const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];



	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources,
		// and set the drop zone background image based on what the user selects

		//change elements on the left to match bg





		// Button below the esc key for those weird quotes
		//.style lets you add css whithin JS
		pieceNames.forEach((piece, index) => puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`);

		gameBoard.style.backgroundImage = `url(images/background${this.dataset.puzzleref}.jpg)`;
		debugger;
	}

	// add event handling here -> how is the user going to use our app?
	// what triggers do we need?

	// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	//RESEARCH CALL APPLY AND BIND
	changeImageSet.call(puzzleButtons[0]);
})();
