const formEl = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();

  const inputEl = event.currentTarget.elements;
  const email = inputEl.email.value;
  const password = inputEl.password.value;
  const formDate = {
    email,
    password,
  };

  if (email === "" || password === "") {
    return alert("Заповніть всі поля!");
  }

  console.log(formDate);
  event.currentTarget.reset();
}
formEl.addEventListener("submit", onFormSubmit);
