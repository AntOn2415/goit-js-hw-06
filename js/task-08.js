const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Будь ласка заповніть усі поля!");
    return;
  }
  console.log({
    name: event.target.elements.email.value,
    password: event.target.elements.password.value,
  });

  form.reset();
}
