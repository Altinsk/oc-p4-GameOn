function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav"){
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
const closeBtn = document.querySelector(".fermer");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
modalbg.style.display = "block";
}

// close modal function
function close(){
  modalbg.style.display = "none";
}

// close modal event
modalClose.addEventListener("click", close);

// Hide elements when form is not valide
closeBtn.style.display = "none";
document.getElementById("fermeture").style.display = "none";





// // Form validation with e+= 
// const form = document.getElementById("form");
// form.addEventListener("submit" , event => {
//   event.preventDefault();
//   let error = "";

//   const firstName = document.getElementById("first");
//   if(firstName.length < 2){
//     error += "Veuillez-ajouter un prénom avec 2 caractères minimum\n";
//   }

  // const lastName = getElementById("last");
  // if(lastName.length < 2){
  //   error += "Veuillez-ajouter un nom avec 2 caractères minimum\n";
  // }

  // let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // if(!document.getElementById("email").value.match(mailformat)){
  //   error += "Veuillez-ajouter un email valide\n";
  // }

  // let datePattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  // let date = document.getElementById("birthdate");
  // if(!date.value.match(datePattern)){
  //   error += "Veuillez-ajouter une date valide\n";
  // }

  // let quantity = document.getElementById("quantity").value;
  // if(quantity == "" || isNaN(quantity) || quantity > 99 || quantity < 0){
  //   error += "Veuillez-ajouter une valeur valide\n";
  // }

  // let chx = document.querySelector('input[name="location"]:checked');
  // if(!chx){
  //     error += "Veuillez-selectionner un choix\n";
  // }

  // let conditions = document.querySelector('input[id="checkbox1"]:checked');
  // if(!conditions){
  //     error += "Veuillez-lire et cocher les conditions générales\n";
  //   }

//   if(error.length > 0){
//     alert(error);
//   }else{
//     form.remove();
//   }
// });

// Validate the form if all the required areas are filled
// Get each element by it's ID from the input and compare
//document.reserve.onsubmit =
let errorCounter = 0;
  const form = document.getElementById("form");
  form.addEventListener("submit", function(event){
    event.preventDefault();
// const form = document.getElementById("form");
// document.reserve.onsubmit = function validate(){
// First name minimum 2 letters
let a = document.getElementById("first").value.length < 2;
if(a){
  // alert("Veuillez-ajouter un prénom avec 2 caractères minimum");
  document.getElementById("first_error").innerHTML = "Veuillez-ajouter un prénom avec 2 caractères minimum";
  document.getElementById("first_error").style.color = "red";
  document.getElementById("first").style.borderColor = "red";
  document.reserve.first.focus();
  errorCounter++;
  return false;
}else{
  document.getElementById("first_error").innerHTML = "";
  document.getElementById("first").style.borderColor = "";
}

// Last name minimum 2 letters
let b = document.getElementById("last").value.length < 2;
if(b){
  // alert("Veuillez-ajouter un nom avec 2 caractères minimum");
  document.getElementById("last_error").innerHTML = "Veuillez-ajouter un nom avec 2 caractères minimum";
  document.getElementById("last_error").style.color = "red";
  document.getElementById("last").style.borderColor = "red";
  document.reserve.last.focus();
  errorCounter++;
  return false;
}else{
  document.getElementById("last_error").innerHTML = "";
  document.getElementById("last").style.borderColor = "";
}

// E-mail validation
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let c = !document.getElementById("email").value.match(mailformat);
if(c){
  // alert("Veuillez-ajouter un email valide");
  document.getElementById("email_error").innerHTML = "Veuillez-ajouter un email valide";
  document.getElementById("email_error").style.color = "red";
  document.getElementById("email").style.borderColor = "red";
  document.reserve.email.focus();
  errorCounter++;
  return false;
}else{
  document.getElementById("email_error").innerHTML = "";
  document.getElementById("email").style.borderColor = "";
}

// Date of birth validation
// Date Regex pattern
let datePattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
let d = document.getElementById("birthdate").value == "";  
 if(d) {
  // alert("Veuillez-enter une date valide 5");
  document.getElementById("date_error").innerHTML = "Veuillez-enter une date valide";
  document.getElementById("date_error").style.color = "red";
  document.getElementById("birthdate").style.borderColor = "red";
  document.reserve.birthdate.focus();
  return false;
}else{
  document.getElementById("date_error").innerHTML = "";
  document.getElementById("birthdate").style.borderColor = "";
  errorCounter--;
}

// number of participation an integer
let quantity = document.getElementById("quantity").value;
let e = quantity == "" || isNaN(quantity) || quantity > 99 || quantity < 0;
if (e){
  // alert("ce champs est obligatoire il faut mettre une valeur");
  document.getElementById("quantity_error").innerHTML = "ce champs est obligatoire il faut mettre une valeur";
  document.getElementById("quantity_error").style.color = "red";
  document.getElementById("quantity").style.borderColor = "red";
  document.reserve.quantity.focus();
  errorCounter++;
  return false;
}else{
  document.getElementById("quantity_error").innerHTML = "";
  document.getElementById("quantity").style.borderColor = "";
}
// else if (isNaN(quantity)){
//   alert("Veuillez-écrire une valeur valide");
//   document.reserve.quantity.focus();
//   return false;
// }
// else if(quantity > 99 || quantity < 0){
//   alert("Veuillez-écrire une valeur valide entre 0 et 99");
//   document.reserve.quantity.focus();
//   return false;
// }

// At least one button radio is selected
let f = document.querySelector('input[name="location"]:checked');
  if(!f){
    // alert("Veuillez-selectionner un choix");
    document.getElementById("location_error").innerHTML = "Veuillez-selectionner un choix";
    document.getElementById("location_error").style.color = "red";
    errorCounter++;
    return false;
    }else{
      document.getElementById("location_error").innerHTML = "";
    }
    
// The general condition case is checked
let g = document.querySelector('input[id="checkbox1"]:checked');
  if(!g){
    // alert("Veuillez-lire et cocher les conditions générales");
    document.getElementById("checkbox_error").innerHTML = "Veuillez-lire et cocher les conditions générales";
    document.getElementById("checkbox_error").style.color = "red";
    errorCounter++;
    return false;
    }else{
      document.getElementById("checkbox_error").innerHTML = "";
    }

    let h = (!a && !b && !c && !d && !e);

  // Validation
  if(h === true){
    form.remove();
    document.getElementById("message").innerHTML = "Merci pour votre inscription";
    // let newbtn = document.createElement("button");
    // newbtn.innerText = "Fermer";
    // const dd = document.querySelector(".modal-body");
    // dd.appendChild(newbtn);
    closeBtn.style.display = "block";
    document.getElementById("fermeture").style.display = "flex";

  }else{
    document.getElementById("message").innerHTML = "";
    document.getElementById("fermeture").style.display = "none";
    closeBtn.addEventListener("click", function(){
      modalbg.style.display = "none";
    });



    return false;
  }

  // // A listener on submit
  // const form = document.getElementById("form");
  // form.addEventListener("submit", function(event){
  //     if(validate() == true){
  //       event.preventDefault();
  //       form.remove();      
  //     }else{
  //       alert("Attention");
  //       return false;
  //     }
  
  //   });

});
