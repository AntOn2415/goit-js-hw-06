const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsEl = document.querySelector(`#ingredients`);

const itemsEl = ingredients.map(ingredient => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add(`item`);
  itemEl.textContent = ingredient;

  return itemEl;
});

ingredientsEl.append(...itemsEl);
