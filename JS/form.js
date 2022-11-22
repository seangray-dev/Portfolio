const form = document.getElementById("form_contact");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  console.log("Submit clicked");
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === "") {
    setErrorFor(name, "Name cannot be blank");
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Sorry, invalid format here");
  }

  if (messageValue === "") {
    setErrorFor(message, "Message cannot be blank");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector("p");
  formControl.className = "form-control error";
  error.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
