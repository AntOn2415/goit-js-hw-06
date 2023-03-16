const inputEl = document.querySelector("#name-input");
let nameOutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onImputChange);

function onImputChange(event) {
  if (event.currentTarget.value !== "") {
    nameOutputEl.textContent = event.currentTarget.value;
  } else {
    nameOutputEl.textContent = "Anonymous";
  }
}
