function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("#controls input");
const boxesDivEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  createBoxes(amount);
});

function createBoxes(amount) {
  const boxDivEl = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement(`div`);
    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    size += 10;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxDivEl.push(boxEl);
  }
  boxesDivEl.append(...boxDivEl);
}

btnDestroyEl.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesDivEl.innerHTML = "";
}
