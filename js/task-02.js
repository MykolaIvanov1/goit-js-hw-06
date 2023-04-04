const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Список в Dom

const listEl = document.querySelector('#ingredients');

// Перебирає масив та створює елементи списку li

const makeItems = ingredients.map(ingredient => {
  const newItemEl = document.createElement('li');
  newItemEl.textContent = ingredient;
  newItemEl.classList.add('item');
  return newItemEl;
});

// Додає та розпиляє масив елементів в список
const elements = listEl.append(...makeItems);
