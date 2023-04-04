// Отримує доступ до елементів Dom

const inputNumberEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes');

// Створює рамдомний колір

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onInputClick = inputNumberEl.addEventListener('input', event => {
  console.log(event.currentTarget.value);
});

// Створює елементи

function createBoxes(amount) {
  amount = inputNumberEl.addEventListener('input', event => {
    event.currentTarget.value;
  });
}

// Видаляє елементи
