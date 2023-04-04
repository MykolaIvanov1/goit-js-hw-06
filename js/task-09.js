// Елементи DOM
const btnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const hexEl = document.querySelector(".color");

// Функція генерування випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція присвоює BG color .body та назву кольору в span

function changeBodyBgColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;

  hexEl.textContent = color;
  console.log();
}

// Подія при click по Btn

const onClickBtnChangeBgColor = btnEl.addEventListener(
  "click",
  changeBodyBgColor
);
