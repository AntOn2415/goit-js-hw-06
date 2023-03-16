const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onImputValidation);
function onImputValidation(event) {
  const inputValueLength = event.target.value.length;
  const inputDataLength = Number.parseInt(event.target.dataset.length);

  if (inputValueLength !== inputDataLength) {
    this.classList.add("invalid");
  } else {
    this.classList.add("valid");
    this.classList.remove("invalid");
  }
}
