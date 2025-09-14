function openPlayerConfig(event){
    const selectedPlayedid=+event.target.dataset.playerid; //we use dataset to access data attributes
    editedPlayer=selectedPlayedid; //we store the id of the player being edited in a global variable
    playerConfigOverlay.style.display='block';
    backdrop.style.display='block';
}

function closePlayerConfig(){
    playerConfigOverlay.style.display='none';
    backdrop.style.display='none';
    errorOutputElement.textContent=''; //clearing any previous error message
    formElement.firstElementChild.lastElementChild.value=''; //clearing the input field of the
}

//we get an event object due the presence of the submit event listener
function savePlayerConfig(event){
    event.preventDefault(); //prevents the default behaviour of reloading the page on form submission
    console.log(event);
    const formData = new FormData(event.target); //FormData is a built-in object which extracts all the data from the form
    //event.target gives us the form element. target is the element on which the event happened.
    const enteredPlayername = formData.get('playername').trim(); //we pass the name attribute of the input field to get its value
    console.log(enteredPlayername);

    if(!enteredPlayername){
        // alert('Please enter a valid name!');//alert will show a popup message
        errorOutputElement.textContent='Please enter a valid name!';
        return; //to stop further execution of the function
    }
     
    //now we would want to update the player name in the UI
    //edited player is a string so we convert it to a number
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data'); //we use concatenation to get the correct id
    //selecting correct article dynamically
    updatedPlayerDataElement.children[1].textContent=enteredPlayername; //children[1] is the h3 element

    if(editedPlayer===1){
        players[0].name=enteredPlayername; //updating the players array
    } else{
        players[1].name=enteredPlayername;
    }

    closePlayerConfig();
}