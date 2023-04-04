const inputEl = document.querySelector("#validation-input");

const validText = Number(inputEl.dataset.length);

const checkValid = (event) => {
  if (event.currentTarget.value.length === validText) {
    return inputEl.classList.add("valid"), inputEl.classList.remove("invalid");
  }
  return inputEl.classList.add("invalid"), inputEl.classList.remove("valid");
};

const onBlurCheck = inputEl.addEventListener("blur", checkValid);
