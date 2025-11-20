function listenForValidation() {
  const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
  PERSONAL_DATA_FORM.addEventListener("submit", validateForm);
}

function validateForm(e){
    const NAME = document.getElementById("name").value;
    const SURNAME = document.getElementById("surname").value;
    const MAIL = document.getElementById("mail").value;
    const PHONE = document.getElementById("phone").value;

    let valid = true;

    document.getElementById("error-name-form").textContent = "";
    document.getElementById("error-surname").textContent = "";
    document.getElementById("error-mail").textContent = "";
    document.getElementById("error-phone").textContent = "";

    if (!NAME) {
    document.getElementById("error-name-form").style.visibility = "visible";
    document.getElementById("error-name-form").textContent = "Mandatory field.";
    valid = false;
  }

  if (!SURNAME) {
    document.getElementById("error-surname").style.visibility = "visible";
    document.getElementById("error-surname").textContent = "Mandatory field.";
    valid = false;
  } 

  if (!MAIL) {
    document.getElementById("error-mail").style.visibility = "visible"
    document.getElementById("error-mail").textContent = "Mandatory field.";
    valid = false;
  }

  if (!PHONE) {
    document.getElementById("error-phone").style.visibility = "visible"
    document.getElementById("error-phone").textContent = "Mandatory field.";
    valid = false;
  } 

  if (!valid) {
    e.preventDefault();
  } else {
    saveData(NAME, SURNAME, MAIL, PHONE);
  }
}


function saveData(name, surname, mail, phone) {
  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("mail", mail);
  localStorage.setItem("phone", phone)
}

window.onload = listenForValidation;