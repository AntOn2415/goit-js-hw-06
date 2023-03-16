const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onImputChange);
function onImputChange(event) {
  const inputValue = event.target.value;
  textEl.style.fontSize = `${inputValue}px`;
}
