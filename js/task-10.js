function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
let amount = document.querySelector("#controls input");
const boxesDivEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", () => {
  amount = Number(amount.value);
  createBoxes(amount);
});

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const boxDivEl = document.createElement(`div`);
    boxDivEl.style.width = `${size}px`;
    boxDivEl.style.height = `${size}px`;
    size += 10;
    boxDivEl.style.backgroundColor = getRandomHexColor();
    boxesDivEl.appendChild(boxDivEl);
  }
}

btnDestroyEl.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesDivEl.innerHTML = "";
}
