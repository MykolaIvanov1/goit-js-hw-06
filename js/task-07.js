const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

const resizes = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};

const onInputChange = inputEl.addEventListener("input", resizes);
