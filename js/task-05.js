const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

function addText(event) {
  if (event.currentTarget.value === "") {
    return (nameEl.textContent = "Anonymous");
  }
  return (nameEl.textContent = event.currentTarget.value.trim());
}

const onInputText = inputEl.addEventListener("input", addText);
