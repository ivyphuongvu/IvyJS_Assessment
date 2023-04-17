

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  dateOfBirth = id("DOB"),
  phone = id("phone"),
  email = id("email"),
  psw = id("psw"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  popUpMessage(username, 0, "Invalid Username");
  popUpMessage(dateOfBirth, 1, "Invalid Date of Birth");
  popUpMessage(phone, 2, "Invalid Phone Number");
  popUpMessage(email, 3, "Invalid Email Address");
 popUpMessage(psw, 4, "Invalid Password");
});




let popUpMessage = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
