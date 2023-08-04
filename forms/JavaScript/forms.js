//variable assignment
//password field 1
password_1 = document.getElementById("password_1");
//first eye icon
show_hide_icon_1 = document.getElementById("show-hide-icon-1");
//password field 2
password_2 = document.getElementById("password_2");
//second eye icon
show_hide_icon_2 = document.getElementById("show-hide-icon-2");
//password field 3
password_3 = document.getElementById("password_3");
//third eye icon
show_hide_icon_3 = document.getElementById("show-hide-icon-3");
//paragraph to inform user if passwords didnt match
alerter = document.getElementById("alerter");
//remove the alert when user clicks on input field
password_1.onclick = () => {
  alerter.style.display = "none";
}
//remove the alert when user clicks on input field
password_2.onclick = () => {
  alerter.style.display = "none";
}
//remove the alert when user clicks on input field
password_3.onclick = () => {
  alerter.style.display = "none";
}
//refers to the first password field
function show_or_hide_1() {
  if (password_1.type === "password") {
    password_1.type = "text";
    show_hide_icon_1.src = "../Images/hide.png";
  } else {
    password_1.type = "password";
    show_hide_icon_1.src = "../Images/show.png";
  }
}
//refers to the second password field
function show_or_hide_2() {
  if (password_2.type === "password") {
    password_2.type = "text";
    show_hide_icon_2.src = "../Images/hide.png";
  } else {
    password_2.type = "password";
    show_hide_icon_2.src = "../Images/show.png";
  }
}
//refers to the third password field
function show_or_hide_3() {
  if (password_3.type === "password") {
    password_3.type = "text";
    show_hide_icon_3.src = "../Images/hide.png";
  } else {
    password_3.type = "password";
    show_hide_icon_3.src = "../Images/show.png";
  }
}
//checks if the two passwords match
function validate() {
  if(password_1 === password_2) {
    password_1.type = "password";
    password_2.type = "password";
    return true;
  }
  //clears password field
  else {
    password_1.value = "";
    password_2.value = "";
    alerter.style.display = "block";
    return false;
  }
}