function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names for both players!');
        return;
    }

    activePlayer = 0;
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';

    // Reset game data
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gamedata[i][j] = 0;
        }
    }

    // Reset UI
    for (const field of gameFieldElements) {
        field.textContent = '';
        field.classList.remove('disabled');
    }

    // Hide game-over banner for a fresh game
    const gameOverElement = document.getElementById('game-over');
    gameOverElement.style.display = 'none';
    document.getElementById('winner').textContent = 'Player Name';
}


function switchPlayer(){
    if(activePlayer===0){
        activePlayer=1;
    }
    else{
        activePlayer=0;
    }
    activePlayerNameElement.textContent=players[activePlayer].name;
}

function selectGameField(event){
    if(event.target.tagName !=='LI'){
        return ;//to make sure only li elements are processed
    }

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1; //dataset is used to access data attributes
    const selectedRow = selectedField.dataset.row - 1;

    if(gamedata[selectedRow][selectedColumn] > 0){
        alert('Please select an empty field!');
        return;
    }

    selectedField.textContent = players[activePlayer].symbol; // display current player's symbol
    event.target.classList.add('disabled'); //to prevent clicking on the same field again
    //we can also use event.target.removeEventListener('click',selectGameField); to prevent further clicks on the same field
    //but that would require us to add the event listener again when we reset the game
    //so adding a disabled class is a better approach
    gamedata[selectedRow][selectedColumn] = activePlayer + 1; //we store 1 for player 1 and 2 for player 2
    console.log(gamedata);

    const winnerId = checkForGameOver(); // check if game is over
    if (winnerId !== 0) {
        endGame(winnerId); // announce winner or draw
        return;
    }

    switchPlayer();
}
