const categoriesEl = document.querySelector(`#categories`);
const itemEl = categoriesEl.querySelectorAll(`.item ul`);
const titleCategoriesEl = document.querySelectorAll("h2");

const numberOfCategories = categoriesEl.childElementCount;
console.log(`Number of categories: ${numberOfCategories}`);

const showsCategories = () => {
  itemEl.forEach((element, i) => {
    const categoriesNames = titleCategoriesEl[i].textContent;
    const numberOfItems = element.childElementCount;
    console.log(`Category: ${categoriesNames}`);
    console.log(`Elements: ${numberOfItems}`);
  });
};
showsCategories();
