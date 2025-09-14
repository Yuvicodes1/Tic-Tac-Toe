const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop'); 
const formElement = document.querySelector('form');

const editplayer1btn = document.getElementById('edit-player1-btn');
const editplayer2btn = document.getElementById('edit-player2-btn');
const cancelconfigbtn=document.getElementById('cancel-config-btn');

//CLICK LISTENERS
editplayer1btn.addEventListener('click', openPlayerConfig);
editplayer2btn.addEventListener('click', openPlayerConfig);

cancelconfigbtn.addEventListener('click',closePlayerConfig);
backdrop.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);