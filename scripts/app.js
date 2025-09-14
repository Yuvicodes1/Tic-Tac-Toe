const gamedata=[
    [0,0,0],[0,0,0],[0,0,0],
];



let editedPlayer = 0;
let activePlayer=0; //to keep track of whose turn it is
const players=[
    {
        name:'',
        symbol:'X'
    },{
        name:'',
        symbol:'O'
    },
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop'); 
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-error');
const gameAreaElement = document.getElementById('active-game');
const gameFieldElements=document.querySelectorAll('#game-board li'); //selecting all the li elements inside the game board
const activePlayerNameElement=document.getElementById('active-player');
//BUTTONS

const editplayer1btn = document.getElementById('edit-player1-btn');
const editplayer2btn = document.getElementById('edit-player2-btn');
const cancelconfigbtn=document.getElementById('cancel-config-btn');

const startNewGamebtn=document.getElementById('start-game-btn');
//CLICK LISTENERS
editplayer1btn.addEventListener('click', openPlayerConfig);
editplayer2btn.addEventListener('click', openPlayerConfig);

cancelconfigbtn.addEventListener('click',closePlayerConfig);
backdrop.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);

startNewGamebtn.addEventListener('click',startNewGame);

for (const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click',selectGameField);
}

function checkForGameOver() {
  // check rows
  for (let row = 0; row < 3; row++) {
    if (
      gamedata[row][0] > 0 &&
      gamedata[row][0] === gamedata[row][1] &&
      gamedata[row][1] === gamedata[row][2]
    ) {
      return gamedata[row][0];
    }
  }

  // check columns
  for (let col = 0; col < 3; col++) {
    if (
      gamedata[0][col] > 0 &&
      gamedata[0][col] === gamedata[1][col] &&
      gamedata[1][col] === gamedata[2][col]
    ) {
      return gamedata[0][col];
    }
  }

  // check diagonals
  if (
    gamedata[0][0] > 0 &&
    gamedata[0][0] === gamedata[1][1] &&
    gamedata[1][1] === gamedata[2][2]
  ) {
    return gamedata[0][0];
  }

  if (
    gamedata[0][2] > 0 &&
    gamedata[0][2] === gamedata[1][1] &&
    gamedata[1][1] === gamedata[2][0]
  ) {
    return gamedata[0][2];
  }

  // check draw
  let isDraw = true;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (gamedata[row][col] === 0) {
        isDraw = false;
        break;
      }
    }
  }
  if (isDraw) {
    return -1; // code for draw
  }

  return 0; // no winner yet
}


function endGame(winnerId) {
  const gameOverElement = document.getElementById('game-over');
  gameOverElement.style.display = 'block';

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    document.getElementById('winner').textContent = winnerName;
  } else {
    document.getElementById('winner').textContent = 'Nobody – It\'s a draw!';
  }
}
    