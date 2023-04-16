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
    document.reserve.first.focus();
    return false;
  }
  // Last name minimum 2 letters
  if(document.getElementById("last").value.length < 2){
    alert("Veuillez-ajouter un nom avec 2 caractères minimum");
    document.reserve.last.focus();
    return false;
  }
  // E-mail validation
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(document.getElementById("email").value.match(mailformat)){
      }else{
        document.reserve.email.focus();
        alert("Veuillez-ajouter un email valide");
        return false;
      }
  // Date of birth validation
  // Date Regex pattern
  let datePattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if(document.getElementById("birthdate").value.match(datePattern)){
    document.reserve.birthdate.focus();
    // Create separators
    let pdate = document.getElementById("birthdate").value.split("/");
    // Collecting day month and year information
    let mm = parseInt(pdate[0]);
    let dd = parseInt(pdate[1]);
    let yy = parseInt(pdate[2]);

    if(mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12){
      	//For the months of Jan, March, May, July, Aug, Oct and Dec
        if(dd > 31){
          alert("Veuillez-enter une date valide 1");
          return false;
        }
    }
    else if(mm == 4 || mm == 6 || mm == 9 || mm == 11){
        //For the months of April, June and Sep
        if (dd > 30){
          alert("Veuillez-enter une date valide 2");
          return false;
        }
    }
    // for the month of Feb
    else if (mm == 2 && dd <= 29){
      let s = false;
        if (yy % 400 == 0 || (yy % 100 !=0 && yy % 4 == 0))
        s = true;
        if (s == false)
        alert("Veuillez-enter une date valide 3");
        return s;
    }else if (mm == 2 && dd > 29){
            alert("Veuillez-enter une date valide 4");
            return false;
          }
  }
  else if(document.getElementById("birthdate").value == "") {
    alert("Veuillez-enter une date valide 5");
    document.reserve.birthdate.focus();
    return false;
  }
  // number of participation an integer
  if (document.getElementById("quantity").value == ""){
    alert("ce champs est obligatoire il faut mettre une valeur");
    document.reserve.quantity.focus();
    return false;
  }else if (isNaN(document.getElementById("quantity").value)){
    alert("Veuillez-écrire une valeur valide");
    document.reserve.quantity.focus();
    return false;
  }else if(document.getElementById("quantity").value > 99 || document.getElementById("quantity").value < 0){
    alert("Veuillez-écrire une valeur valide entre 0 et 99");
    document.reserve.quantity.focus();
    return false;
  }
  // At least one button radio is selected
  let chx = document.querySelector('input[name="location"]:checked');
    if(chx){
      return true;
    }else{
      alert("Veuillez-selectionner un choix");
      return false;
    } 
}

  
      
    

      
       
  
      
    






// Check the validity of each input item reagrding it's input written
// Ok or error message
// When all is valide the submit button validates the form


