const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getValues();
});

function getValues() {
  const firstnameValue = firstname.value.trim();
  const emailValue = email.value.trim();
  const lastnameValue = lastname.value.trim();
  const passwordValue = password.value.trim();

  if (firstnameValue === "") {
    setError(firstname, "First Name cannot be empty");
  } else {
    setSuccess(firstname);
  }

  if (lastnameValue === "") {
    setError(lastname, "Last Name cannot be empty");
  } else {
    setSuccess(lastname);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be empty");
  } else if (!emailCheck(emailValue)) {
    setError(email, "Looks like this is not an email");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be blank");
  } else {
    setSuccess(password);
  }
}

function setError(value, message) {
  const formControl = value.parentElement;
  const small = formControl.querySelector(".error-message");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccess(value, message) {
  const formControl = value.parentElement;
  const small = formControl.querySelector(".error-message");

  small.innerText = message;
  formControl.className = "form-control success";
}

function emailCheck(email) {
  const getEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return getEmail.test(String(email).toLowerCase());
}
