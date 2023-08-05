import "./style.scss";

let isOpen = false;

const navBtn = document.querySelector(".nav-btn");

const body = document.querySelector("body");

navBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    body.classList.add("nav-open");
  } else {
    body.classList.remove("nav-open");
  }
});
