const form = document.querySelector("form");
const input = document.querySelector("#input");
const ol = document.querySelector("ol");

const clear = document.querySelector("#clear-btn");

clear.addEventListener("click", () => {
  new Audio("./music/new.mp3").play();
  ol.innerHTML = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  ol.innerHTML += `<li>${input.value}</li>`;
  new Audio("./music/message.mp3").play();
  input.value = "";
});

input.addEventListener("input", () => {
  new Audio("./music/click-button+.mp3").play();
});
