const submitBtn = document.getElementById("submit-btn");
const dismissBtn = document.getElementById("dismiss-btn");
const startContainer = document.querySelector(".card-container");
const succesContainer = document.querySelector(".card-container-succes");
const form = document.querySelector(".form");
const errorMsg = document.querySelector(".err");
const emailInput = document.getElementById("email-input");
const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!emailPattern.test(email)) {
    form.classList.add("error");
    errorMsg.classList.remove("hidden");
  } else {
    startContainer.classList.add("hide");
    succesContainer.classList.remove("hide");
  }
});

form.addEventListener("keydown", () => {
  form.classList.remove("error");
  errorMsg.classList.add("hidden");
});

dismissBtn.addEventListener("click", function () {
  startContainer.classList.remove("hide");
  succesContainer.classList.add("hide");
});
