function editNav() {
  var x = document.getElementById("myTopnav");
  if(x.className === "topnav"){
    x.className += " responsive";
  }else{
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".closing");
const whitebg = document.querySelector(".hero-section");

// launch modal form and position top page
function launchModal(){
  modalbg.style.display = "block";
  window.scrollTo(0, 0);
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", close);
closeBtn.addEventListener("click", close);

// close modal function
function close(){
  modalbg.style.display = "none";
}

// hide elements when form is not valide
closeBtn.style.display = "none";
document.getElementById("closingDev").style.display = "none";

// validate the form if all the required areas are filled
// get each element by it's ID from the input and compare
const form = document.getElementById("form");
form.addEventListener("submit", function(event){
  event.preventDefault();
  let errorCounter = 0;
  // first name minimum 2 letters
  let firstName = document.getElementById("first").value;
  if(firstName.length < 2){
    // alert("Veuillez-ajouter un prénom avec 2 caractères minimum");
    document.getElementById("first_error").innerHTML = "Veuillez-ajouter un prénom avec 2 caractères minimum";
    document.getElementById("first_error").style.color = "red";
    document.getElementById("first").style.borderColor = "red";
    document.reserve.first.focus();
    errorCounter++;
  }else{
    document.getElementById("first_error").innerHTML = "";
    document.getElementById("first").style.borderColor = "";
  }

  // last name minimum 2 letters
  let lastName = document.getElementById("last").value;
  if(lastName.length < 2){
    // alert("Veuillez-ajouter un nom avec 2 caractères minimum");
    document.getElementById("last_error").innerHTML = "Veuillez-ajouter un nom avec 2 caractères minimum";
    document.getElementById("last_error").style.color = "red";
    document.getElementById("last").style.borderColor = "red";
    errorCounter++;
  }else{
    document.getElementById("last_error").innerHTML = "";
    document.getElementById("last").style.borderColor = "";
  }

  // e-mail validation
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let sendEmail = !document.getElementById("email").value.match(mailformat);
  if(sendEmail){
    // alert("Veuillez-ajouter un email valide");
    document.getElementById("email_error").innerHTML = "Veuillez-ajouter un email valide";
    document.getElementById("email_error").style.color = "red";
    document.getElementById("email").style.borderColor = "red";
    errorCounter++;
  }else{
    document.getElementById("email_error").innerHTML = "";
    document.getElementById("email").style.borderColor = "";
  }

  // date of birth validation
  let birthDay = document.getElementById("birthdate").value;  
  if(birthDay === "") {
    // alert("Veuillez-enter une date valide 5");
    document.getElementById("date_error").innerHTML = "Veuillez-enter une date valide";
    document.getElementById("date_error").style.color = "red";
    document.getElementById("birthdate").style.borderColor = "red";
    errorCounter++;
  }else{
    document.getElementById("date_error").innerHTML = "";
    document.getElementById("birthdate").style.borderColor = "";
  }

  // number of participation an integer
  let quantity = document.getElementById("quantity").value;
  if (quantity == "" || isNaN(quantity) || quantity > 99 || quantity < 0){
    // alert("ce champs est obligatoire il faut mettre une valeur");
    document.getElementById("quantity_error").innerHTML = "ce champs est obligatoire il faut mettre une valeur";
    document.getElementById("quantity_error").style.color = "red";
    document.getElementById("quantity").style.borderColor = "red";
    errorCounter++;
  }else{
    document.getElementById("quantity_error").innerHTML = "";
    document.getElementById("quantity").style.borderColor = "";
  }

  // at least one button radio is selected
  let citySelected = document.querySelector('input[name="location"]:checked');
  if(!citySelected){
    // alert("Veuillez-selectionner un choix");
    document.getElementById("location_error").innerHTML = "Veuillez-selectionner un choix";
    document.getElementById("location_error").style.color = "red";
    errorCounter++;
  }else{
    document.getElementById("location_error").innerHTML = "";
  }
    
  // the general condition case is checked
  let rulesAccepted = document.querySelector('input[id="checkbox1"]:checked');
  if(!rulesAccepted){
    // alert("Veuillez-lire et cocher les conditions générales");
    document.getElementById("checkbox_error").innerHTML = "Veuillez-lire et cocher les conditions générales";
    document.getElementById("checkbox_error").style.color = "red";
    errorCounter++;
  }else{
    document.getElementById("checkbox_error").innerHTML = "";
  }

  // Validation
  if(errorCounter === 0){
    form.remove();
    document.getElementById("message").innerHTML = "Merci pour votre inscription";
    closeBtn.style.display = "block";
    document.getElementById("closingDev").style.display = "flex";
  }else{
    document.getElementById("message").innerHTML = "";
    document.getElementById("closingDev").style.display = "none";
  }
});