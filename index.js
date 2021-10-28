let form = document.getElementById("form");
let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");
let messageContainer = document.querySelector(".message-container");
let message = document.getElementById("message");

let isValid = false;

function validateForm() {
  // Using constraint API
  isValid = form.checkValidity();
  // style main message for an error
  message.textContent = "Please fill out all fields.";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";
}

function processFormData(e) {
  e.preventDefault();
  validateForm();
}
// Event Listeners
form.addEventListener("submit", processFormData);
