const incrementBtnEl = document.querySelector("button[data-action=increment]");
const decrementBtnEl = document.querySelector("button[data-action=decrement]");
const counterEl = document.querySelector("#value");

let counterValue = 0;
// Додає значення лічильника
const onClickBtnIncrement = incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});
// Віднімає значення лічильника
const onClickBtnDecrement = decrementBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});
