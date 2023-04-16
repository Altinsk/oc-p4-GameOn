function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
modalClose.addEventListener("click", function(){ 
  modalbg.style.display = "none";
});

// Validate the form if all the required areas are filled
// Get each element by it's ID from the input and compare
function validate(){
  // First name minimum 2 letters
  if(document.getElementById("first").value.length < 2){
    alert("Veuillez-ajouter un prénom avec 2 caractères minimum");
    document.getElementById("first").style.backgroundColor = "red";
    document.reserve.first.focus();
    return false;
      }else{
        document.getElementById("first").style.backgroundColor = "white";
      }
  // Last name minimum 2 letters
  if(document.getElementById("last").value.length < 2){
    alert("Veuillez-ajouter un nom avec 2 caractères minimum");
    document.getElementById("last").style.backgroundColor = "red";
    document.reserve.last.focus();
    return false;
      }else{
        document.getElementById("last").style.backgroundColor = "white";
      }
  // E-mail validation
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(document.getElementById("email").value.match(mailformat)){
    document.getElementById("email").style.backgroundColor = "green";
    return true;
      }else{
        document.getElementById("email").style.backgroundColor = "red";
        document.reserve.email.focus();
        alert("Veuillez-ajouter un email valide");
        return false;
      }

    
}





// Check the validity of each input item reagrding it's input written
// Ok or error message
// When all is valide the submit button validates the form


