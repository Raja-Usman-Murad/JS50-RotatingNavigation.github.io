const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const topp = document.querySelectorAll(".topp");
open.addEventListener("click", () => {
  container.classList.add("show-nav");
});
close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
topp.forEach((value) => {
  value.addEventListener("click", () => {
    container.classList.remove("show-nav");
  });
});
