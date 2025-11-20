function showData(){
  const NAME = localStorage.getItem("name");
  document.getElementById("display-name").innerHTML = NAME;

  const SURNAME = localStorage.getItem("surname");
  document.getElementById("display-surname").innerHTML = SURNAME;

  const MAIL = localStorage.getItem("mail");
  document.getElementById("display-mail").innerHTML = MAIL;

  const PHONE = localStorage.getItem("phone");
  document.getElementById("display-phone").innerText = PHONE;
}

showData();