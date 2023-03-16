const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Будь ласка заповніть усі поля!");
  }
  const formData = new FormData(event.currentTarget);
  console.log("formData:", formData);

  formData.forEach((value, name) => {
    console.log("name:", name);
    console.log("value:", value);
  });
  form.reset();
}
