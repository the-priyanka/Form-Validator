let form = document.getElementById("form");
let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");
let messageContainer = document.querySelector(".message-container");
let message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using constraint API
  isValid = form.checkValidity();
  // style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }

  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  validateForm();
  // submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}
// Event Listeners
form.addEventListener("submit", processFormData);
