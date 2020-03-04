(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
				puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
				dropZone = document.querySelectorAll('.drop-zone'),
				gameBoard = document.querySelector('.puzzle-board');
				pieceHolder = document.querySelector('.puzzle-pieces')

	const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];



	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources,
		// and set the drop zone background image based on what the user selects
		//change elements on the left to match bg
		// Button below the esc key for those weird quotes
		//.style lets you add css whithin JS
		
		pieceNames.forEach((piece, index) => {
			puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
			puzzlePieces[index].id = `${piece + this.dataset.puzzleref}`;
		});




		gameBoard.style.backgroundImage = `url(images/background${this.dataset.puzzleref}.jpg)`;
		resetPuzzlePieces();
	}

	function resetPuzzlePieces(){

		dropZone.forEach ((zone, index) => {
		//goes through each zone
			if (dropZone[index].children[0] === (undefined)){
			// dertermines if there is not a child in the zone
				return;
			//if so doesn't do anything
			}
			else{
    			pieceHolder.appendChild(dropZone[index].children[0]);
    		//if there is one, then append it to the pieceHolder
    		}	
		})

	}



	function allowDrag(){
		console.log('Drag Start!');

			event.dataTransfer.setData("text/plain", this.id);
	}

	function allowDragOver(event){
		event.preventDefault();
		console.log('DragOver Start!');
	}



	function allowDrop(event){
		if (event.target.className == ('drop-zone')) {
			console.log(event.target.class);
			event.preventDefault();
			console.log('Drop Start!');
			let currentImage = event.dataTransfer.getData("text/plain");
			event.target.appendChild(document.querySelector(`#${currentImage}`));
			console.log(event.target.class);
			debugger;
		
		
		event.preventDefault();
		console.log('Drop Start!');

		let currentImage = event.dataTransfer.getData("text/plain");



	}



	// add event handling here -> how is the user going to use our app?
	// what triggers do we need?

	// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));
	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));
	dropZone.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver)
		zone.addEventListener('drop', allowDrop)
	});

	//RESEARCH CALL APPLY AND BIND
	changeImageSet.call(puzzleButtons[0]);
})();
