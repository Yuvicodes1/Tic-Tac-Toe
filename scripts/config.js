function openPlayerConfig(){
    playerConfigOverlay.style.display='block';
    backdrop.style.display='block';
}

function closePlayerConfig(){
    playerConfigOverlay.style.display='none';
    backdrop.style.display='none';
}

//we get an event object due the presence of the submit event listener
function savePlayerConfig(event){
    event.preventDefault(); //prevents the default behaviour of reloading the page on form submission
    console.log(event);
    const formData = new FormData(event.target); //FormData is a built-in object which extracts all the data from the form
    //event.target gives us the form element. target is the element on which the event happened.
    const enteredPlayername = formData.get('playername').trim(); //we pass the name attribute of the input field to get its value
    console.log(enteredPlayername);
}