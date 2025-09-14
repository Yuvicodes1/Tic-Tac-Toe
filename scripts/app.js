let editedPlayer = 0;
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