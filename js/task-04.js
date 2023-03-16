let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');
let valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  valueEl = document.querySelector("#value");
  valueEl.textContent = counterValue -= 1;
});

incrementBtn.addEventListener("click", () => {
  valueEl = document.querySelector("#value");
  valueEl.textContent = counterValue += 1;
});
